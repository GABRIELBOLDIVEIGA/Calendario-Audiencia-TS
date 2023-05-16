import React from 'react'
import Clock from 'react-live-clock';
import eventoAtual from "assets/eventoAtual.png";
import eventofuturo from "assets/eventoFuturo.png";
import styled from 'styled-components';
import "./Cabecalho.css";

const ContainerLegendaRelogio = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
`
const Legenda = styled.div`
    font-weight: 600;
    background-color: #212121;
`
const ImgWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 26rem;
    padding: .75rem 0 0 2rem;
    font-size: 2rem;
`

export default function Cabecalho() {
    return (
        <ContainerLegendaRelogio>
            <Legenda>
                <ImgWrap>
                    <p>Eventos de Hoje</p>
                    <img className='img' src={eventoAtual} />
                </ImgWrap>
                <ImgWrap>
                    <p>Proximos Eventos</p>
                    <img className='img' src={eventofuturo} />
                </ImgWrap>
            </Legenda>
            <Clock className='clock' format={"HH:mm"} ticking={true} />
        </ContainerLegendaRelogio>
    )
}
