import React from 'react'
import DetailData from './DetailData.js';
import useColorPage from '../../../../../utils/useColorPage.js'

function Content(props) {
    const { 
        row, idRow, dataHeader, selectedRows, handleSelectedRows, handleDeleteRows
    } = props

    const colorPage = useColorPage(row.page)

    return (
        <tr 
            key={idRow}
            style={{ borderColor: colorPage }}
        >
            <div className='data'>
                <i 
                    className={`${selectedRows[idRow] ? 'fa-solid fa-square-check' : 'fa-regular fa-square'}`}
                    onClick={() => handleSelectedRows(idRow)}
                    style={{ color: colorPage }}
                />
                {dataHeader.map((key, index) => {
                    return (
                        row[key] === undefined 
                        ? 
                        null 
                        : 
                        <td key={index} style={{ color: key === 'page' ? colorPage : undefined }}>
                            { key === 'page'
                                ? <a href='#' style={{ color: colorPage }}>{row[key]}</a>
                                : <p>{row[key]}</p>
                            }
                            { index === dataHeader.length - 1 && selectedRows[idRow] &&
                            <i className="fa-solid fa-trash-can" onClick={() => handleDeleteRows({id:idRow})} /> 
                            }
                        </td>
                    )                    
                })}
            </div>

            <DetailData colorPage={{color: colorPage}} detailData={row} />
        </tr>
    )
}

export default Content
