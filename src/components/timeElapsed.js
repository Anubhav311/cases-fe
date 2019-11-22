let timeElapsed
let createdAt = new Date(props.created_at)
let now = new Date()
console.log(props.parts)
let milliSeconds = now - createdAt
let seconds = milliSeconds / 1000
let minutes = seconds / 60
let hours = minutes / 60
let days = hours / 24
let weeks = days / 7
let months = days / 30
let years = days / 365

if (milliSeconds < 10000) {
    timeElapsed = "Just Now"
} else if (seconds < 60) {
    timeElapsed = seconds
} else if (minutes < 60) {
    timeElapsed = minutes
} else if (hours < 24) {
    timeElapsed = hours
} else if (days < 7) {
    timeElapsed = days
} else if (days < 30) {
    timeElapsed = weeks
} else if (days < 365) {
    timeElapsed = months
} else {
    timeElapsed = years
}
