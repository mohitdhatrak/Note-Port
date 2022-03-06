import React from "react";
import { NoteAppContainer } from "./components/NoteAppContainer/NoteAppContainer.jsx";

export function App() {
    return <NoteAppContainer />;
}

/* App structure
        <NoteAppContainer>
            <HeaderBar />
            <MainBody>
                <NoteInput />
                <NotesDisplay />
            </MainBody>
        </NoteAppContainer> 
*/
// For file names we use hyphen and lowercase
// For components only we use Pascal/camel notation
