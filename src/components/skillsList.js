import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSkills } from '../actions/skillsActions';
import { Div_list, Div_skill, Div_dot, Div_content, P_dropDown, P_skill } from './skillsList_styles';
import { cloneNode } from '@babel/types';

function SkillsList(props) {
    useEffect(() => {
        props.fetchSkills();
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

    return (
        <Div_list>
            <h1>Skills List</h1>
            {skills}
        </Div_list>
    )
}

function mapStateToProps(state) {
    return {
        ...state,
        skills: state.skills.skills,
    }
}

export default connect(mapStateToProps, { fetchSkills })(SkillsList);
