import Evento from 'components/Evento'
import { Evento as IEvento } from 'interface/Evento'
import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    border: 3px solid red;
    background-color: red;
    max-width: 50px;
    height: 50px;
`

export default function Sala({ sala }: { sala: IEvento[] }) {
    console.log("[Sala] - ", sala)

    return (
        <Div>
            {sala.map((evento) => {
                return (
                    <Evento evento={evento} />
                )
            })}
        </Div>

    )
}
