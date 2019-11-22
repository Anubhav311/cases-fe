import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchParts } from '../../actions/skillPartsAction';
import Slider from './Slider/Slider';
import { Div_parts } from './Parts_styles';

function Parts(props) {

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
                    <p className="partTimeElapsed">{(new Date() - new Date(part.created_at))}</p>
                </div>
                <Slider/>
                <div className="cardDivider"></div>
                <div className="partFooter">
                    <p className="completionStatus">Completed: {part.completion_status}</p>
                    <p className="socialStatus">Social: {part.social_status}</p>
                </div>
                
            </div>
        ))
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
