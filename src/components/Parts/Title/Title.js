import React from 'react';
import { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux';

import { PartTitleContainer } from './Title_styles';
import { updatePartTitle } from '../../../actions/actionCreators';

function Title(props) {
    const [isInEditMode, setIsInEditMode] = useState(false)

    let parts = props.parts
    let index = props.index

    const inputRef = useRef(null);
    
    useEffect(() => {
        if (isInEditMode) {
            inputRef.current.focus()
        }
    }, [isInEditMode])
    console.log(props)

    const changeEditMode = () => {
        setIsInEditMode(!isInEditMode)
    }

    const changeHandler = (e) => {
        parts[index].part_name = e.target.value
        props.updatePartTitle(parts)
    }

    return (
        <PartTitleContainer>
            {isInEditMode 
                ? 
            <input 
                onChange={changeHandler} 
                onBlur={changeEditMode} 
                type="text" 
                ref={inputRef} 
                defaultValue={parts[index].part_name}
            /> 
                : 
            <p onClick={changeEditMode} className="partName">
                {parts[index].part_name}
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
