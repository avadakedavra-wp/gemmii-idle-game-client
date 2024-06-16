export type TTabsList = {
    id: number;
    name: string;
    icon: string;
    component: JSX.Element;
}

export type TCountdownRenderer = {
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
}