import { io } from "https://cdn.socket.io/4.7.4/socket.io.esm.min.js";
import { HelloWorld } from "./basicComponents.mjs"


// INIT

window.state = {
    startTime: ""
}

// HELPERS

/**
 * @param isoTime {string}
 */
const setTimerValue = (isoTime, relativeTo = "") => {
    const time = (relativeTo ? dayjs(relativeTo) : dayjs()).diff(isoTime, "second")
    const dayJsTime = dayjs.unix(time).utc()
    const timeString = dayJsTime.format("HH:mm:ss")

    //const timeString = `Timer: ${time}s`
    const element = document.getElementById("timer")
    if (element.innerText !== timeString) {
        element.innerText = timeString
    }
}

// SOCKET.IO

const socket = io(`${window.location.host}`, {
    extraHeaders: {
        token: "secret_token"
    }
});

socket.on("timer-set", (isoTime) => {

    if (window.state.interval) {
        clearInterval(window.state.interval)
    }
    window.state.startTime = isoTime

    window.state.interval = setInterval(() => {
        setTimerValue(isoTime)
    }, 500)
})

socket.on("timer-stopped", (isoTime) => {

    if (window.state.interval) {
        clearInterval(window.state.interval)
    }

    setTimerValue(window.state.startTime, isoTime)
})

socket.io.on("error", (error) => {
    console("ERROR", error)
});

/**
 * @typedef {string} TimerActionType
 **/


/**
 * @enum {TimerActionType}
 */
const TimerActionTypes = {
    TIMER_START: "timer-start",
    TIMER_STOP: "timer-stop"
}

/**
 * @typedef {Object} TimerAction
 * @property {string?} startTime
 * @property {string?} id
 * @property {TimerActionType} type
 */


/**
 * @param {TimerAction} timerAction
 */
const emitTimerAction = (timerAction) => {
    socket.emit("timer-action", timerAction)
}

const handleStart = () => {
    emitTimerAction({
        type: TimerActionTypes.TIMER_START,
        id: "main_timer"
    })
}

const handleStop = () => {
    emitTimerAction({
        type: TimerActionTypes.TIMER_STOP,
        id: "main_timer"
    })
}


// HTML SETUP

document.getElementById("startButton").addEventListener("click", handleStart)
document.getElementById("stopButton").addEventListener("click", handleStop)


window.customElements.define('hello-world', HelloWorld);

window.socket = socket;