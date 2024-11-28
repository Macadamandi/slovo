import React, { useState, useEffect } from 'react';
import WordItem from '../wordItem/WordItem';
import { AuthService } from '../../services/firebase/authService';
import { addSet } from '../../services/firebase/dbService';

import "./createNewSet.css";

const CreateNewSet = () => {
    const [counter, setCounter] = useState(1);
    const [rows, setRows] = useState([]);
    const [title, setTitle] = useState("");


    const addRow = () => {
        setCounter(counter + 1);
        setRows([...rows, { id: counter}]);
    }

    const onDelete = (id) => {
        setRows(rows.filter(row => row.id !== id));
    }

    const onSave = () => {
        addSet(title);
    }

    return (
        <>
        <AuthService/>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column w-75">
                    <div><p>Create new set</p></div>
                    <div className="d-flex mb-20 align-items-center">
                        <label
                            class="form-label"
                            htmlFor="title"
                            style={{ margin: "0 15px 0 0", fontSize: "16px" }}
                        >
                            Title
                        </label>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            id="title"
                            type="text"
                            class="form-control w-50"
                            placeholder="Input Title"
                        />
                        <button
                            onClick={() => onSave(title)}
                            type="button"
                            class="btn btn-secondary"
                            style={{ marginLeft: "auto" }}
                        >
                            Save
                        </button>
                    </div>
                    <table className="table text-center align-middle table-hover">
                        <caption>Number of words: 10</caption>
                        <thead className="table-dark">
                            <tr>
                                <th></th>
                                <th scope="col">№</th>
                                <th scope="col">Word</th>
                                <th scope="col">Translate</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rows.map((row,index) => (
                                    <WordItem key={row.id} id={row.id} index={index+1} onDelete={onDelete}/>
                                ))
                            }
                            <tr>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-secondary"
                                        style={{
                                            height: "40px",
                                            width: "40px",
                                            borderRadius: "100%",
                                        }}
                                        onClick={addRow}
                                    >
                                        +
                                    </button>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div><p>All sets</p></div>
                    <div className="all-sets">
                        <div className="all-sets__item">
                            <div>100 words</div>
                            <img src="/images/picture.jpg" alt="" />
                            <div>
                                <p>Top 100 words</p>
                            </div>
                            <button type="button" class="btn btn-success w-100">
                                Learn
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateNewSet;
