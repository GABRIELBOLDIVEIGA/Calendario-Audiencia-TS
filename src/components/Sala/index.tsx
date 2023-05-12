import Evento from 'components/Evento'
import { Evento as IEvento } from 'interface/Evento'
import React from 'react'
import styled from 'styled-components'



const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    min-height: 90vh;
`
const Titulo = styled.h1`
    

    width: 100px;
    height: 70px;
`
const Div = styled.div`
    

    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
`

export default function Sala({ sala }: { sala: IEvento[] }) {
    // console.log("[Sala] - ", sala[0].organizer.displayName)

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
