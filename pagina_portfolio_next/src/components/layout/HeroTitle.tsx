import { useTypewriter } from 'react-simple-typewriter'
import { useState } from 'react'

const HeroTitle = () => {
    const [restWord, setRestWord] = useState<number | string>('')

    const [typeError] = useTypewriter({
        words: ['','ho', 'io :)'],
        loop: 1,
        delaySpeed: 300,
        deleteSpeed: 90,
        typeSpeed: 90
    })

    const [welcome] = useTypewriter({
        words: ['Bem vindo ao meu Portfol'],
        loop: 1,
        delaySpeed: 100,
        deleteSpeed: 90,
        typeSpeed: 90,
        onLoopDone: () => setRestWord(typeError)
    })

    return (
        <>
            <div className='title'>
                <p>
                    {welcome}{restWord}
                </p>
            </div>
        </>
    )
}

export default HeroTitle