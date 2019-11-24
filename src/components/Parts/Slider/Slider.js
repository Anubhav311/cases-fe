import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// import { fetchParts } from '../../actions/skillPartsAction';
import { Div_slider } from './Slider_styles';

function Slider(props) {
    const [sliderValue, setSliderValue] = useState(1)

    function changeSlider(e) {
        setSliderValue(e.target.value)
    }

    let parts = props.parts
    let index = props.index
    parts[index].completion_status = sliderValue
    console.log(parts)

    return (
        <Div_slider color={sliderValue + "%"}>
            <input 
                className="slider" 
                value={sliderValue} 
                type='range' 
                min={1} 
                max={100} 
                onChange={changeSlider}
            />
        </Div_slider>
    )
}

function mapStateToProps(state) {
    return {
        ...state,
        parts: state.parts.parts
    }
}

export default connect(mapStateToProps)(Slider);
