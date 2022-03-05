import React from "react";
import { NoteAppContainer } from "./components/NoteAppContainer/NoteAppContainer.jsx";

export function App() {
    return <NoteAppContainer />;
}

{
    /* App structure
        <NoteAppContainer>
            <MainBody>
                <NoteInput />
                <NotesDisplay />
            </MainBody>
        </NoteAppContainer> 
    */
}
