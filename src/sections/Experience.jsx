import { useTranslation } from "react-i18next";


export const Experience = () => {
    const { t } = useTranslation();

    const experiences = [
    {
        period: "2021.10 - 2024.07",
        role: t("role1"),
        company: "technocamps",
        description: t("description1"),
        technologies: ["Lego Spike", "Microbit", "HTML", "CSS"],
        current: false
    },
    {
        period: "2023.09 - 2024.06",
        role: t("role2"),
        company: "Cardiff University Students Union",
        description: t("description2"),
        technologies: [],
        current: false
    },
    {
        period: "2023.07 - 2023.08",
        role: t("role3"),
        company: "J&F Industries International Co., Ltd",
        description: t("description3"),
        technologies: ["Java", "HTML", "CSS", "Spring Boot", "Microsoft Azure Cloud"],
        current: false
    },
    {
        period: "2022.09 - 2023.06",
        role: t("role4"),
        company: "Cardiff University",
        description: t("description4"),
        technologies: [],
        current: false
    },
    
]

    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        {t("careerJourney")}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground animate-fade-in animation-delay-100">
                        {t("myExperience")}
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        {t("experienceSubtitle")}
                    </p>
                </div>
                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2"/>
                {/* Experience Items */}
                <div className="space-y-12">
                    {experiences.map((experience, index) => (
                        <div 
                        key={index} 
                        className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                        style={{animationDelay: `${index * 100}ms`}}>

                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                            {experience.current && 
                            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>}
                            </div>

                            {/* Content */}
                            <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                    <span className="text-sm text-primary font-medium">{experience.period}</span>
                                    <h3 className="text-xl font-semibold mt-2">{experience.role}</h3>
                                    <p className="text-muted-foreground">{experience.company}</p>
                                    <p className="text-sm text-muted-foreground mt-4">{experience.description}</p>
                                    <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                        {experience.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">
                                            {tech}
                                        </span>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    )
}