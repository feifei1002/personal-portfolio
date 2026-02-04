import { House, Languages, CookingPot, Music } from "lucide-react";


const highlights = [
    {
        icon: House,
        title: "Where I'm From",
        description: "I was born in Taipei, Taiwan and raised in Vietnam.",
    },
    {
        icon: Languages, 
        title: "Languages I Speak",
        description: "I speak English, Mandarin, and Vietnamese.",
    },
    {
        icon: CookingPot,
        title: "My Hobbies",
        description: "I like to cook, bake and crochet.",
    },
    {
        icon: Music,
        title: "My Music Taste",
        description: "I love listening to Kpop.",
    },

]


export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm-font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            A passionate software engineer, 
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                                evolving through every line of code.
                            </span>
                            

                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I'm a fresh graduate from King's College London 
                                with a Master degree in Advanced Software Engineering.
                            </p>
                            <p>
                                I'm a fresh graduate from King's College London 
                                with a Master degree in Advanced Software Engineering.
                            </p>
                            <p>
                                I'm a fresh graduate from King's College London 
                                with a Master degree in Advanced Software Engineering.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((highlight, index) => (
                            <div key={index} className="glass p-6 rounded-2xl animate-fade-in" 
                            style={{animationDelay: `${(index + 1) * 100}ms`}}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <highlight.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                                <p className="text-sm text-muted-foreground">{highlight.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}