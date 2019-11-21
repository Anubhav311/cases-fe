import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchParts } from '../../actions/skillPartsAction';
import { Div_parts, Div_divider, Div_part, Div_parts_container, P_1, P_2, P_3, P_4, Div_1, Div_2, Div_1a } from './Parts_styles';

function Parts(props) {
    useEffect(() => {
        props.fetchParts();
    }, []) 

    let parts
    if (props.parts) {
        parts = props.parts.map((part, key) => (
            <Div_part key={key}>
                <Div_1>
                    <Div_1a>
                        <P_1>{part.part_name}</P_1>
                    </Div_1a>
                    <P_2>{(new Date() - new Date(part.created_at))}</P_2>
                </Div_1>
                <div>slider</div>
                <div></div>
                <Div_2>
                    <P_3>Completed: {part.completion_status}</P_3>
                    <P_4>Social: {part.social_status}</P_4>
                </Div_2>
                
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
