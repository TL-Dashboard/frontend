import React from 'react'
import styled from "styled-components";

import { ReactComponent as Support } from '../../../assets/alert-1.svg';
import { ReactComponent as Submitted } from '../../../assets/alert-2.svg';
import { ReactComponent as Ticket } from '../../../assets/alert-3.svg';
import { ReactComponent as Missing } from '../../../assets/alert-4.svg';

export default ({ context }) => {
    const { alerts } = context;

    const handleAlertItemClick = (event, id) => {
        const { target } = event;
        const { removeAlert } = context.actions;
        removeAlert(id);
    }

    return (
        <AlertContainer>
            <AlertBoxes>
                <AlertBox className={alerts.some(i => i.type === 'support') ? 'alert' : ''} backgroundColor='#FF8080'>
                    <Support />
                </AlertBox>
                <AlertBox className={alerts.some(i => i.type === 'ticket') ? 'alert' : ''} backgroundColor='#80FFAC'>
                    <Ticket />
                </AlertBox>
                <AlertBox className={alerts.some(i => i.type === 'submitted') ? 'alert' : ''} backgroundColor='#80D3FF'>
                    <Submitted />
                </AlertBox>
                <AlertBox className={alerts.some(i => i.type === 'missing') ? 'alert' : ''} backgroundColor='#C080FF'>
                    <Missing />
                </AlertBox>
            </AlertBoxes>
            <AlertsContainer>
                <AlertsList>
                    {/* Use map for alerts. */}
                    {
                        alerts.map(({ id, type, user }) => (
                            <AlertsItem onClick={(e) => handleAlertItemClick(e, id)} key={id} type={type}>
                                <div className='alertitem__left'>
                                    {getLogo(type)}
                                </div>
                                <div className='alertitem__right'>
                                    <p>{getAbrevName(user)} {getEndingMessage(type)}</p>
                                </div>
                            </AlertsItem>
                        ))
                    }
                    
                </AlertsList>
            </AlertsContainer>
        </AlertContainer>
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

const AlertsItem = styled.div`
    width: 100%;
    display: flex;
    
    & + & {
        margin-top: 10px;
    }

    &:hover{ cursor: pointer; }

    .alertitem{
        &__left {
            height: 30px;
            width: 30px;

            background-color: ${({ type }) => getBackgroundColor(type)};

            display: flex;
            justify-content: center;
            align-items: center;

            svg {
                width: 10px;
            }
        }
    
        &__right{
            height: auto;
            width: calc(100% - 30px);
            display: flex;
            align-items: center;
            padding: 5px 0 5px 10px;
            background: #EEE;
            p {
                font-size: .7rem;
                margin: 0;
            }
        }
    }

`;

const AlertsList = styled.ul`
    list-style: none;
    padding: 0;
`;

const AlertContainer = styled.div`
    background:white;

    height: 260px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

const AlertsContainer = styled.div`
    width: 90%;
    margin: 0 auto;

    color: black;

    height: 230px;

    overflow-y: scroll;

`;

const AlertBoxes = styled.div`
    height: 90px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
`;

const AlertBox = styled.div`
    background: ${props => props.backgroundColor || "red"};
    width: 50px; height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 20px;
        height: 20px;
    }

    &.alert {
        position:relative;
        &::after {
            content: " ";
            width: 10px;
            height: 10px;
            background:red;
            position: absolute;
            right: -5px;
            top: -5px;
            border-radius: 100%;
            border: 2px solid white;

        }
    }
`;