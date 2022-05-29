import React, { useState, useEffect } from "react";
import axios from "axios";
import { PlusIcon } from "@heroicons/react/solid";
import { FormattedMessage, useIntl } from "react-intl";
import List from "./List";

function Note() {
  const [notes, setNewNotes] = useState<any[]>([]);
  const [formNote, setFormNote] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    getNotes();
  }, []);
  const [isExpanded, setExpanded] = useState(false);
  const [rows, setRows] = useState(1);

  function getNotes() {
    axios({
      method: "GET",
      url: "/notes/",
    })
      .then((response) => {
        const data = response.data;
        setNewNotes(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  function createNote(event: any) {
    axios({
      method: "POST",
      url: "/notes/",
      data: {
        title: formNote.title,
        content: formNote.content,
      },
    }).then((response) => {
      getNotes();
    });

    setFormNote({
      title: "",
      content: "",
    });
    setExpanded(false);
    event.preventDefault();
  }

  function DeleteNote(id: any) {
    axios({
      method: "DELETE",
      url: `/notes/${id}/`,
    }).then((response) => {
      getNotes();
    });
  }

  function handleChange(event: any) {
    const { value, name } = event.target;
    setFormNote((prevNote: any) => ({
      ...prevNote,
      [name]: value,
    }));
  }
  function NoteShow() {
    setExpanded(true);
    setRows(3);
  }

  const intl = useIntl();

  return (
    <div className="bg-teal-400 p-4 m-4">
      <h1 className="bg-orange-100 m-4 p-4 text-xl shadow font-bold">
        <FormattedMessage id="notes05" defaultMessage="Notes" />
      </h1>
      <form className="">
        {isExpanded && (
          <input
            className="inline-flex bg-teal-200 border-0 py-1 px-3 focus:outline-none  rounded text-lg mt-4 md:mt-0 m-4"
            onChange={handleChange}
            title={formNote.title}
            name="title"
            placeholder={intl.formatMessage({ id: "notes02" })}
            value={formNote.title}
          />
        )}
        <textarea
          className="inline-flex placeholder:text-orange-900 bg-teal-200 border-0 py-1 px-3 focus:outline-none rounded text-lg mt-4 md:mt-0 m-4 w-1/2"
          onClick={NoteShow}
          onChange={handleChange}
          name="content"
          placeholder={intl.formatMessage({ id: "click02" })}
          rows={rows}
          value={formNote.content}
        />
        {isExpanded && (
          <button
            className="bg-lime-200 rounded-lg border-4 border-lime-900"
            onClick={createNote}
          >
            <PlusIcon />
            <FormattedMessage id="notes06" defaultMessage="Add" />
          </button>
        )}
      </form>
      <div className="w-auto bg-orange-100 m-1">
        {notes &&
          notes.map((note) => (
            <List
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              deletion={DeleteNote}
            />
          ))}
      </div>
    </div>
  );
}

export default Note;
