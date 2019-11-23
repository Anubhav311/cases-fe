import React from 'react';

import { useState, useEffect, useRef } from 'react'

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
        console.log("should go to edit mode now")
        setTitle({...title, isInEditMode: !title.isInEditMode})
    }

    return (
        <div>

    {title.isInEditMode ? <input onBlur={changeEditMode} type="text" ref={inputRef}/> : <p onClick={changeEditMode}>{title.value}</p> }
        </div>
    )
}

export default Title;