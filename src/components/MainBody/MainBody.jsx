import React, { useEffect } from "react";
import main from "./MainBody.module.css";
import { NoteInput } from "../NoteInput/NoteInput.jsx";
import { NotesDisplay } from "../NotesDisplay/NotesDisplay.jsx";
import { useApp } from "../../context-providers/app-context";

export function MainBody() {
    const { otherNotes, setOtherNotes, pinnedNotes, setPinnedNotes } = useApp();

    useEffect(() => {
        setOtherNotes(JSON.parse(localStorage.getItem("otherNotes")));
        setPinnedNotes(JSON.parse(localStorage.getItem("pinnedNotes")));
    }, []);

    useEffect(() => {
        localStorage.setItem("otherNotes", JSON.stringify(otherNotes));
        localStorage.setItem("pinnedNotes", JSON.stringify(pinnedNotes));
    }, [otherNotes, pinnedNotes]);

    const notesDisplayComponent = (eachNote) => (
        <NotesDisplay key={eachNote.id} eachNote={eachNote} />
    );

    const isAnythingPinned = () =>
        otherNotes.length === 0 ? (
            <div>
                <h2 className={main.sectionHeading}>Pinned</h2>
                <div className={main.cardsContainer}>
                    {pinnedNotes.map(notesDisplayComponent)}
                </div>
            </div>
        ) : (
            <div>
                <h2 className={main.sectionHeading}>Pinned</h2>
                <div className={main.cardsContainer}>
                    {pinnedNotes.map(notesDisplayComponent)}
                </div>
                <h2 className={main.sectionHeading}>Others</h2>
                <div className={main.cardsContainer}>
                    {otherNotes.map(notesDisplayComponent)}
                </div>
            </div>
        );

    return (
        <>
            <NoteInput />
            {pinnedNotes.length === 0 ? (
                <div className={main.cardsContainer}>
                    {otherNotes.map(notesDisplayComponent)}
                </div>
            ) : (
                isAnythingPinned()
            )}
        </>
    );
}
