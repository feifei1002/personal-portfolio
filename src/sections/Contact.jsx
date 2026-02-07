import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin } from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";


export const Contact = () => {
    const { t } = useTranslation();

    const contactInfo = [
    {
        icon: Mail,
        label: t("contactEmail"),
        value: "liufei520.02@gmail.com",
        href: "mailto:liufei520.02@gmail.com",
    },
    {
        icon: Phone,
        label: t("contactPhone"),
        value: "+44 7498 547241",
        href: "tel:+447498547241",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "feiliu1002",
        href: "https://www.linkedin.com/in/feiliu1002/",
    },

    {
        icon: MapPin,
        label: t("contactLocation"),
        value: "London, UK",
        href: "https://maps.app.goo.gl/qjZ5MAKX1HqvrhKdA",
    },
]

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, // "success" or "error"
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({ type: null, message: ""});
        try {
            const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceID || !templateID || !publicKey) {
                throw new Error("EmailJS environment variables are not set properly.");
            }

            await emailjs.send(serviceID, templateID, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, publicKey);

            setSubmitStatus({ 
                type: "success", 
                message: t("submitMessageSuccess")});
            setFormData({ name: "", email: "", message: ""});
        } catch (error) {
            console.error("Error sending email:", error);
            setSubmitStatus({ 
                type: "error", 
                message: error.text || t("submitMessageError")});
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        {t("getInTouch")}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        {t("contactMe")}
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                        <form className="space-y-6" onSubmit={handleSubmit}> 
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">{t("contactName")}</label>
                                <input id="name" 
                                type="text" 
                                required
                                placeholder={t("contactNamePlaceholder")}
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({...formData, name: e.target.value})
                                }
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary fous:ring-1 focus:ring-primary outline-none transition-all" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">{t("contactEmail")}</label>
                                <input id="email" 
                                type="email" 
                                required
                                placeholder={t("contactEmailPlaceholder")}
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({...formData, email: e.target.value})
                                }
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary fous:ring-1 focus:ring-primary outline-none transition-all" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">{t("contactMessage")}</label>
                                <textarea 
                                rows={3}
                                id="message" 
                                required
                                placeholder={t("contactMessagePlaceholder")}
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({...formData, message: e.target.value})
                                }
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary fous:ring-1 focus:ring-primary outline-none transition-all resize-none"/>
                            </div>

                            <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                    {t("sending")}...
                                    </>
                                ) : (
                                    <>
                                    {t("contactSubmit")}
                                    <Send className="w-5 h-5"/>
                                    </>
                                )}
                            </Button>

                            {submitStatus.type && (
                                <div
                                className={`flex items-center gap-3
                                    p-4 rounded-xl ${
                                    submitStatus.type === "success"
                                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                                    }`}
                                >
                                {submitStatus.type === "success" ? (
                                    <CheckCircle className="w-5 h-5 shrink-0" />
                                ) : (
                                    <AlertCircle className="w-5 h-5 shrink-0" />
                                )}
                                <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="space-y-6 animate-fade-in animation-delay-400">
                        <div className="glass rounded-3xl p-8 border border-primary/30">
                            <h3 className="text-xl font-semibold mb-6">
                                {t("contactInfo")}
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <a
                                    key={index}
                                    href={info.href}
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <info.icon className="w-5 h-5 text-primary"/>
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground">
                                                {info.label}
                                            </div>
                                            <div className="font-medium">{info.value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}