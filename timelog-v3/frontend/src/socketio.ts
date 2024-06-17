import { io } from "socket.io-client";

export const socket = io(`${window.location.host}`, {
    extraHeaders: {
        token: "secret_token"
    }
});


export const socketCommands = {
    getTimerSet: (timerId: string) => `${timerId}/timer-set`,
    getTimerStopped: (timerId: string) => `${timerId}/timer-stopped`
}

export enum TimerActionType {
    TIMER_START = "timer-start",
    TIMER_STOP = "timer-stop"
}


export type TimerAction = {
    startTime?: string;
    id?: string;
    type: TimerActionType;
}

export const emitTimerAction = (timerAction: TimerAction) => {
    socket.emit("timer-action", timerAction)
}