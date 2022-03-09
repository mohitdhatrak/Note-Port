import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { AppProvider } from "./context-providers/app-context.js";

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// For file names we use hyphen and lowercase
// For components only we use Pascal/camel notation

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
