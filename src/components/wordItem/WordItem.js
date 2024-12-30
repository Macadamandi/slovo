import { useState, useEffect } from 'react';

const WordItem = ({ id, onDelete, index, setWordAndTranslation }) => {
  return (
    <tr>
      <th>{index}</th>
      <td>
        <input
          required
          type="text"
          className="form-control"
          name="word"
          placeholder="Enter word"
          onChange={(e) => setWordAndTranslation(e, index, 'word')}
        />
      </td>
      <td>
        <input
          required
          type="text"
          className="form-control"
          name="translation"
          placeholder="Translation"
          onChange={(e) => setWordAndTranslation(e, index, 'translation')}
        />
      </td>
      <td>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => onDelete(id)}
          style={{ border: 'none' }}
        >
          Delete
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="24"
            height="24"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
          </svg> */}
        </button>
      </td>
    </tr>
  );
};

export default WordItem;
