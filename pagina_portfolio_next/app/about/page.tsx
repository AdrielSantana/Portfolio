'use client'

import { useEffect } from "react"
import AboutCard from "../../src/components/cards/AboutCard"
import PrincipalCard from "../../src/components/layout/PrincipalCard"
import { useCard } from "../../src/hooks/useCard"

const About = () => {
    const { handleCardChange } = useCard()

    useEffect(() => {
        handleCardChange("about")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PrincipalCard>
            <AboutCard />
        </PrincipalCard>
    )
}

export default About