import React, { useState } from 'react';

function Header(props) {
    const { 
        sort, setSort, dataHeader, dataDashboard, searchFilters, setSearchFilters, 
        isAllRowsSelected, setSelectedRows, actualData,
        isAllActualRowsSelected, setIsAllActualRowsSelected,
        deleteRows
    } = props;

    const [ hoveredHeader, setHoveredHeader ] = useState('');

    const handleSearch = (key, value) => setSearchFilters(prev => ({ ...prev, [key]: value }));

    const toggleSelectAllActualRows = () => {
        const idActualRows = actualData.map(data => data.id)
        setSelectedRows(prev => prev.map(data => 
            idActualRows.includes(data.id) ?  ({...data, isSelected: !isAllActualRowsSelected}) : data)
        )
        setIsAllActualRowsSelected(!isAllActualRowsSelected)
    }    

    return (
        <thead>
            <tr>
                <th>
                    <i 
                        className={
                            'fa-square' + (isAllActualRowsSelected || isAllRowsSelected ? '-check' : '') +
                            ' fa-' + (isAllActualRowsSelected || isAllRowsSelected ? 'solid' : 'regular')
                        } 
                        onClick={toggleSelectAllActualRows}
                    />

                    { dataHeader.map(value => 
                        <div 
                            key={value}
                            className='filter'
                            onMouseEnter={() => setHoveredHeader(value)} 
                            onMouseLeave={() => setHoveredHeader('')}
                        >
                            <input
                                placeholder={value}
                                type="search"
                                value={searchFilters[value] || ''}
                                onChange={e => handleSearch(value, e.target.value)}
                            />

                            <div className="sort">
                                {['asc', 'desc'].map(direction => 
                                    <i 
                                        key={direction + value}
                                        className={
                                            'fa-solid fa-sort-' + (direction === 'asc' ? 'up' : 'down') + 
                                            (sort.key === value && sort.direction === direction ? ' active'
                                                : value === hoveredHeader ? '' : ' hide'
                                            )
                                        }
                                        onClick={() => setSort({ key: value, direction })}
                                    />
                                )}
                            </div>
                        </div>
                    )}

                    { isAllActualRowsSelected && !isAllRowsSelected &&
                        <span onClick={() => deleteRows(true)}>Eliminar {dataDashboard.length} eventos</span>
                    }

                    <i 
                        className={'fa-solid fa-trash-can ' + (isAllActualRowsSelected || isAllRowsSelected ? '' : 'hide')} 
                        onClick={() => deleteRows(false)} 
                    />
                </th>
            </tr>
        </thead>
    );
}

export default Header;
