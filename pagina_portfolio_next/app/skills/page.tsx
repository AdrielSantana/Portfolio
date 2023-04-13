'use client'

import { useEffect } from "react"
import SkillsCard from "../../src/components/cards/SkillsCard"
import PrincipalCard from "../../src/components/layout/PrincipalCard"
import { useCard } from "../../src/hooks/useCard"

const Skills = () => {
    const { handleCardChange } = useCard()

    useEffect(() => {
        handleCardChange("skills")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PrincipalCard>
            <SkillsCard />
        </PrincipalCard>
    )
}

export default Skills