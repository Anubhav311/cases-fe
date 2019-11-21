import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSkills } from '../actions/skillsActions';
import { fetchParts } from '../actions/skillPartsAction';
import { Div_list, Div_skill, Div_dot, Div_content, P_dropDown, P_skill } from './skillsList_styles';
import { cloneNode } from '@babel/types';

function SkillsList(props) {
    console.log(props)
    useEffect(() => {
        props.fetchSkills();
        props.fetchParts();
    }, []) 

    let skillItems
    if (props.skills) {
        skillItems = props.skills.map((item, key) => (
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
            <h1>Skills List</h1>
            {skillItems}
        </Div_list>
    )
}

function mapStateToProps(state) {
    console.log(state)
    return {
        ...state,
        skills: state.skills.skills,
    }
}

export default connect(mapStateToProps, { fetchSkills, fetchParts })(SkillsList);
