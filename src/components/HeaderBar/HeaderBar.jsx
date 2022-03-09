import React from "react";
import logo from "../../images/note-app-logo.png";
import header from "./HeaderBar.module.css";

export function HeaderBar() {
    return (
        <nav aria-label="Header" className={header.container}>
            <a href="/" className={header.link}>
                <img src={logo} alt="Website Logo" className={header.logo} />
                <span className={header.title}>Note Port</span>
            </a>
            <a
                href="https://github.com/mohitdhatrak/Note-Port"
                target="_blank"
                rel="noreferrer"
                className={header.link}
            >
                <span>GitHub</span>
                <img
                    src="https://api.iconify.design/mdi:github.svg?color=currentColor"
                    // src="https://api.iconify.design/ri:github-line.svg?color=currentColor"
                    alt="GitHub"
                    className={header.icon}
                />
            </a>
        </nav>
    );
}
