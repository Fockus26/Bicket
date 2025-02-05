import React, { useState } from 'react';

function Header(props) {
    const { 
        sort, setSort, dataHeader, searchFilters, 
        setSearchFilters, isRowsSelected, setIsRowsSelected, 
        dataDashboard, setDataDashboard, deletedRows
    } = props;

    const [ hoveredHeader, setHoveredHeader ] = useState('');

    const handleSearch = (key, value) => setSearchFilters(prev => ({ ...prev, [key]: value }));

    const deleteAllRows = () => 
        setDataDashboard(dataDashboard
            .filter(value => !Object.keys(deletedRows)
            .filter(key => deletedRows[key] === true)
            .map(Number).includes(value.id)))

    return (
        <thead>
            <tr>
                <i 
                    className={
                        'fa-square' + (isRowsSelected ? '-check' : '') +
                        ' fa-' + (isRowsSelected ? 'solid' : 'regular')
                    } 
                    onClick={() => setIsRowsSelected(!isRowsSelected)}
                />

                { dataHeader.map((value, index) => 
                    <th 
                        key={index} 
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
                                    className={
                                        'fa-solid fa-sort-' + (direction === 'asc' ? 'up' : 'down') + 
                                        (   sort.key === value && sort.direction === direction ? ' active'
                                            : value === hoveredHeader ? '' : ' hide'
                                        )
                                    }
                                    onClick={() => setSort({ key: value, direction })}
                                />
                            )}
                        </div>
                    </th>
                )}

                <i 
                    className={'fa-solid fa-trash-can ' + (isRowsSelected ? '' : 'hide')} 
                    onClick={deleteAllRows} 
                />
            </tr>
        </thead>
    );
}

export default Header;
