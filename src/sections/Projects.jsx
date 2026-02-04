import { ArrowUpRight, Github } from "lucide-react"

const projects = [
    {
        title: "Information Chatbot",
        description: 
        "An AI-powered chatbot that provides accurate and relevant information to students from Cardiff University.",
        image: "/projects/chatbot.png",
        tags: ["JavaScript", "Python", "Nuxt 3", "TailwindCSS", "TypeScript", "Vue", "Qdrant", "Deepgram", "OpenAI", "TogetherAI", "AnthropicAI"],
        link: "https://cu-chatbot.kavin.rocks",
        github: "https://github.com/feifei1002/chatbot-intranet",
    },

    {
        title: "Warehouse Racking System Website",
        description: 
        "A website for a warehouse racking system company, showcasing their products and services with a modern and responsive design.",
        image: "/projects/jfrack.png",
        tags: ["Java", "HTML", "CSS", "Spring Boot", "Microsoft Azure Cloud"],
        link: "https://www.jfrack.com",
        github: "https://github.com/feifei1002/chatbot-intranet",
    },
]

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that I have worked on
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of projects showcasing my skills in web development, AI integration, and responsive design.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) =>(
                        <div 
                        key={index} 
                        className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                        style={{animationDelay: `${index * 100}ms`}}>
                            {/* Image for the project */}
                            <div className="relative overflow-hidden aspect-video">
                                <img src={project.image} alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-linear-to-t from card via-card/50 to transparent opacity-60"/>
                            {/* Overlay links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <ArrowUpRight className="w-5 h-5"/>
                                </a>
                                <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <Github className="w-5 h-5"/>
                                </a>
                            </div>
                            </div>
                            {/*  Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight 
                                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover: translate-x-1 group-hover:translate-y-1 transition-all"/>
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                    <span 
                                    key={tagIndex} 
                                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                        {tag}
                                    </span>
                                ))}</div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* View All Projects Button */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <button size="lg"
                    className="relative bg-transparent border border-border
                    text-foreground hover:border-primary/50 transition-all
                    duration-500 focus:outline-none focus:visible:ring-2 
                    focus:ring-primary focus-visible:ring-offset-2
                    disabled:opacity-50 disabled:cursor-not-allowed group
                    px-8 py-4 text-lg font-medium rounded-full overflow-visible">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Show All Projects <ArrowUpRight className="w-5 h-5"/>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}