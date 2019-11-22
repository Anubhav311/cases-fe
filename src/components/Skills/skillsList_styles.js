import styled from 'styled-components';

export const Div_list = styled.div`
    width: 75%;
    margin: auto;

    .skill {
        box-sizing: border-box;
        height: 80px;
        background: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 40px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: bold;
        box-shadow: 0px 5px 30px -10px;
    }

    .dot {
        width: 10px;
        height: 10px;
        background: red;
        border-radius: 50%;
        margin: 0 30px;
    }

    .content {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .skillText {
        margin: 0 30px;
    }

    .dropDown {
        width: 20%;
    }
`