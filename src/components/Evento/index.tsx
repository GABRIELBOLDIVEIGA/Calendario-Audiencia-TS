import React from 'react'
import styled from 'styled-components'
import { Evento as IEvento } from 'interface/Evento';

const Div2 = styled.div`
    border: 3px solid green;
    background-color: green;
    max-width: 25px;
    height: 25px;
`

export default function Evento({ evento }: { evento: IEvento }) {
    // console.log("[Evento] - ", evento)

    return (
        <Div2>Evento</Div2>
    )
}
