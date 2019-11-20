import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCases } from '../actions/caseActions';
import { fetchParts } from '../actions/skillPartsAction';
import { Div_list, Div_skill, Div_dot, Div_content, P_dropDown, P_skill } from './caseList_styles';

function CaseList(props) {
    console.log(props)
    useEffect(() => {
        props.fetchCases();
        props.fetchParts();
    }, [])

    let caseItems
    if (props.cases) {
        caseItems = props.cases.map((item, key) => (
            <Div_skill key={key}>
                <Div_dot></Div_dot>
                    <Div_content>
                        <P_skill>{item.skill}</P_skill>
                        <p>{item.created_at}</p>
                        <p>completion</p>
                <P_dropDown>*</P_dropDown>
                    </Div_content>
            </Div_skill>
        ))
    }
    return (
        <Div_list>
            <h1>Cases List</h1>
            {caseItems}
        </Div_list>
    )
}

function mapStateToProps(state) {
    return {
        ...state,
        cases: state.cases.items,
    }
}

export default connect(mapStateToProps, { fetchCases, fetchParts })(CaseList);
