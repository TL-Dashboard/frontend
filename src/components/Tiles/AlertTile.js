import React, { useState } from 'react';
import styled from "styled-components";
import { putTicket, delTicket } from '../../utils';

import { ReactComponent as Support } from './../../assets/alert-1.svg';
import { ReactComponent as Submitted } from './../../assets/alert-2.svg';
import { ReactComponent as Ticket } from './../../assets/alert-3.svg';
import { ReactComponent as Missing } from './../../assets/alert-4.svg';

const AlertTile = (props) => {
    const context = props.context
    const { tickets } = context;

    const [ticketToDelete, setTicketToDelete] = useState({
        warn: false
    })

    const handleAlertItemClick = (event, id, status) => {
        event.preventDefault()
        // console.log('ticket click', id, status)
        if (status === 'In-Progress'){
            const ticket = {
                id: id,
                status: "Completed"
            }
            putTicket(ticket, context.actions.updateState )
        } else if (status === 'Completed'){
            setTicketToDelete({
                warn: true,
                id: id,
                status: "Completed"
            })
        }

    }

    const handleTicketToDelete = (event, shouldDelete) =>{
        event.preventDefault()
        if (shouldDelete){
            // console.log('deleting...', ticketToDelete)
            delTicket(ticketToDelete, context.actions.updateState)
        } else {
            // console.log('update')
            putTicket({id: ticketToDelete.id, status:"In-Progress"}, context.actions.updateState)
        }
        setTicketToDelete({warn: false})
    }

    const handleNewTicket = (event) =>{
        event.preventDefault()
        props.history.push("/dashboard/tickets")
    }

    return (
        <div className='tile__alert'>
            <div className='tile__alert__boxes'>
                <AlertBox className={`${tickets.some(i => i.type === 'Support Hours' && i.status !== "Completed") ? 'alert' : ''} tile__alert__boxes__box`} backgroundColor='#C080FF'>
                    <Support />
                </AlertBox>
                <AlertBox className={`${tickets.some(i => i.type === 'Other'  && i.status !== "Completed") ? 'alert' : ''} tile__alert__boxes__box`} backgroundColor='#80FFAC'>
                    <Ticket />
                </AlertBox>
                <AlertBox className={`${tickets.some(i => i.type === 'Grades'  && i.status !== "Completed") ? 'alert' : ''} tile__alert__boxes__box`} backgroundColor='#80D3FF'>
                    <Submitted />
                </AlertBox>
                <AlertBox className={`${tickets.some(i => i.type === 'Attendance'  && i.status !== "Completed") ? 'alert' : ''} tile__alert__boxes__box`} backgroundColor='#FF8080'>
                    <Missing />
                </AlertBox>
            </div>
            <div className='tile__alert__container'>
                <div className='tile__alert__container__list'>
                    {/* Use map for alerts. */}
                    {ticketToDelete.warn ? (
                        <div className='delete-alert'>
                            <p>Delete Ticket?</p>
                            <div>
                                <button id="yes" onClick={(e) => handleTicketToDelete(e, true)}>Yes</button>
                                <button id="no" onClick={() => setTicketToDelete({warn: false})}>No</button>
                            </div>
                            <button id="in-progress" onClick={(e) => handleTicketToDelete(e, false)}>Mark as In Progress</button>
                        </div>
                    ):(
                    // <>
                    // {
                        tickets.length > 0 ? 
                        tickets.map(({ id, type, posted_by, description, status }) => (
                            <div className='tile__alert__container__list--item' onClick={(e) => handleAlertItemClick(e, id, status)} key={id} type={type}>
                                <AlertsItemLogo type={type} className={`tile__alert__container__list--item__left`}>
                                    {getLogo(type)}
                                    <span><span id={`${status}`}>{"\u2713"}</span></span>
                                </AlertsItemLogo>
                                <div className={`tile__alert__container__list--item__right--${status}`}>
                                    <p>{getAbrevName(posted_by)}: {description}</p>
                                </div>
                            </div>
                        ))
                        :
                        (<p>No tickets to show.</p>)
                    // }
                    // </>
                    )}
                </div>

            </div>
            <div className='submit-btn'>
                <button onClick={handleNewTicket}>New Ticket</button>
            </div>
        </div>
    )
}

export default AlertTile

const getAbrevName = name => `${name.split(" ")[0]} ${name.split(" ")[1].split("")[0]}.`

const getLogo = type => {
    switch(type) {
        case 'Support Hours':
            return (<Support />);
        case 'Other':
            return <Ticket />;
        case 'Grades':
            return (<Submitted />);
        case 'Attendance':
            return (<Missing />);

        default:
            return (<p>Error occured.</p>);
    }
}

const getBackgroundColor = type => {
    switch(type) {
        case 'Support Hours':
            return "#C080FF";
        case 'Other':
            return "#80FFAC";
        case 'Grades':
            return "#80D3FF";
        case 'Attendance':
            return '#FF8080';
        default:
            return 'darkgrey';
    }
}

// const getEndingMessage = type => {
//     switch(type) {
//         case 'support':
//             return "has requested support hours.";
//         case 'submitted':
//             return "has submitted a retrospective.";
//         case 'missing':
//             return "is missing a retrospective.";
//         case 'ticket':
//             return 'has submitted a ticket.';
//         default:
//             return 'Error occured.';
//     }
// }

const AlertsItemLogo = styled.div`
    background-color: ${({ type }) => getBackgroundColor(type)};
`;

const AlertBox = styled.div`
    background: ${props => props.backgroundColor || "red"};
`;