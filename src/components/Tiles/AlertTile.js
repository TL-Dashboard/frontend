import React from 'react'
import styled from "styled-components";

import { ReactComponent as Support } from './../../assets/alert-1.svg';
import { ReactComponent as Submitted } from './../../assets/alert-2.svg';
import { ReactComponent as Ticket } from './../../assets/alert-3.svg';
import { ReactComponent as Missing } from './../../assets/alert-4.svg';

export default ({ context }) => {
    const { alerts } = context;

    const handleAlertItemClick = (event, id) => {
        const { target } = event;
        const { removeAlert } = context.actions;
        removeAlert(id);
    }

    return (
        <div className='tile__alert'>
            <div className='tile__alert__boxes'>
                <AlertBox className={`${alerts.some(i => i.type === 'support') ? 'alert' : ''} tile__alert__boxes__box`} backgroundColor='#FF8080'>
                    <Support />
                </AlertBox>
                <AlertBox className={`${alerts.some(i => i.type === 'ticket') ? 'alert' : ''} tile__alert__boxes__box`} backgroundColor='#80FFAC'>
                    <Ticket />
                </AlertBox>
                <AlertBox className={`${alerts.some(i => i.type === 'missing') ? 'alert' : ''} tile__alert__boxes__box`} backgroundColor='#80D3FF'>
                    <Submitted />
                </AlertBox>
                <AlertBox className={`${alerts.some(i => i.type === 'submitted') ? 'alert' : ''} tile__alert__boxes__box`} backgroundColor='#C080FF'>
                    <Missing />
                </AlertBox>
            </div>
            <div className='tile__alert__container'>
                <div className='tile__alert__container__list'>
                    {/* Use map for alerts. */}
                    {
                        alerts.length > 0 ? 
                        alerts.map(({ id, type, user }) => (
                            <div className='tile__alert__container__list--item' onClick={(e) => handleAlertItemClick(e, id)} key={id} type={type}>
                                <AlertsItemLogo type={type} className='tile__alert__container__list--item__left'>
                                    {getLogo(type)}
                                </AlertsItemLogo>
                                <div className='tile__alert__container__list--item__right'>
                                    <p>{getAbrevName(user)} {getEndingMessage(type)}</p>
                                </div>
                            </div>
                        ))
                        :
                        (<p>No alerts to show.</p>)
                    }
                </div>
            </div>
        </div>
    )
}

const getAbrevName = name => `${name.split(" ")[0]} ${name.split(" ")[1].split("")[0]}.`

const getLogo = type => {
    switch(type) {
        case 'support':
            return (<Support />);
        case 'submitted':
            return (<Submitted />);
        case 'missing':
            return (<Missing />);
        case 'ticket':
            return <Ticket />;
        default:
            return (<p>Error occured.</p>);
    }
}

const getBackgroundColor = type => {
    switch(type) {
        case 'support':
            return "#F78080";
        case 'submitted':
            return "#80D3FF";
        case 'missing':
            return "#C080FF";
        case 'ticket':
            return '#80FFAC';
        default:
            return 'black';
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