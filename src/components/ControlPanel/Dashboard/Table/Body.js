import React, { useState, useMemo } from 'react';
import Content from './Body/Content.js';

function Body(props) {
  const { 
    sort, startPage, endPage, dataHeader, dataDashboard, setDataDashboard,
    searchFilters, setIsRowsSelected
  } = props;

  const handleDeletedRows = id => setDataDashboard(dataDashboard.filter(value => value.id !== id))

  const filteredData = useMemo(() => {
    return dataDashboard.filter(item => 
      Object.keys(searchFilters).every(key => 
          !searchFilters[key] ? true 
          : item[key]?.toString().toLowerCase().includes(searchFilters[key].toLowerCase())
      )
    );
  }, [ searchFilters, dataDashboard ]);

  const sortedData = useMemo(() => {
    const { key, direction } = sort;
    if (!key) return filteredData;

    const sorted = [...filteredData].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      return direction === 'asc' 
        ? aValue < bValue ? -1 : aValue > bValue ? 1 : 0 
        : aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
    });

    return sorted;
  }, [filteredData, sort]);

  const dataBody = sortedData.slice(startPage, endPage);
  const dataFooter = dataBody.length > 1 ? dataBody[dataBody.length - 1] : null  

  const [selectedRows, setSelectedRows] = useState(
    Object.fromEntries(Array.from({ length: dataBody.length }, (_, index) => [dataBody[index]['id'], false]))
  )  

  // Busca cual fila fue seleccionada
  const handleSelectedRows = key =>    
    setSelectedRows(prev => { 
      const newSelectedRows = {
        ...prev,
        [key]: !prev[key]
      }
      
      const isAllRowsSelected = Object.values(newSelectedRows).every(value => value);
      setIsRowsSelected(isAllRowsSelected)

      return newSelectedRows
    })    

  return (
    <>
      <tbody>
        { dataBody.map(row => 
          <Content 
            row={row}
            idRow={row.id} 
            dataHeader={dataHeader}
            selectedRows={selectedRows}
            handleSelectedRows={handleSelectedRows}
            handleDeletedRows={handleDeletedRows}
          />
        )}
      </tbody>

      { dataFooter && 
        <tfoot>
          <Content 
            row={dataFooter}
            idRow={dataFooter.id} 
            dataHeader={dataHeader}
            selectedRows={selectedRows}
            handleSelectedRows={handleSelectedRows}
            handleDeletedRows={handleDeletedRows}
          />
        </tfoot>
      }
    </>
  );
}

export default Body;
