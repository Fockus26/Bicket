import React, { useState } from 'react'
import Header from './Table/Header.js';
import Body from './Table/Body.js';

function Table(props) {
    const { dataDashboard, setDataDashboard, currentPage, itemsPerPage, startPage, endPage } = props
    
    const dataHeader = [ 'page', 'event', 'date' ];
    
    const [ sort, setSort ] = useState({ key: 'page', direction: 'asc' });
    const [ searchFilters, setSearchFilters ] = useState({});

    const [ isRowsSelected, setIsRowsSelected ] = useState(false);

    const [ deletedRows, setDeletedRows ] = useState([])

    return (
        <table>
            <Header 
                sort={sort} 
                setSort={setSort} 
                dataHeader={dataHeader} 
                dataDashboard={dataDashboard}
                setDataDashboard={setDataDashboard}
                deletedRows={deletedRows}
                searchFilters={searchFilters} 
                setSearchFilters={setSearchFilters} 
                isRowsSelected={isRowsSelected} 
                setIsRowsSelected={setIsRowsSelected}
            />
            <Body 
                sort={sort} 
                currentPage={currentPage} 
                itemsPerPage={itemsPerPage} 
                dataHeader={dataHeader} 
                dataDashboard={dataDashboard}
                setDataDashboard={setDataDashboard}
                searchFilters={searchFilters} 
                isRowsSelected={isRowsSelected}
                setIsRowsSelected={setIsRowsSelected}
                setDeletedRows={setDeletedRows}
                startPage={startPage}
                endPage={endPage}
            />      
        </table>
    )
}

export default Table
