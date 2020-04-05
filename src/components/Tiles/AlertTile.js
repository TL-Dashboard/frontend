import React from 'react';
import styled from "styled-components";
import { putTicket } from '../../utils';

import { ReactComponent as Support } from './../../assets/alert-1.svg';
import { ReactComponent as Submitted } from './../../assets/alert-2.svg';
import { ReactComponent as Ticket } from './../../assets/alert-3.svg';
import { ReactComponent as Missing } from './../../assets/alert-4.svg';

export default ({ context }) => {
    const { tickets } = context;

    const handleAlertItemClick = (event, id, status) => {
        event.preventDefault()
        console.log('ticket click', id, status)
        if (status === 'In-Progress'){
            const ticket = {
                id: id,
                status: "Completed"
            }
            putTicket(ticket, context.actions.updateState )
        }

    }

    return (
        <div className='tile__alert'>
            <div className='tile__alert__boxes'>
                <AlertBox className={`${tickets.some(i => i.type === 'Support Hours' && i.status !== "Completed") ? 'alert' : ''} tile__alert__boxes__box`} backgroundColor='#FF8080'>
                    <Support />
                </AlertBox>
                <AlertBox className={`${tickets.some(i => i.type === 'Other'  && i.status !== "Completed") ? 'alert' : ''} tile__alert__boxes__box`} backgroundColor='#80FFAC'>
                    <Ticket />
                </AlertBox>
                <AlertBox className={`${tickets.some(i => i.type === 'Grades'  && i.status !== "Completed") ? 'alert' : ''} tile__alert__boxes__box`} backgroundColor='#80D3FF'>
                    <Submitted />
                </AlertBox>
                <AlertBox className={`${tickets.some(i => i.type === 'Attendance'  && i.status !== "Completed") ? 'alert' : ''} tile__alert__boxes__box`} backgroundColor='#C080FF'>
                    <Missing />
                </AlertBox>
            </div>
            <div className='tile__alert__container'>
                <div className='tile__alert__container__list'>
                    {/* Use map for alerts. */}
                    {
                        tickets.length > 0 ? 
                        tickets.map(({ id, type, posted_by, description, status }) => (
                            <div className='tile__alert__container__list--item' onClick={(e) => handleAlertItemClick(e, id, status)} key={id} type={type}>
                                <AlertsItemLogo type={type} className='tile__alert__container__list--item__left'>
                                    {getLogo(type)}
                                </AlertsItemLogo>
                                <div className={`tile__alert__container__list--item__right--${status}`}>
                                    <p>{getAbrevName(posted_by)} {description}</p>
                                </div>
                            </div>
                        ))
                        :
                        (<p>No tickets to show.</p>)
                    }
                </div>
            </div>
        </div>
    )
}

const getAbrevName = name => `${name.split(" ")[0]} ${name.split(" ")[1].split("")[0]}.`

const getLogo = type => {
    switch(type) {
        case 'Support Hours':
            return (<Support />);
        case 'Other':
            return (<Submitted />);
        case 'Grades':
            return (<Missing />);
        case 'Attendance':
            return <Ticket />;
        default:
            return (<p>Error occured.</p>);
    }
}

const getBackgroundColor = type => {
    switch(type) {
        case 'Support Hours':
            return "#F78080";
        case 'Other':
            return "#80D3FF";
        case 'Grades':
            return "#C080FF";
        case 'Attendance':
            return '#80FFAC';
        default:
            return 'darkgrey';
    }
}

const getEndingMessage = type => {
    switch(type) {
        case 'support':
            return "has requested support hours.";
        case 'submitted':
            return "has submitted a retrospective.";
        case 'missing':
            return "is missing a retrospective.";
        case 'ticket':
            return 'has submitted a ticket.';
        default:
            return 'Error occured.';
    }
}

const AlertsItemLogo = styled.div`
    background-color: ${({ type }) => getBackgroundColor(type)};
`;

const AlertBox = styled.div`
    background: ${props => props.backgroundColor || "red"};
`;