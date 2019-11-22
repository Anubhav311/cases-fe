import styled from 'styled-components';


export const Div_parts = styled.div`
    width: 80%;
    margin: auto;

    .parts {
        width: 100%;
        height: 3px;
        background: darkgray;
        border-radius: 5px;
        margin: 20px 0;
    }

    .partsContainer {
        display: flex;
    }

    .part {
        width: 30%;
        min-width: 100px;
        height: 200px;
        border-radius: 10px;
        margin-right: 40px;
        background: #FFFFFF;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0px 5px 30px -10px;
    }

    .partHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .partNameContainer {
        padding: 10px;
        padding-right: 20px;
        padding-left: 20px;
        background: black;
        border-radius: 25px;
        box-shadow: 0px 5px 30px -5px;
    }

    .partName {
        font-size: 0.8rem;
        margin: 0;
        color: white;
    }

    .partTimeElapsed {
        font-size: 0.8rem;
        margin: 0;
    }

    .cardDivider {
        height: 1px;
        background: darkgray;
        width: 100%;
    }

    .partFooter {
        display: flex;
        justify-content: space-between;
    }

    .completionStatus {
        font-size: 0.8rem;
        margin: 0;
    }

    .socialStatus {
        font-size: 0.8rem;
        margin: 0;
    }
`
