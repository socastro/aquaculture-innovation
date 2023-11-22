import React, { useState } from 'react';
import {Row, Col, Form} from 'react-bootstrap';
 

const MatrixCage = (rows, columns) => {
  /*const [rows, setRows] = useState(rows); // Initial number of rows
  const [columns, setColumns] = useState(columns); // Initial number of columns*/
  const [matrix, setMatrix] = useState(createEmptyMatrix(2, 4));

  // Function to create an empty matrix with the given number of rows and columns
  function createEmptyMatrix(rows, columns) {
    return Array.from({ length: rows }, () => Array(columns).fill(''));
  }

  // Function to handle changes in the number of rows
  /*const handleRowChange = (e) => {
    const newRowCount = parseInt(e.target.value, 10) || 0;
    setRows(newRowCount);
    setMatrix(createEmptyMatrix(newRowCount, columns));
  };

  // Function to handle changes in the number of columns
  const handleColumnChange = (e) => {
    const newColumnCount = parseInt(e.target.value, 10) || 0;
    setColumns(newColumnCount);
    setMatrix(createEmptyMatrix(rows, newColumnCount));
  };

  // Function to handle changes in the matrix cell values
  const handleCellValueChange = (rowIndex, columnIndex, value) => {
    const newMatrix = [...matrix];
    newMatrix[rowIndex][columnIndex] = value;
    setMatrix(newMatrix);
  };*/

  return (
    <div style={{width:'27vw', margin:'2vw'}}>
      <div>
        {/*
        <Row>
            <Col>
                <label>Filas:  </label>
                <input  style={{width:'3vw'}} type="number" value={rows} onChange={handleRowChange} />
            </Col>
        </Row>
        <Row>
            <Col>
                <label>Columnas:  </label>
                <input style={{width:'3vw'}} type="number" value={columns} onChange={handleColumnChange} />
            </Col>
        </Row>
  */}
      </div>
      <table style={{width:'27vw'}}>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <td key={columnIndex}>
                  <input
                    style={{width:'5vw'}}
                    type="text"
                    value={cell}
                    /*onChange={(e) =>
                      handleCellValueChange(rowIndex, columnIndex, e.target.value)
                    }*/
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatrixCage;
