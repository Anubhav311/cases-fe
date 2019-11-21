import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchParts } from '../../actions/skillPartsAction';
import { Div_parts, Div_divider } from './Parts_styles';

function Parts(props) {

    useEffect(() => {
        props.fetchParts();
    }, []) 

    let parts
    if (props.parts) {
        parts = props.parts.map((part, key) => (
            <div key={key}>
                <p>{part.part_name}</p>
                <p>{part.created_at}</p>
            </div>
        ))
    }

    return (
        <Div_parts>
            <h1>Parts</h1>
            <Div_divider></Div_divider>
            {parts}
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
