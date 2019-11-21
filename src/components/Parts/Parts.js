import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchParts } from '../../actions/skillPartsAction';
import { Div_parts, Div_divider, Div_part, Div_parts_container } from './Parts_styles';

function Parts(props) {

    useEffect(() => {
        props.fetchParts();
    }, []) 

    let parts
    if (props.parts) {
        parts = props.parts.map((part, key) => (
            <Div_part key={key}>
                <p>{part.part_name}</p>
                <p>{part.created_at}</p>
            </Div_part>
        ))
    }

    return (
        <Div_parts>
            <h1>Parts</h1>
            <Div_divider></Div_divider>
            <Div_parts_container>
                {parts}
            </Div_parts_container>
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
