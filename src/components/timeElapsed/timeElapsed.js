import React from 'react'

import { TimeElapsedStyles } from './timeElapsed_styles'
// console.log(timeElapsedStyles)
function TimeElapsed(props) {

    let timeElapsed = ""
    let createdAt = new Date(props.created_at)
    let now = new Date()
    let milliSeconds = now - createdAt
    let seconds = milliSeconds / 1000
    let minutes = seconds / 60
    let hours = minutes / 60
    let days = hours / 24
    let weeks = days / 7
    let months = days / 30
    let years = days / 365

    if (milliSeconds < 10000) {
        timeElapsed = "Started just now"
    } else if (seconds < 60) {
        timeElapsed = `${Math.floor(seconds)} seconds`
    } else if (minutes < 60) {
        timeElapsed = `${Math.floor(minutes)} minutes`
    } else if (hours < 24) {
        timeElapsed = `${Math.floor(hours)} hours`
    } else if (days < 7) {
        timeElapsed = `${Math.floor(days)} days`
    } else if (days < 30) {
        timeElapsed = `${Math.floor(weeks)} weeks`
    } else if (days < 365) {
        timeElapsed = `${Math.floor(months)} months`
    } else {
        timeElapsed = `${Math.floor(years)} years`
    }

    return (
            <TimeElapsedStyles>Started {timeElapsed} ago</TimeElapsedStyles>
    )
}

export default TimeElapsed;