import React from "react";
import card from "./NotesDisplay.module.css";
import { useApp } from "../../context-providers/app-context";

export function NotesDisplay({ eachNote }) {
    const { otherNotes, setOtherNotes, pinnedNotes, setPinnedNotes } = useApp();

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

    function deleteCard() {
        const eachNoteCopy = { ...eachNote };
        const otherNotesCopy = [...otherNotes];
        const pinnedNotesCopy = [...pinnedNotes];
        if (eachNoteCopy.isPinned) {
            pinnedNotesCopy.splice(positionInPinned(), 1);
            setPinnedNotes(pinnedNotesCopy);
        } else {
            otherNotesCopy.splice(positionInOther(), 1);
            setOtherNotes(otherNotesCopy);
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
                {/* <button className={`${card.button} ${card.colors}`}>
                    <span className="material-icons-outlined">palette</span>
                </button> */}
                <button onClick={deleteCard} className={card.button}>
                    <i className="material-icons-outlined">delete</i>
                </button>
            </span>
        </div>
    );
}
