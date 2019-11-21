import styled from 'styled-components';

export const Div_parts = styled.div`
    width: 80%;
    margin: auto;
`

export const Div_divider = styled.div`
    width: 100%;
    height: 3px;
    background: darkgray;
    border-radius: 5px;
    margin: 20px 0;
`

export const Div_part = styled.div`
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

    .slider {
        -webkit-appearance: none;
        margin: 40px 0;
        width: 90%;
        height: 10px;
        border-radius: 5px;
        background: #ccc;
        outline: none;
        opacity: 0.7;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            /* appearance: none; */
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: black;
            cursor: pointer;
        }
        &:hover {
            opacity: 1
        }
        &::-moz-range-thumb {
            width: 25px; 
            height: 25px; 
            background: #4CAF50; 
            cursor: pointer; 
        }
        &::-webkit-slider-runnable-track {
            /* background: black; */
        }
    }
`

export const Div_parts_container = styled.div`
    display: flex;
`

export const P_1 = styled.p`
    font-size: 0.8rem;
    margin: 0;
    color: white;
`

export const P_2 = styled.p`
    font-size: 0.8rem;
    margin: 0;
`

export const P_3 = styled.p`
    font-size: 0.8rem;
    margin: 0;
`

export const P_4 = styled.p`
    font-size: 0.8rem;
    margin: 0;
`

export const Div_1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Div_2 = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Div_1a = styled.div`
    padding: 10px;
    padding-right: 20px;
    padding-left: 20px;
    background: black;
    border-radius: 25px;
    box-shadow: 0px 5px 30px -5px;
`

export const Div_card_divider = styled.div`
    height: 1px;
    background: darkgray;
    width: 100%;
`


