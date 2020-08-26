import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { createNote } from './graphql/mutations';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');

  const handleAddNote = (e) => {
    e.preventDefault();
    const input = { note };
    API.graphql(graphqlOperation(createNote, { input }));
  };

  return (
    <div>
      <AmplifySignOut />
      <div className="flex flex-column items-center justify-center pa3 bg-washed-red">
        <h1 className="code f2-1">Amplify Notetaker </h1>
        <form onSubmit={handleAddNote} className="mb3">
          <input
            type="text"
            className="pa2 f4"
            placeholder="Write your note"
            onChange={(e) => setNote(e.target.value)}
          />
          <button className="pa2 f4" type="submit">
            Add Note
          </button>
        </form>
        <div>
          {notes.map((item) => (
            <p>item</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withAuthenticator(App);
