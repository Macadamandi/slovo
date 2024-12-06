import './dictionaryTable.css';

const DictionaryTable = () => {
  return (
    <div className="w-75 m-auto">
      <div className="mb-20">My Dictionary</div>
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
          <tr>
            <td></td>
            <th>1</th>
            <td>
              <input
                disabled
                required
                type="text"
                className="form-control"
                value="dog"
              />
            </td>
            <td>
              <input
                disabled
                type="text"
                className="form-control"
                value="собака"
              />
            </td>
            <td>
              <button style={{ border: 'none' }}>
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
          <tr>
            <td></td>
            <th>2</th>
            <td>
              <input
                disabled
                type="text"
                className="form-control"
                value="dorm"
              />
            </td>
            <td>
              <input
                disabled
                type="text"
                className="form-control"
                value="общежитие"
              />
            </td>
            <td>
              <button style={{ border: 'none' }}>
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
          <tr>
            <td></td>
            <th>3</th>
            <td>
              <input
                disabled
                type="text"
                className="form-control"
                value="dog"
              />
            </td>
            <td>
              <input
                disabled
                type="text"
                className="form-control"
                value="собака"
              />
            </td>
            <td>
              <button style={{ border: 'none' }}>
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
        </tbody>
      </table>
    </div>
  );
};

export default DictionaryTable;
