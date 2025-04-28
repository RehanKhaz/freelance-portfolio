import { skills } from "@/constants"
import Image from "next/image"

const Skills = () => {
  return (
  <section id="skills" className="mb-[5em] mt-3 max-md:mb-[3em]" >
      <div className="w-full max-w-[1500px] border-y-[1px] border-neutral-900  marquee-wrapper flex-between max-md:h-[8em] h-[10em]  cursor-pointer  overflow-hidden">
        {
          skills.map((skill) => {
            const { id, name, icon } = skill
            const delayMs = ((30 / 10) * (10 - id) * -1);
            return (
              <div key={id}
                style={{ animationDelay: `${delayMs}s` }}
                className={`absolute group marquee-animation  overflow-hidden`}>
                <Image src={icon} alt={name} width={100} className="object-cover pointer-events-none " height={100} />
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default Skills