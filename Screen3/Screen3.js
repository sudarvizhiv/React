import React, { useState } from "react";
import "./Screen3.css";

function Screen3({ userData }) {
  const [data, setData] = useState(
    userData.split(",").map((item, index) => ({ id: index, value: item }))
  );

  const handleDelete = (id) => {
    setData((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <div className="screen3-container">
      <p className="screen3-header">Mobile Numbers List</p>
      <table>
        <tbody>
          {data.map((item) => (
            <tr className="screen3-table-row" key={item.id}>
              <td className="screen3-number">{item.value}</td>
              <td>
                <button
                  className="screen3-number-delete-button"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Screen3;