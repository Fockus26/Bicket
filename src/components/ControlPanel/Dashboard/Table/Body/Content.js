import React from 'react'
import DetailData from './DetailData.js';
import useColorPage from 'utils/useColorPage.js'

function Content(props) {
    const { 
        row, dataHeader, selectedRows, selectRow, handleDeleteRow
    } = props

    const isSelected = selectedRows.find(actualRow => actualRow.id === row.id).isSelected

    const colorPage = useColorPage(row.page, false)

    return (
        <tr 
            key={row.id}
            style={{ borderColor: colorPage }}
        >
            <div className='data'>
                <i 
                    className={`${isSelected ? 'fa-solid fa-square-check' : 'fa-regular fa-square'}`}
                    onClick={() => selectRow(row.id)}
                    style={{ color: colorPage }}
                />
                { dataHeader.map((key, index) => {
                    return (
                        row[key] ? (
                            <td key={index} style={{ color: key === 'page' ? colorPage : undefined }}>
                                { key === 'page'
                                    ? <a href='#' style={{ color: colorPage }}>{row[key]}</a>
                                    : <p>{row[key]}</p>
                                }
                                { index === dataHeader.length - 1 && isSelected &&
                                    <i className="fa-solid fa-trash-can" onClick={() => handleDeleteRow(row.id)} /> 
                                }
                            </td>
                        ) 
                        : null
                    )                    
                })}
            </div>

            <DetailData colorPage={{color: colorPage}} detailData={row} />
        </tr>
    )
}

export default Content
