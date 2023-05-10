export interface Evento {
    creator: {
        email: string;
    };
    start: {
        dateTime: string;
    };
    summary: string;
    organizer: {
        displayName: string
    }
}

interface Criador {
    email: string;
}

interface Start {
    dateTime: string;
}