import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createCase } from '../actions/skillsActions';

function CaseForm(props) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleChange = e => {
        if (e.target.name == 'title') {
            setTitle(e.target.value)
        } else if (e.target.name == 'body') {
            setBody(e.target.value)
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        // call action
        // props.createCase({id: 1, title: title, body: body});
    }

    return (
        <div>
            <h1>Add Case</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label><br/>
                    <input type='text' name='title' value={title} onChange={handleChange}/>
                </div>
                <br/>
                <div>
                    <label>Body: </label><br/>
                    <textarea name='body' value={body} onChange={handleChange}/>
                </div>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         newCase: state.cases.newCase.item
//     }
// }

// export default connect(mapStateToProps, { createCase })(CaseForm);
export default CaseForm;