import React from 'react';
import { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux';

import { PartTitleContainer } from './Title_styles';
import { updatePartTitle } from '../../actions/partsTitle';

function Title(props) {
    const [title, setTitle] = useState({
        value: props.title,
        isInEditMode: false
    })

    const inputRef = useRef(null);
    
    useEffect(() => {
        props.updatePartTitle(props.index)
        if (title.isInEditMode) {
            inputRef.current.focus()
        }
    }, [title.isInEditMode])

    const changeEditMode = () => {
        setTitle({...title, isInEditMode: !title.isInEditMode})
    }

    const changeHandler = (e) => {
        setTitle({...title, value: e.target.value})
    }

    return (
        <PartTitleContainer>
            {title.isInEditMode 
                ? 
            <input 
                onChange={changeHandler} 
                onBlur={changeEditMode} 
                type="text" 
                ref={inputRef} 
                defaultValue={title.value}
            /> 
                : 
            <p onClick={changeEditMode} className="partName">
                {title.value}
            </p> }
        </PartTitleContainer>
    )
}

// export default Title;
function mapStateToProps(state) {
    return {
        ...state,
        parts: state.parts.parts
    }
}


export default connect(mapStateToProps, { updatePartTitle })(Title);
