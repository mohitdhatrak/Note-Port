import React from "react";
import { useState } from "react";
import container from "./NoteAppContainer.module.css";
import { HeaderBar } from "../HeaderBar/HeaderBar.jsx";
import { MainBody } from "../MainBody/MainBody.jsx";

export function NoteAppContainer() {
    const [inputFocus, setInputFocus] = useState(false);
    const [notePinned, setNotePinned] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [otherNotes, setOtherNotes] = useState([
        {
            id: "default-other",
            title: "default-other",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veniam non architecto.",
            isPinned: false,
        },
    ]);
    const [pinnedNotes, setPinnedNotes] = useState([
        {
            id: "default-pinned",
            title: "default-pinned",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veniam non architecto.",
            isPinned: true,
        },
    ]);

    const newNoteObj = {
        id: new Date().toLocaleString(),
        isPinned: notePinned,
        title,
        text,
    };

    const addToPinned = () =>
        notePinned
            ? setPinnedNotes([
                  {
                      ...newNoteObj,
                  },
                  ...pinnedNotes,
              ])
            : setOtherNotes([
                  {
                      ...newNoteObj,
                  },
                  ...otherNotes,
              ]);

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
            <MainBody
                inputFocus={inputFocus}
                setInputFocus={setInputFocus}
                notePinned={notePinned}
                setNotePinned={setNotePinned}
                title={title}
                setTitle={setTitle}
                text={text}
                setText={setText}
                otherNotes={otherNotes}
                setOtherNotes={setOtherNotes}
                pinnedNotes={pinnedNotes}
                setPinnedNotes={setPinnedNotes}
                newNoteObj={newNoteObj}
                addToPinned={addToPinned}
            />
        </div>
    );
}
