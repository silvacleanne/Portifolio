import Image  from "next/image"
import "./Skill.scss"

interface SkillProps {
    image: string,
    years: string,
    measure: number,
}

export function Skill(props : SkillProps){
    return(
        <div className="experiencia-habilidades">
            <Image
                src={props.image}
                alt="Skill Logo"
                width={40}
                height={40}
                priority
            />
            <div className="experiencia-unit">
                <div className={`experiencia-measure measure-${props.measure}`}>
                    <span>{props.years}</span>
                </div>
            </div>
      </div>
    )
}