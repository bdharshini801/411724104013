import { useEffect, useState } from "react";
import ThemeService from "../../services/ThemeService";

function Header() {

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
        <header
            style={{
                padding: "20px",
                backgroundColor:
                    theme === "Light" ? "#eeeeee" : "#333333",
                color:
                    theme === "Light" ? "black" : "white",
            }}
        >
            <h2>Header - {theme} Theme</h2>
        </header>
    );
}

export default Header;