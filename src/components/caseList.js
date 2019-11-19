import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCases } from '../actions/caseActions';

function CaseList(props) {

    useEffect(() => {
        props.fetchCases();
    }, [])

    let caseItems
    if (props.cases) {
        caseItems = props.cases.map((post, key) => (
            <div key={key}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
    }
    return (
        <div>
            <h1>Cases List</h1>
            {caseItems}
        </div>
    )
}

const mapStateToProps = state => ({
    ...state,
    cases: state.cases.items,
})

export default connect(mapStateToProps, { fetchCases })(CaseList);
// export default CaseList;