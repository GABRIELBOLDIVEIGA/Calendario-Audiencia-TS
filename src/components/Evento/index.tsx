import React from 'react'
import styled from 'styled-components'
import { Evento as IEvento } from 'interface/Evento';
import { useUsuariosContext } from 'context/UsuariosContext';
import { useState } from 'react';
import { useEffect } from 'react';
import formataData from 'common/dataDDMMYYYY';
import formataHorario from 'common/horarioHHMM';

const Card = styled.div`
    border: 3px solid green;
    background-color: green;

    min-width: 20%;
    height: 100%;
`

const Card2 = styled.div`
    border: 3px solid red;
    background-color: red;

    min-width: 20%;
    height: 100%;
`

export default function Evento({ evento }: { evento: IEvento }) {
    const [vara, setVara] = useState("");
    const [data, setData] = useState("");
    const [hora, setHora] = useState("");
    const [eventoHoje, setEventoHoje] = useState(false);
    const { usuarios } = useUsuariosContext();

    useEffect(() => {
        const result = usuarios.find((user) => user.email === evento.creator.email);
        setVara(result?.nome!)

        setData(formataData(evento.start.dateTime));
        setHora(formataHorario(evento.start.dateTime));

        const hoje = new Date().getDate() === new Date(evento.start.dateTime).getDate() ? true : false;
        setEventoHoje(hoje)
    }, [])

    return (
        <>
            {eventoHoje ? <Card>
                <div>
                    <p>{data}</p>
                    <p>{`Inicio: ${hora}`}</p>
                </div>

                <div>
                    <p>Processo</p>
                    <p>{`${evento.summary}`}</p>
                </div>

                <p>{`Vara: ${vara}`}</p>
            </Card> : <Card2>
                <div>
                    <p>{data}</p>
                    <p>{`Inicio: ${hora}`}</p>
                </div>

                <div>
                    <p>Processo</p>
                    <p>{`${evento.summary}`}</p>
                </div>

                <p>{`Vara: ${vara}`}</p>
            </Card2>
            }
        </>

    )
}


