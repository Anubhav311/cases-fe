import styled from 'styled-components';

export const Div_slider = styled.div`
.slider {
    -webkit-appearance: none;
    margin: 40px 0;
    width: 90%;
    height: 6px;
    border-radius: 5px;
    background: linear-gradient(90deg, black ${props => props.color}, #ccc ${props => props.color});
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 18px;
        height: 18px;
        border: 5px solid black;
        border-radius: 50%;
        background: white;
        cursor: pointer;
    }
    &::-webkit-slider-thumb:hover {
        /* box-shadow: 0 0 0 20px; */
    }
    &:hover {
        opacity: 1;
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