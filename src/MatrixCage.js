import React, { useState } from 'react';
import {Row, Col, Form} from 'react-bootstrap';
 

const MatrixCage = () => {
  const [rows, setRows] = useState(3); // Initial number of rows
  const [columns, setColumns] = useState(3); // Initial number of columns
  const [matrix, setMatrix] = useState(createEmptyMatrix(3, 3));

  // Function to create an empty matrix with the given number of rows and columns
  function createEmptyMatrix(rows, columns) {
    return Array.from({ length: rows }, () => Array(columns).fill(''));
  }

  // Function to handle changes in the number of rows
  const handleRowChange = (e) => {
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
  };

  return (
    <div>
      <div>
        <Row>
            <Col>
                <label>Filas:</label>
                <input type="number" value={rows} onChange={handleRowChange} />
            </Col>
        </Row>
        <Row>
            <Col>
                <label>Columnas:</label>
                <input type="number" value={columns} onChange={handleColumnChange} />
            </Col>
        </Row>
      </div>
      <table>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <td key={columnIndex}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) =>
                      handleCellValueChange(rowIndex, columnIndex, e.target.value)
                    }
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
