import { Typewriter } from 'react-simple-typewriter'
import { useState } from 'react'

const HeroTitle = () => {
    return (
        <>
            <div className='title'>
                <p className='text-center'>
                    <Typewriter
                    words={["Bem vindo ao meu Portfolio :)","Desenvolvedor Web Full-Stack","Dá uma olhadinha nos projetos ;)", "Não esquece de mandar mensagem!", "Cansei de escrever :P", "Tá esperando oque pra ir ver?", "Bem vindo ao meu Portfolio :)"]}
                    typeSpeed={90}
                    deleteSpeed={50}
                    delaySpeed={5000}
                    loop={1}
                    cursor={true}
                    />
                </p>
            </div>
        </>
    )
}

export default HeroTitle