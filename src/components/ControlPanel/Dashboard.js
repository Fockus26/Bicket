import React, { useEffect, useState } from 'react';
import Table from './Dashboard/Table.js';
import Pagination from './Dashboard/Pagination.js';
import data from './Dashboard/data.js';

function Dashboard() {
  const [ dataDashboard, setDataDashboard ] = useState(data)
  
  const [ actualPage, setActualPage ] = useState(1)
  const itemsPerPage = 10

  const getStartItem = actualPage => ((itemsPerPage * actualPage) - itemsPerPage) + 1
  const [ startItem, setStartItem ] = useState(getStartItem(actualPage))

  const getEndItem = actualPage => {
    const maxItem = actualPage * itemsPerPage
    return maxItem > dataDashboard.length ? dataDashboard.length : maxItem
  }
  const [ endItem, setEndItem ] = useState(getEndItem(actualPage))
  
  const handleItemsToShow = newPage => {
    setActualPage(newPage)
    setStartItem(getStartItem(newPage))
    setEndItem(getEndItem(newPage))
  }

  useEffect(() => {
    handleItemsToShow(actualPage)
  }, [dataDashboard])

  return (
    <div id='Dashboard' className='container'>
      <h1>Dashboard</h1>

      { dataDashboard.length ?
        <section>
          <Table 
            dataDashboard={dataDashboard} 
            setDataDashboard={setDataDashboard} 
            startItem={startItem}
            endItem={endItem}
          />

          <Pagination
            itemsPerPage={itemsPerPage}
            startItem={startItem}
            endItem={endItem}
            dataDashboard={dataDashboard}
            handleItemsToShow={handleItemsToShow}
            actualPage={actualPage}
          />
        </section>
        : <span className='no-dashboard'>No hay eventos</span>
      }
    </div>
  );
}

export default Dashboard;
