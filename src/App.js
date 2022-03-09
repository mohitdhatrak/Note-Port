import React from "react";
import container from "./App.module.css";
import { HeaderBar } from "./components/HeaderBar/HeaderBar.jsx";
import { MainBody } from "./components/MainBody/MainBody.jsx";
import { useApp } from "./context-providers/app-context.js";

/* App structure
        <App>
            <HeaderBar />
            <SideBar /> --- later
            <MainBody>
                <NoteInput />
                <NotesDisplay />
            </MainBody>
        </App> 
*/

export function App() {
    const {
        inputFocus,
        setInputFocus,
        setNotePinned,
        title,
        setTitle,
        text,
        setText,
        addToPinned,
    } = useApp();

    return (
        <div
            className={container.body}
            onClick={() => {
                if (!(title.trim() === "" && text.trim() === "")) {
                    addToPinned();
                }
                setTitle("");
                setText("");
                setNotePinned(false);
                return inputFocus ? setInputFocus(false) : "";
            }}
        >
            <HeaderBar />
            <MainBody />
        </div>
    );
}
