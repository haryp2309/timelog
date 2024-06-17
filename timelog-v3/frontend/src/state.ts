export type GlobalState = {
    startTime: string
    interval: NodeJS.Timeout | null
}

export const initialState: GlobalState = {
    startTime: "",
    interval: null,
}

