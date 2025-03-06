import React, { useEffect } from 'react';
import Content from './Body/Content.js';

function Body(props) {
  const { 
    dataHeader, dataDashboard, setDataDashboard,
    setIsAllRowsSelected, selectedRows, setSelectedRows,
    setIsAllActualRowsSelected, actualData
  } = props;

  const handleDeleteRow = id => setDataDashboard(dataDashboard.filter(value => value.id !== id))

  const getData = section => {
    const isEnoughData = actualData.length > 1

    if (section === 'body') {
      if (isEnoughData) return actualData.slice(0, actualData.length - 1)
      else return actualData
    } 
    else if (section === 'footer') {
      if (isEnoughData) return actualData[actualData.length - 1]
      else return null
    }
  }

  const dataBody = getData('body')
  const dataFooter = getData('footer') 
  
  const idActualRows = actualData.map(data => data.id)

  // Busca cual fila fue seleccionada
  const selectRow = id => 
    setSelectedRows(prev => {
      // Busca el objeto por el id y actualiza el isSelected
      const updatedSelectedRows = prev.map(item => item.id === id ? { id: item.id, isSelected: !item.isSelected } : item)

      // Verifica si todas las filas han sido seleccionadas
      const isAllRowsSelected = updatedSelectedRows.every(item => item.isSelected);
      setIsAllRowsSelected(isAllRowsSelected)
      
      const actualSelectedRows = updatedSelectedRows.filter(item => idActualRows.includes(item.id))
      const isAllActualRowsSelected = actualSelectedRows.every(item => item.isSelected)
      setIsAllActualRowsSelected(isAllActualRowsSelected)

      return updatedSelectedRows
    })


    // Cada vez que cambie la pagina verifica si todas las filas estan seleccionadas
    useEffect(() => {
      const actualSelectedRows = selectedRows.filter(item => idActualRows.includes(item.id))
      const isAllActualRowsSelected = actualSelectedRows.every(item => item.isSelected)
      setIsAllActualRowsSelected(isAllActualRowsSelected)
    }, [idActualRows, selectedRows, setIsAllActualRowsSelected])

  return (
    <>
      <tbody>
        { dataBody.map(row => 
          <Content 
            row={row}
            dataHeader={dataHeader}
            selectedRows={selectedRows}
            selectRow={selectRow}
            handleDeleteRow={handleDeleteRow}
          />
        )}
      </tbody>

      { dataFooter && 
        <tfoot>
          <Content 
            row={dataFooter}
            dataHeader={dataHeader}
            selectedRows={selectedRows}
            selectRow={selectRow}
            handleDeleteRow={handleDeleteRow}
          />
        </tfoot>
      }
    </>
  );
}

export default Body;
