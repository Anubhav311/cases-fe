import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCases } from '../actions/caseActions';

function CaseList(props) {

    useEffect(() => {
        props.fetchCases();
        // axios.get('https://notes-app-be.herokuapp.com/api/items')
        //     .then(response => console.log(response.data))
            // .then(cases => dispatch({
            //     type: FETCH_CASES,
            //     payload: cases
            // }))

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

function mapStateToProps(state) {
    return {
        ...state,
        cases: state.cases.items,
    }
}

export default connect(mapStateToProps, { fetchCases })(CaseList);
// export default CaseList;