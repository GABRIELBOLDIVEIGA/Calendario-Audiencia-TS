import Evento from 'components/Evento'
import { Evento as IEvento } from 'interface/Evento'
import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 97vh;
`
const Titulo = styled.div`
    border: 1px solid red;
    display: grid;
    place-items: center;
    width: 100px;
    height: 70px;
`
const Div = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 2.5rem;
    width: 100%;
`

export default function Sala({ sala }: { sala: IEvento[] }) {
    // console.log("[Sala] - ", sala[0].organizer.displayName)

    return (
        <Section>
            <Titulo><p>{sala[0].organizer.displayName}</p></Titulo>
            <Div>
                {sala.map((evento, index) => {
                    return (
                        <Evento key={index} evento={evento} />
                    )
                })}
            </Div>
        </Section>

    )
}
