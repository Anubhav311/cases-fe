import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchCases } from '../actions/caseActions';

const ListDiv = styled.div`
    width: 75%;
    margin: auto;
`

const SkillDiv = styled.div`
    box-sizing: border-box;
    height: 80px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
`

const DotDiv = styled.div`
    width: 10px;
    height: 10px;
    background: red;
    border-radius: 50%;
    margin: 0 30px;
`

const ContentDiv = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const DropDownP = styled.p`
    margin: 0 30px;
`

const SkillP = styled.p`
    width: 20%;
`

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
