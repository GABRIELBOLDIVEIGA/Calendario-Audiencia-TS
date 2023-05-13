import Carrousel from "./components/Carrousel";
import styled from "styled-components";
import getEvents, { calendarAPI } from "GoogleAPI/getEvents";
import { useEffect, useState } from "react";
import { Evento } from "interface/Evento";
import { Segundos } from "enums/Segundos"
import { useUsuariosContext } from "context/UsuariosContext";

import RandomLoader from "components/RandomLoader";

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
    const [salas, setSalas] = useState<Evento[][]>([]);
    const [reload, setReaload] = useState(false);
    const { setUsuarios } = useUsuariosContext();
    

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/CivelVitoria/.db/calendarIds")
            .then((resposta) => resposta.json())
            .then((dados) => {
                setCalendariosIDs(dados);
            });

        fetch(`https://my-json-server.typicode.com/CivelVitoria/.db/usuarios`)
            .then((resposta) => resposta.json())
            .then((dados) => {
                setUsuarios(dados);
            });
    }, []);

    const buscaEventosAPI = () => {
        getEvents(calendariosIDs)
            .then((resposta) => {
                setSalas(resposta)
                setTimeout(() => { setReaload((prev) => !prev) }, Segundos._3segundos); // essa linha força o React a re-renderizar
            })
    }

    return (
        <Frame>
            {salas.length > 0 ? <Carrousel salas={salas} />
                : <RandomLoader />
            }
            <Botao onClick={() => { calendarAPI.handleAuthClick() }}>Login</Botao>
            <Botao onClick={() => { buscaEventosAPI() }}>Gabriel Boldi</Botao>

        </Frame>

    )
}

export default App;
