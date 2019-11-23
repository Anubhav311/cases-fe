import React from 'react';
import { useState, useEffect, useRef } from 'react'

import { PartTitleContainer } from './Title_styles';

function Title(props) {
    const [title, setTitle] = useState({
        value: "Title",
        isInEditMode: false
    })

    const inputRef = useRef(null);

    useEffect(() => {
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
            <p onClick={changeEditMode}>
                {title.value}
            </p> }
        </PartTitleContainer>
    )
}

export default Title;