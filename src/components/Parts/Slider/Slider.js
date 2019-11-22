import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchParts } from '../../actions/skillPartsAction';
// import { Div_parts, Div_divider, Div_part, Div_parts_container, P_1, P_2, P_3, P_4, Div_1, Div_2, Div_1a, Div_card_divider, Input_slider } from './Parts_styles';

function Parts(props) {
    const [sliderValue, setSliderValue] = useState(1)
    // useEffect(() => {
    //     props.fetchParts();
    // }, [])

    function changeSlider(e) {
        setSliderValue(e.target.value)
    }

    return (
        <div>
            <input 
                className="slider" 
                value={sliderValue} 
                type='range' 
                min={1} 
                max={100} 
                onChange={changeSlider}
            />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state,
        parts: state.parts.parts
    }
}

export default connect(mapStateToProps, { fetchParts })(Parts);
