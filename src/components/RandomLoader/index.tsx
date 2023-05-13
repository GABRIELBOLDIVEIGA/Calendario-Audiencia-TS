import React from 'react'
import RainbowLoader from "components/RainbowLoader";
import CubeLoading from "components/CubeLoading";
import ComposeLoading from "components/ComposeLoading";
import LoadingRainbowlBar from "components/LoadingRainbowlBar";
import ColoredDotsLoader from "components/ColoredDotsLoader";
import { useEffect } from 'react';
import { useState } from 'react';


export default function RandomLoader() {
    const [component, setComponent] = useState(<></>);

    useEffect(() => {
        const array = [
            <RainbowLoader />, 
            <CubeLoading />, 
            <LoadingRainbowlBar />, 
            <ComposeLoading />, 
            <ColoredDotsLoader />
        ];

        const rand = Math.floor(Math.random() * array.length)
        console.log(rand)
        setComponent(array[0])

    }, [])

    return (
        <>
            {component}
        </>
    )
}
