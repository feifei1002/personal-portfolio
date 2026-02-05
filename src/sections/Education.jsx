const education = [
    {
        logo: "/logo/kcl_logo.png",
        institution: "King's College London",
        degree: "Master of Science in Advanced Software Engineering",
        period: "2024 - 2025",
        location: "London, UK",
        grade: "Merit - 69%",
    },
    {
        logo: "/logo/cu_logo.png",
        institution: "Cardiff University",
        degree: "Bachelor of Science in Applied Software Engineering",
        period: "2021 - 2024",
        location: "Cardiff, UK",
        grade: "Upper Second Class Honours - 67%",
    },
]

export const Education = () => {
    return (
        <section id="education" className="py-32 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Education
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        My Academic Background
                    </h2>
                </div>

                {/* Education Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {education.map((edu, index) =>(
                        <div 
                        key={index} 
                        className="group glass rounded-2xl gap-6 p-6 overflow-hidden animate-fade-in md:row-span-1"
                        style={{animationDelay: `${index * 100}ms`}}>
                            {/* Image for the education */}
                            <div className="relative shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                                <img src={edu.logo} alt={edu.institution}
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-linear-to-t from card via-card/50 to transparent opacity-60"/>
                            </div>
                            {/*  Content */}
                            <div className="py-6 space-y-1">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {edu.institution}
                                    </h3>
                                </div>
                                <span className="text-muted-foreground text-sm font-semibold">{edu.location}</span>
                                <p className="text-muted-foreground text-sm">{edu.degree}</p>
                                <p className="text-muted-foreground text-sm">{edu.period}</p>
                                <p className="text-muted-foreground text-sm">{edu.grade}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}