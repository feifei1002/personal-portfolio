import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown } from "lucide-react";

const languages = [
    { code: "en", label: "English", flagUrl: "https://flagcdn.com/gb.svg" },
    { code: "zh-TW", label: "繁體中文", flagUrl: "https://flagcdn.com/tw.svg" },
    { code: "vi", label: "Tiếng Việt", flagUrl: "https://flagcdn.com/vn.svg" },
];

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full md:w-auto">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full md:w-auto flex items-center justify-between md:justify-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors"
            >
                <div className="flex items-center gap-2">
                    <Globe size={18} />
                    <span className="hidden sm:inline">{languages.find(lang => lang.code === i18n.language)?.label || i18n.language}</span>
                </div>
                <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 glass rounded-lg p-2 min-w-max z-50 animate-fade-in">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                i18n.changeLanguage(lang.code);
                                setIsOpen(false);
                            }}
                            className={`w-full md:w-auto block text-left px-4 py-2 text-sm rounded-md transition-colors flex items-center gap-2 ${
                                i18n.language === lang.code
                                    ? "bg-primary/20 text-primary font-semibold"
                                    : "text-muted-foreground hover:text-foreground hover:bg-surface"
                            }`}
                        >
                            <img src={lang.flagUrl} alt={`${lang.label} flag`} className="w-5 h-5 rounded-sm" />
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;