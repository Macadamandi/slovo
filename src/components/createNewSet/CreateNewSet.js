import React, { useState, useEffect, useRef } from "react";
import WordItem from "../wordItem/WordItem";
import CardSet from "../cardSet/CardSet";
import { addSet, getAllSets } from "../../services/firebase/dbService";

const CreateNewSet = () => {
  const [counter, setCounter] = useState(1);
  const [rows, setRows] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newWordAndTranslation, setNewWordAndTranslation] = useState([]);
  const [titleArray, setTitleArray] = useState([{title: '', isChecked: false}]);
  const errorRef = useRef('');

  // Загрузка всех наборов при монтировании компонента
  useEffect(() => {
    fetchTitles();
  }, []);

  const fetchTitles = async () => {
    const titles = await getAllSets(); // Получаем массив заголовков
    setTitleArray(titles); // Устанавливаем данные в состояние
    console.log(titles);
  };

  const addRow = () => {
    setCounter(counter + 1);
    setRows([...rows, { id: counter }]);
    //errorRef.current.textContent = '';
  };

  const onDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (newWordAndTranslation.length > 0) {
      await addSet(newTitle, newWordAndTranslation); // Добавляем новый набор
      setRows([]); // Очищаем строки
      setCounter(1); // Сбрасываем счётчик
      setNewTitle(""); // Сбрасываем заголовок
      setNewWordAndTranslation([]); // Очищаем массив слов
      fetchTitles(); // Обновляем карточки
    } else {
      errorRef.current.textContent = 'Add words';
    }
  };

  const setWordAndTranslation = (e, index, field) => {
    const newRows = [...newWordAndTranslation];
    newRows[index - 1][field] = e.target.value;
    setNewWordAndTranslation(newRows);
  };

  const setTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const addVirtualArrow = () => {
    setNewWordAndTranslation([...newWordAndTranslation, { word: "", translation: "" }]);
  };

  return (
    <>
      <div className="d-flex flex-column w-75 m-auto">
        <div>
          <p>Create new set</p>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="d-flex mb-20 align-items-center">
            <label
              className="form-label"
              htmlFor="title"
              style={{ margin: "0 15px 0 0", fontSize: "16px" }}
            >
              Title
            </label>
            <input
              onChange={(e) => setTitle(e)}
              required
              id="title"
              type="text"
              value={newTitle}
              className="form-control w-50"
              placeholder="Input Title"
            />
            <button
              type="submit"
              className="btn btn-secondary"
              style={{ marginLeft: "auto" }}
            >
              Save
            </button>
          </div>
          <table className="table text-center align-middle table-hover">
            <caption>Number of words: {newWordAndTranslation.length}</caption>
            <thead className="table-dark">
              <tr>      
                <th scope="col">№</th>
                <th scope="col">Word</th>
                <th scope="col">Translate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <WordItem
                  setWordAndTranslation={setWordAndTranslation}
                  key={row.id}
                  id={row.id}
                  index={index + 1}
                  onDelete={onDelete}
                />
              ))}
              <tr>
                <td colSpan={4}>
                  <button
                    type="button"
                    className="btn btn-success"
                    style={{
                      height: "40px",
                      width: "60px",
                    }}
                    onClick={() => {
                      addRow();
                      addVirtualArrow();
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div>
          <p>All sets</p>
        </div>
        <CardSet wrap={5} titleArray={titleArray} />
      </div>
    </>
  );
};

export default CreateNewSet;
