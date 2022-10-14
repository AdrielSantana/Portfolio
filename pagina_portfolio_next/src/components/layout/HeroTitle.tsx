import {Typewriter} from 'react-simple-typewriter'

const HeroTitle = () => {
    return (
        <>
            <div className='title'>
                <p className='text-center'>
                    <Typewriter
                        words={["Bem vindo ao meu Portfolio :)", "Desenvolvedor Web Full-Stack", "Olha meus projetos ;)", "Não esquece de mandar mensagem!", "Cansei de escrever :P", "Tá esperando oque?", "Bem vindo ao meu Portfolio :)"]}
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