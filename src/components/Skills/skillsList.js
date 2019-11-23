import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSkills } from '../../actions/actionCreators';
import { Div_list, Div_skill, Div_dot, Div_content, P_dropDown, P_skill } from './skillsList_styles';
import { cloneNode } from '@babel/types';

function SkillsList(props) {
    useEffect(() => {
        props.fetchSkills();
    }, []) 

    let skills
    if (props.skills) {
        skills = props.skills.map((skill, key) => (
            <div className="skill" key={key}>
                <div className="dot"></div>
                    <div className="content">
                        <p className="skillText">{skill.skill}</p>
                        <p>{skill.created_at}</p>
                        <p>completion</p>
                        <p className="dropDown">*</p>
                    </div>
            </div>
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
