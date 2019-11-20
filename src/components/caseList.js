import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCases } from '../actions/caseActions';

function CaseList(props) {
    console.log(props)
    useEffect(() => {
        props.fetchCases();
    }, [])

    let caseItems
    if (props.cases) {
        caseItems = props.cases.map((item, key) => (
            <div key={key}>
                <h3>{item.skill}</h3>
                <p>{item.created_at}</p>
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
