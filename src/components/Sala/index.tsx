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
const Titulo = styled.p`
    border: 5px solid black;
    box-shadow: 5px 5px #3d3d3d;
    background-color: #ffa4c4;

    padding: 2rem;
    margin: .5rem 0 1rem 0;

    font-family: 'Press Start 2P', cursive;
    font-size: 2rem;
`
const Div = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 1.75rem;
    width: 100%;
`

export default function Sala({ sala }: { sala: IEvento[] }) {
    return (
        <Section>
            <Titulo>{sala[0].organizer.displayName}</Titulo>
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
