import Carrousel from "./components/Carrousel";
import styled from "styled-components";
import getEvents, { calendarAPI } from "GoogleAPI/getEvents";
import { useEffect, useState } from "react";
import { Evento } from "interface/Evento";

const Frame = styled.section`
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    overflow: hidden;
`
const Botao = styled.button`
    border: 1px solid black;
    background-color: transparent;
    border-radius: 10px
`

function App() {
    const [calendariosIDs, setCalendariosIDs] = useState([]);
    const [salas, setSalas] = useState<Evento[][] | undefined>([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/CivelVitoria/.db/calendarIds")
            .then((resposta) => resposta.json())
            .then((dados) => {
                setCalendariosIDs(dados)
            });
    }, [])

    const f = () => {
        const x = getEvents(calendariosIDs)
        setSalas(x);
        console.log(x)
    }

    return (
        <Frame>
            <Botao onClick={() => { calendarAPI.handleAuthClick() }}>API</Botao>
            <Botao onClick={() => { f() }}>DADOS</Botao>

            {salas ? <Carrousel salas={salas} />
                : <></>
            }
        </Frame>

    )
}

export default App;
