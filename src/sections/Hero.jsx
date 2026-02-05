import { Button } from "@/components/Button";
import { ChevronDown, ArrowRight, Download, Linkedin, Github, Instagram } from "lucide-react";

const skills = [
    "Java", "JavaScript", "Python", "HTML", "CSS", "SQL", "TypeScript",
    "Git", "Spring Boot", "Flask", "JUnit", "Microsoft Azure Cloud",
    "React", "TailwindCSS", "Prompt Engineering"
];

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div
                className="w-full h-full object-cover opacity-40 "/>
            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"/>
            </div>

            {/* Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#ffb7c5",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    Software Engineer
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                <span className="text-primary glow-text">
                                    Fei Liu
                                <br />
                                    劉菲 
                                </span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hello and Welcome to my page! <br />
                                Take your time and enjoy your stay. <br />
                                If you want to know more about me,
                                feel free to scroll down,
                                explore or use the button below to contact me!
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                <a href="#contact" className="flex items-center gap-2">
                                Contact Me <ArrowRight className="w-5 h-5"/>
                                </a>
                            </Button>
                            <a size="lg"
                            href="/CV.pdf"
                            download
                            className="flex items-center gap-2 bg-tranparent
                            border border-border text-foreground hover:border-primary/50
                            transition-all duration-500 focus:outline-none focus:visible:ring-2
                            px-8 py-4 text-lg font-medium rounded-full overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Download CV <Download className="w-5 h-5"/>
                                </span>
                            </a>
                        </div>
                        {/* Social links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-medium text-muted-foreground">Follow me: </span>
                            {[
                                { icon: Github, href: "https://github.com/feifei1002" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/feiliu1002/" },
                                { icon: Instagram, href: "https://www.instagram.com/_feifairyfaye_/" },
                            ].map((social, index) => (
                                <a
                                key={index}
                                href={social.href}
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                {<social.icon className="w-5 h-5" />}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Right Column - Profile Image */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* Profile Image */}
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-0
                            rounded-3xl bg-linear-to-br
                            from-primary/30 via-transparent
                            to-primary/20 blur-2xl animate-pulse"/>
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src="/profile-photo.jpg"
                                alt="Fei Liu"
                                className="w-full aspect-4/5 object-cover rounded-2xl"/>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-medium text-muted-foreground mb-6 text-center">
                        Technologies I work with
                    </p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {skills.map((skill, index) => (
                                <div key={index} className="shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    )
}