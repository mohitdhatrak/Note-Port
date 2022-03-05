import React from "react";
import card from "./NotesDisplay.module.css";

export function OtherNotes({
    eachNote,
    otherNotes,
    setOtherNotes,
    pinnedNotes,
    setPinnedNotes,
}) {
    const positionInOther = () =>
        otherNotes.findIndex((obj) => obj.id === eachNote.id);

    const positionInPinned = () =>
        pinnedNotes.findIndex((obj) => obj.id === eachNote.id);

    function pinToggle() {
        const eachNoteCopy = { ...eachNote };
        eachNoteCopy.isPinned = !eachNote.isPinned;
        const otherNotesCopy = [...otherNotes];
        const pinnedNotesCopy = [...pinnedNotes];
        if (eachNoteCopy.isPinned) {
            otherNotesCopy.splice(positionInOther(), 1);
            setOtherNotes(otherNotesCopy);
            setPinnedNotes([eachNoteCopy, ...pinnedNotes]);
        } else {
            pinnedNotesCopy.splice(positionInPinned(), 1);
            setPinnedNotes(pinnedNotesCopy);
            setOtherNotes([eachNoteCopy, ...otherNotes]);
        }
    }

    const isPinned = () =>
        eachNote.isPinned ? (
            <span className="material-icons">push_pin</span>
        ) : (
            <span className="material-icons-outlined">push_pin</span>
        );

    return (
        <div className={card.collapsed}>
            <button onClick={pinToggle} className={card.pin}>
                {isPinned()}
            </button>
            <h3 className={card.title}>{eachNote.title}</h3>
            <p className={card.text}>{eachNote.text}</p>
            <span className={card.btnContainer}>
                <button>Colors</button>
                <button>Delete</button>
            </span>
        </div>
    );
}
