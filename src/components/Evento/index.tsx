import React from 'react'
import styled from 'styled-components'
import { Evento as IEvento } from 'interface/Evento';
import { useUsuariosContext } from 'context/UsuariosContext';
import { useState } from 'react';
import { useEffect } from 'react';
import formataData from 'common/dataDDMMYYYY';
import formataHorario from 'common/horarioHHMM';

interface Props {
    hoje?: boolean;
}

const EventoAtual = styled.div<Props>`
    font-weight: 700;
    border: 5px solid black;
    border-radius: 10px;
    box-shadow: 8px 8px ${(props) => (props.hoje ? "#65c6ce" : "black")};
    padding: 1rem;
    background-color: ${(props) => (props.hoje ? "green" : "red")};

    width: 20%;
    min-width: 20%;
    height: 100%;
    min-height: 12rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
`

const DivDataHora = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ContainerHora = styled.div`
    border: 3px solid black;
    border-radius: 10px;
    padding: .2rem .5rem;
`

const ContainerProcesso = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    padding: .5rem;

    max-width: 100%;

    border: 3px solid black;
    border-radius: 10px;
`

const ProcessoFrase = styled.p`
    border: 3px solid black;
    border-radius: 10px;
    padding: .2rem .5rem;
    width: max-content;
`

const ProcessoNumero = styled.p`
    word-break: break-word;
    text-align: center;
    
`

export default function Evento({ evento }: { evento: IEvento }) {
    const [vara, setVara] = useState("");
    const [data, setData] = useState("");
    const [hora, setHora] = useState("");
    const [eventoHoje, setEventoHoje] = useState(false);
    const { usuarios } = useUsuariosContext();

    useEffect(() => {
        const result = usuarios.find((user) => user.email === evento.creator.email);

        setVara(result?.nome! ? result.nome : "...");

        setData(formataData(evento.start.dateTime));
        setHora(formataHorario(evento.start.dateTime));

        const hoje = new Date().getDate() === new Date(evento.start.dateTime).getDate() ? true : false;
        setEventoHoje(hoje)
    }, [])

    return (
        <EventoAtual hoje={eventoHoje}>
            <DivDataHora>
                <p>{data}</p>
                <ContainerHora>{`Inicio: ${hora}`}</ContainerHora>
            </DivDataHora>

            <ContainerProcesso>
                <ProcessoFrase>Processo</ProcessoFrase>
                <ProcessoNumero>{`${evento.summary}`}</ProcessoNumero>
            </ContainerProcesso>

            <p>{`Vara: ${vara}`}</p>
        </EventoAtual>

    )
}


