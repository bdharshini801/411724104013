import { useEffect, useState } from "react";
import ThemeService from "../../services/ThemeService";

function Footer() {

    const [theme, setTheme] = useState(
        ThemeService.getTheme()
    );

    useEffect(() => {

        const updateTheme = (newTheme) => {
            setTheme(newTheme);
        };

        ThemeService.attach(updateTheme);

        return () => {
            ThemeService.detach(updateTheme);
        };

    }, []);

    return (
        <footer
            style={{
                padding: "20px",
                backgroundColor:
                    theme === "Light"
                        ? "#eeeeee"
                        : "#333333",
                color:
                    theme === "Light"
                        ? "black"
                        : "white",
            }}
        >
            Footer - Current Theme: {theme}
        </footer>
    );
}

export default Footer;