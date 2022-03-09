import { createContext, useContext, useState } from "react";

const defaultProviderValues = {};

const AppContext = createContext(defaultProviderValues);

const AppProvider = ({ children }) => {
    const [inputFocus, setInputFocus] = useState(false);
    const [notePinned, setNotePinned] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [otherNotes, setOtherNotes] = useState([
        {
            id: "default-other",
            title: "Normal note",
            text: "This is a normal demo-note, it can be pinned or deleted. You can add your own notes too.",
            isPinned: false,
        },
    ]);
    const [pinnedNotes, setPinnedNotes] = useState([
        {
            id: "default-pinned",
            title: "Pinned note",
            text: "This is a pinned demo-note, it can be unpinned or deleted.  You can add your own pinned notes too.",
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
        <AppContext.Provider
            value={{
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
                newNoteObj,
                addToPinned,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useApp = () => useContext(AppContext);

export { AppProvider, useApp };
