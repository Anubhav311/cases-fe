import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchParts } from '../../actions/skillPartsAction';
import Slider from './Slider/Slider';
import { Div_parts } from './Parts_styles';
import TimeElapsed from '../timeElapsed/timeElapsed';

function Parts(props) {
console.log(props)
    useEffect(() => {
        props.fetchParts();
    }, [])

    let parts
    if (props.parts) {
        parts = props.parts.map((part, key) => (
            <div className="part" key={key}>
                <div className="partHeader">
                    <div className="partNameContainer">
                        <p className="partName">{part.part_name}</p>
                    </div>
                    <TimeElapsed created_at={part.created_at}/>
                </div>
                <Slider/>
                <div className="cardDivider"></div>
                <div className="partFooter">
                    <p className="completionStatus">Completed: {part.completion_status}</p>
                    <p className="socialStatus">Social: {part.social_status}</p>
                </div>
                
            </div>
        ))

        parts.push(
            <div className="part">
                <button className="createNewPart">
                    +
                </button>
            </div>
        )
    }

    return (
        <Div_parts>
            <h1>Parts</h1>
            <div className="parts"></div>
            <div className="partsContainer">
                {parts}
            </div>
        </Div_parts>
    )
}

function mapStateToProps(state) {
    return {
        ...state,
        parts: state.parts.parts
    }
}

export default connect(mapStateToProps, { fetchParts })(Parts);
