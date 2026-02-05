import { House, Languages, CookingPot, Music } from "lucide-react";


const highlights = [
    {
        icon: House,
        title: "Where I'm From",
        description: "I was born in the beautiful island nation of Taiwan — home of bubble milk tea and the iconic Taipei 101, famously climbed by Alex Honnold on Netflix. I later grew up in Vietnam, the birthplace of beloved dishes like phở and bánh mì.",
    },
    {
        icon: Languages, 
        title: "Languages I Speak",
        description: "I’m fluent in English, Mandarin, and Vietnamese, which allows me to collaborate effectively across cultures and teams.",
    },
    {
        icon: CookingPot,
        title: "My Hobbies",
        description: "Outside of tech, I enjoy cooking, baking, and crocheting—hands-on hobbies that let me experiment, create, and pay attention to detail.",
    },
    {
        icon: Music,
        title: "My Music Taste",
        description: "I’m a K-pop fan, with a particular interest in girl groups like aespa and boy groups such as SEVENTEEN.",
    },

]


export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
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

                    {/* <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            I'm a fresh graduate from King's College London 
                            with a Master degree in Advanced Software Engineering.
                        </p>
                    </div> */}
                </div>

                {/* Highlights */}
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
        </section>
    )
}