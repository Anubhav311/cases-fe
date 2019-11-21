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

    let skills
    if (props.skills) {
        skills = props.skills.map((skill, key) => (
            <Div_skill key={key}>
                <Div_dot></Div_dot>
                    <Div_content>
                        <P_skill>{skill.skill}</P_skill>
                        <p>{skill.created_at}</p>
                        <p>completion</p>
                        <P_dropDown>*</P_dropDown>
                    </Div_content>
            </Div_skill>
        ))
    }

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
        <Div_list>
            <h1>Skills List</h1>
            {skills}
            {parts}
        </Div_list>
    )
}

function mapStateToProps(state) {
    return {
        ...state,
        skills: state.skills.skills,
        parts: state.parts.parts
    }
}

export default connect(mapStateToProps, { fetchSkills, fetchParts })(SkillsList);
