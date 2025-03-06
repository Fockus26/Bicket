import React, { useEffect, useMemo, useState } from 'react'
import Header from './Table/Header.js';
import Body from './Table/Body.js';

function Table(props) {
    const { dataDashboard, setDataDashboard, startItem, endItem } = props
    
    const dataHeader = [ 'page', 'event', 'date' ];
    
    const [ sort, setSort ] = useState({ key: 'page', direction: 'asc' });
    const [ searchFilters, setSearchFilters ] = useState({});

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

    const [ actualData, setActualData ] = useState([])

    useEffect(() => {
        setActualData(sortedData.slice(startItem - 1, endItem))
    }, [startItem, endItem, sortedData])

    const [selectedRows, setSelectedRows] = useState(
        dataDashboard.map(data => ({ id: data.id, isSelected: false }))
    ) 

    const [ isAllRowsSelected, setIsAllRowsSelected ] = useState(false);
    const [ isAllActualRowsSelected, setIsAllActualRowsSelected ] = useState(false)

    const deleteRows = isAllRows => {
        if (isAllRowsSelected || isAllActualRowsSelected) {
            if (isAllRows) {
                setDataDashboard([])
            } else {       
                const rowsToDelete = actualData.map(data => data.id)     
                setDataDashboard(dataDashboard.filter(data => !rowsToDelete.includes(data.id)))
            }

            setIsAllRowsSelected(false)
            setIsAllActualRowsSelected(false)
        }
    }    

    return (
        <table>
            <Header 
                sort={sort} 
                setSort={setSort} 
                dataHeader={dataHeader} 
                dataDashboard={dataDashboard}
                setDataDashboard={setDataDashboard}
                actualData={actualData}
                searchFilters={searchFilters} 
                setSearchFilters={setSearchFilters}

                isAllRowsSelected={isAllRowsSelected} 
                setIsAllRowsSelected={setIsAllRowsSelected}
                isAllActualRowsSelected={isAllActualRowsSelected}
                setIsAllActualRowsSelected={setIsAllActualRowsSelected}
                setSelectedRows={setSelectedRows}

                deleteRows={deleteRows}
            />
            <Body 
                dataHeader={dataHeader} 
                dataDashboard={dataDashboard}
                setDataDashboard={setDataDashboard}
                actualData={actualData}

                setIsAllRowsSelected={setIsAllRowsSelected}
                isAllActualRowsSelected={isAllActualRowsSelected}
                setIsAllActualRowsSelected={setIsAllActualRowsSelected}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
            />      
        </table>
    )
}

export default Table
