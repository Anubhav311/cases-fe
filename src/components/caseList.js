import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCases } from '../actions/caseActions';
import { ListDiv, SkillDiv, DotDiv, ContentDiv, DropDownP, SkillP } from './caseList_styles';

function CaseList(props) {

    useEffect(() => {
        props.fetchCases();
    }, [])

    let caseItems
    if (props.cases) {
        caseItems = props.cases.map((item, key) => (
            <SkillDiv key={key}>
                <DotDiv></DotDiv>
                    <ContentDiv>
                        <SkillP>{item.skill}</SkillP>
                        <p>{item.created_at}</p>
                        <p>completion</p>
                <DropDownP>*</DropDownP>
                    </ContentDiv>
            </SkillDiv>
        ))
    }
    return (
        <ListDiv>
            <h1>Cases List</h1>
            {caseItems}
        </ListDiv>
    )
}

function mapStateToProps(state) {
    return {
        ...state,
        cases: state.cases.items,
    }
}

export default connect(mapStateToProps, { fetchCases })(CaseList);
