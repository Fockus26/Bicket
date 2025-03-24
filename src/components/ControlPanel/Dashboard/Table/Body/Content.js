import React from 'react'
import { useNavigate } from 'react-router-dom';

import DetailData from './DetailData.js';

import useColorPage from 'utils/useColorPage.js'

function Content(props) {
    const { 
        row, dataHeader, selectedRows, selectRow, handleDeleteRow
    } = props
    const navigate = useNavigate()

    const isSelected = selectedRows.find(actualRow => actualRow.id === row.id).isSelected

    const colorPage = useColorPage(row.page)

    return (
        <tr 
            key={row.id}
            style={{borderColor: colorPage.colorBase}}
        >
            <td style={colorPage.colorVariations}>
                <div className='data'>
                    <i 
                        className={`${isSelected ? 'fa-solid fa-square-check' : 'fa-regular fa-square'}`}
                        onClick={() => selectRow(row.id)}
                        style={{ color: colorPage.colorBase }}
                    />
                    {dataHeader.map((key, index) => {
                        return (
                            row[key] ? (
                                <div 
                                    key={`${row.id}-${index}`} // Usa una clave única
                                    style={{ color: key === 'page' ? colorPage.colorBase : undefined }}
                                >
                                    { key === 'page'
                                        ? <button 
                                            onClick={() => navigate('')}
                                            style={{ color: colorPage.colorBase }}
                                            >   
                                                {row[key]}
                                            </button>
                                        : <span>{row[key]}</span>
                                    }

                                    <i 
                                        className={'fa-solid fa-trash-can ' + ((index === dataHeader.length - 1 && isSelected) ? '' : 'hide')} 
                                        onClick={() => handleDeleteRow(row.id)} 
                                    /> 
                                </div>
                            ) 
                            : null
                        )                    
                    })}
                </div>

                <DetailData colorPage={{color: colorPage.colorBase}} detailData={row} />
            </td>
        </tr>
    )
}

export default Content
