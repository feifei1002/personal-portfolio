import { t } from "i18next";
import { House, Languages, CookingPot, Music } from "lucide-react";
import { useTranslation } from "react-i18next";



export const About = () => {
    const { t } = useTranslation();

    const highlights = [
    {
        icon: House,
        title: t("whereIAmFrom"),
        description: t("whereIAmFromDesc"),
    },
    {
        icon: Languages, 
        title: t("languagesISpeak"),
        description: t("languagesISpeakDesc"),
    },
    {
        icon: CookingPot,
        title: t("myHobbies"),
        description: t("myHobbiesDesc"),
    },
    {
        icon: Music,
        title: t("myMusicTaste"),
        description: t("myMusicTasteDesc"),
    },

]

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm-font-medium tracking-wider uppercase">
                            {t("aboutMe")}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        {t("aboutTitle1")}
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            {t("aboutTitle2")}
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