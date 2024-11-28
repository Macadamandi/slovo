import { useState, useEffect } from "react";

const WordItem = ({id, onDelete, index}) => {

    return (
        <tr>
            <td></td>
            <th>{index}</th>
            <td>
                <input required type="text" class="form-control" placeholder="Enter word" />
            </td>
            <td>
                <input type="text" class="form-control" placeholder="Translation" />
            </td>
            <td>
                <button onClick={() => onDelete(id)} style={{border: 'none'}}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="24"
                        height="24"
                    >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
                    </svg>
                </button>
            </td>
        </tr>
    );
};

export default WordItem;