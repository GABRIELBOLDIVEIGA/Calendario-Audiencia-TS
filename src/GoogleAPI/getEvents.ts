import { configApiCalendar } from "GoogleAPI/config";
import addDays from "common/adicionaDias";
import { Evento } from "interface/Evento";
import ApiCalendar from "react-google-calendar-api";

export const calendarAPI = new ApiCalendar(configApiCalendar);

export default async function getEvents(calendarioIDs: Array<{ id: string, sala: string }>) {
   let salas: Array<Evento[]> = [];

   calendarioIDs.forEach(calendario => {
      calendarAPI.listEvents({
         calendarId: calendario.id,
         timeMin: new Date().toISOString(),
         timeMax: addDays(30).toISOString(),
         showDeleted: false,
         maxResults: 12,
         orderBy: "startTime",
         singleEvents: true,
      })
         .then((res: any) => {
            var sala = filtraEvento(res.result.items);

            if (sala.length > 0) {
               salas.push(sala);
               // console.log("[Loop API] - salas: ", salas)
            }
         })
   })

   console.log(JSON.stringify(salas))
   return salas;
}

function filtraEvento(eventos: any[]) {
   let eventoFiltrado: Array<Evento> = [];
   eventos.forEach(evento => {
      eventoFiltrado.push(
         {
            creator: {
               email: evento.creator.email,
            },
            start: {
               dateTime: evento.start.dateTime,
            },
            summary: evento.summary,
            organizer: {
               displayName: evento.organizer.displayName
            }
         }
      )
   })

   return eventoFiltrado;
}