import React, { useState } from "react";
import styles from './NumberTable.module.css' 
function NumberTable() {
  const [number, setNumber] = useState("");
  const [table, setTable] = useState([]);

  const handleNumberChange = (event) => {
    const { value } = event.target;
    setNumber(value);

    // Generate the table
    const newTable = [];
    if (value) {
      for (let i = 1; i <= 10; i++) {
        newTable.push({
          // multiplier: i,
          result: value * i
        });
      }
    }
    setTable(newTable);
  };

  return (
    <div className={styles.con}>
    <div className={styles.container}>
      <h4>Enter A Number</h4>
      <input  className={styles.inp} type="number" value={number} onChange={handleNumberChange} />
      <table className={styles.tbl}>
        <thead>
          <tr>
          
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {table.map((row, index) => (
            <tr key={index}>
            
              <td className={styles.tr}>{row.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}


export default NumberTable;