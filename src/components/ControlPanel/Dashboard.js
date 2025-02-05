import React, { useState } from 'react';
import Table from './Dashboard/Table.js';
import Pagination from './Dashboard/Pagination.js';
import data from './Dashboard/data.js';

function Dashboard() {
  const [ dataDashboard, setDataDashboard ] = useState(data)
  
  const [ currentPage, setCurrentPage ] = useState(1);
  const itemsPerPage = 9;
  const startPage = (currentPage - 1) * itemsPerPage;
  const endPage = startPage + itemsPerPage;

  return (
    <div id='Dashboard' className='container'>
      <Table 
        dataDashboard={dataDashboard} 
        setDataDashboard={setDataDashboard} 
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        startPage={startPage}
        endPage={endPage}
      />

      <Pagination 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        startPage={startPage}
        endPage={endPage}
        dataDashboard={dataDashboard}
      />
    </div>
  );
}

export default Dashboard;
