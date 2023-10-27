import { keyframes } from 'styled-components';
const RightShow = keyframes`
    0% {
        width: 90%;
        height: 90%;
        top: 50%;
        left: 40%;
        transform: translateY(-50%);
        z-index:0;
    }
    30% {
        width: 95%;
        height: 95%;
        top: 50%;
        left: 50%;
        transform: translateY(-50%);
        z-index:1;
    }
    100% {
        width: 100%;
        height: 114%;
        top: -7%;
        left: 0%;
        transform:translateY(0);
        z-index:1;
    }
    `;
const RightHide = keyframes`
    0% {
        width: 100%;
        height: 100%;
        top: 0;
        left: 20%;
        transform:translateY(0);
        z-index:1;
    }
    30% {
        top:50%;
        left: 50%;
        width: 95%;
        height: 95%;
        transform: translateY(-50%);
        z-index:0;
    }
    100% {
        top:50%;
        left:40%;
        width: 90%;
        height:90%;
        transform: translateY(-50%);
        z-index:0;
    }
    `;
const LeftShow = keyframes`
    0% {
        width: 90%;
        height: 90%;
        top: 50%;
        left: -40%;
        transform: translateY(-50%);
        z-index:0;
    }
    30% {
        width: 95%;
        height: 95%;
        top: 50%;
        left: -50%;
        transform: translateY(-50%);
        z-index:1;
    }
    100% {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0%;
        transform:translateY(0);
        z-index:1;
    }
    `;
const LeftHide = keyframes`
    0% {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0%;
        transform:translateY(0);
        z-index:1;
    }
    30% {
        top:50%;
        left: -50%;
        width: 95%;
        height: 95%;
        transform: translateY(-50%);
        z-index:0;
    }
    100% {
        top:50%;
        left:-20%;
        width: 90%;
        height:90%;
        transform: translateY(-50%);
        z-index:0;
    }
    `;


export {
    RightShow,
    RightHide,
    LeftHide,
    LeftShow
}