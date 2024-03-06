import AboutCard from "./aboutCard";
import Skills from "./skills";

export default function About(){
    return (
        <section className="w-full  flex  justify-center pt-10 h-3/4 pb-5 items-center flex-wrap">
            <div className="w-full flex justify-center items-center gap-4 pb-3 mobile:flex-col">
                <AboutCard title="About me" subtitle="Hello, my name is Gabriel" description="I am a programmer specializing in front-end development. I create dynamic websites and web applications, providing effective IT solutions for your business. I am ready to implement innovative projects that delight users and support the goals of your online company."/>
                <AboutCard title="My carieer" subtitle="My all developer experience" description="For 3 years I programming commercial project and also big project with the other developers. I have seen a lot of solutions and problems, so I'm ready that meet new solutions."/>
            </div>
            <Skills/>
        </section>
    )
}