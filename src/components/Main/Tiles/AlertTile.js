import React from 'react'
import styled from "styled-components";

import { ReactComponent as Person } from '../../../assets/alert-1.svg';
import { ReactComponent as Clipboard } from '../../../assets/alert-2.svg';
import { ReactComponent as Mail } from '../../../assets/alert-3.svg';
import { ReactComponent as Alert } from '../../../assets/alert-4.svg';

export default ({ context }) => {
    return (
        <AlertContainer>
            <AlertBoxes>
                <AlertBox className='alert' backgroundColor='#FF8080'>
                    <Person />
                </AlertBox>
                <AlertBox backgroundColor='#80D3FF'>
                    <Clipboard />
                </AlertBox>
                <AlertBox backgroundColor='#80FFAC'>
                    <Mail />
                </AlertBox>
                <AlertBox className='alert' backgroundColor='#C080FF'>
                    <Alert />
                </AlertBox>
            </AlertBoxes>
            <AlertsContainer>
                <AlertsList>
                    {/* Use map for alerts. */}
                    <AlertsItem type='support'>
                        <div className='alertitem__left'>
                            <Person />
                        </div>
                        <div className='alertitem__right'>
                            <p>Fern B. has requested support hours.</p>
                        </div>
                    </AlertsItem>
                    <AlertsItem type='submitted'>
                        <div className='alertitem__left'>
                            <Clipboard />
                        </div>
                        <div className='alertitem__right'>
                            <p>Zakary K. has submitted a sprint retrospective.</p>
                        </div>
                    </AlertsItem>
                    <AlertsItem type='ticket'>
                        <div className='alertitem__left'>
                            <Alert />
                        </div>
                        <div className='alertitem__right'>
                            <p>Berry F. has submitted a ticket.</p>
                        </div>
                    </AlertsItem>
                    <AlertsItem type='missing'>
                        <div className='alertitem__left'>
                            <Alert />
                        </div>
                        <div className='alertitem__right'>
                            <p>Russ H. is missing a module retrospective.</p>
                        </div>
                    </AlertsItem>
                    <AlertsItem type='missing'>
                        <div className='alertitem__left'>
                            <Alert />
                        </div>
                        <div className='alertitem__right'>
                            <p>Russ H. is missing a module retrospective.</p>
                        </div>
                    </AlertsItem>
                    <AlertsItem type='missing'>
                        <div className='alertitem__left'>
                            <Alert />
                        </div>
                        <div className='alertitem__right'>
                            <p>Russ H. is missing a module retrospective.</p>
                        </div>
                    </AlertsItem>
                </AlertsList>
            </AlertsContainer>
        </AlertContainer>
    )
}

const getBackgroundColor = type => {
    switch(type) {
        case 'support':
            return "#FF8080";
        case 'submitted':
            return "#80D3FF";
        case 'missing':
            return "#80FFAC";
        case 'ticket':
            return '#C080FF';
        default:
            return 'black';
    }
}

const AlertsItem = styled.div`
    width: 100%;
    display: flex;
    
    & + & {
        margin-top: 10px;
    }

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
    margin-top: 10px;

    height: 150px;
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