import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNode(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                { isExpanded && (
                    <input 
                        type="text"
                        name="title"
                        value={note.title}
                        onChange={handleChange}
                        placeholder="Title" 
                    />
                )}
                <textarea 
                    name="content" 
                    value={note.content}
                    onClick={expand}
                    onChange={handleChange}
                    placeholder="Take a note..." 
                    rows={isExpanded ? "3" : "1"}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNode}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;