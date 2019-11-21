import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchParts } from '../actions/skillPartsAction';

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
        <div>
            <h1>Parts</h1>
            {parts}
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
