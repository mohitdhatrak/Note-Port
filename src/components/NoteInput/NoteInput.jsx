import React from "react";
import input from "./NoteInput.module.css";

export function NoteInput({
    inputFocus,
    setInputFocus,
    notePinned,
    setNotePinned,
    title,
    setTitle,
    text,
    setText,
    addToPinned,
}) {
    const isPinned = () =>
        notePinned ? (
            <span className="material-icons">push_pin</span>
        ) : (
            <span className="material-icons-outlined">push_pin</span>
        );

    return (
        <>
            <div className={input.container}>
                {inputFocus ? (
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={input.expanded}
                    >
                        <button
                            onClick={() => setNotePinned(!notePinned)}
                            className={input.pin}
                        >
                            {isPinned()}
                        </button>
                        <textarea
                            type="text"
                            placeholder="Title"
                            className={input.title}
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        <textarea
                            type="text"
                            placeholder="Take a note..."
                            className={input.text}
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                        />
                        <span className={input.btnContainer}>
                            <span className={input.leftContainer}>
                                {/* <button
                                    className={`${input.button} ${input.colors}`}
                                >
                                    <span className="material-icons-outlined">
                                        palette
                                    </span>
                                </button> */}
                                <button
                                    onClick={() => {
                                        setInputFocus(!inputFocus);
                                        setTitle("");
                                        setText("");
                                        setNotePinned(false);
                                    }}
                                    className={input.button}
                                >
                                    <i className="material-icons-outlined">
                                        delete
                                    </i>
                                </button>
                            </span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setInputFocus(!inputFocus);
                                    if (
                                        !(
                                            title.trim() === "" &&
                                            text.trim() === ""
                                        )
                                    ) {
                                        addToPinned();
                                    }
                                    setTitle("");
                                    setText("");
                                    setNotePinned(false);
                                }}
                                className={`${input.button} ${input.close}`}
                            >
                                Close
                            </button>
                        </span>
                    </div>
                ) : (
                    <input
                        onClick={(e) => {
                            e.stopPropagation();
                            setInputFocus(!inputFocus);
                        }}
                        type="text"
                        placeholder="Take a note..."
                        className={input.collapsed}
                    />
                )}
            </div>
        </>
    );
}
