import React, { useEffect } from "react";
import main from "./MainBody.module.css";
import { NoteInput } from "../NoteInput/NoteInput.jsx";
import { NotesDisplay } from "../NotesDisplay/NotesDisplay.jsx";

export function MainBody({
    inputFocus,
    setInputFocus,
    notePinned,
    setNotePinned,
    title,
    setTitle,
    text,
    setText,
    otherNotes,
    setOtherNotes,
    pinnedNotes,
    setPinnedNotes,
    addToPinned,
}) {
    useEffect(() => {
        setOtherNotes(JSON.parse(localStorage.getItem("otherNotes")));
        setPinnedNotes(JSON.parse(localStorage.getItem("pinnedNotes")));
    }, [setOtherNotes, setPinnedNotes]);

    useEffect(() => {
        localStorage.setItem("otherNotes", JSON.stringify(otherNotes));
        localStorage.setItem("pinnedNotes", JSON.stringify(pinnedNotes));
    }, [otherNotes, pinnedNotes]);

    const notesDisplayComponent = (eachNote) => (
        <NotesDisplay
            key={eachNote.id}
            eachNote={eachNote}
            otherNotes={otherNotes}
            setOtherNotes={setOtherNotes}
            pinnedNotes={pinnedNotes}
            setPinnedNotes={setPinnedNotes}
        />
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
            <NoteInput
                inputFocus={inputFocus}
                setInputFocus={setInputFocus}
                notePinned={notePinned}
                setNotePinned={setNotePinned}
                title={title}
                setTitle={setTitle}
                text={text}
                setText={setText}
                addToPinned={addToPinned}
            />
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
