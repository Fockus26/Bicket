import React from 'react'

function Pagination(props) {
    const { currentPage, setCurrentPage, itemsPerPage, startPage, endPage, dataDashboard } = props

    const handlePageDirection = direction => 
        (currentPage < totalPages || currentPage > 1) && 
        setCurrentPage(prev => prev + (direction === 'prev' ? -1 : 1))
    
    const totalPages = Math.ceil(dataDashboard.length / itemsPerPage);
    
    const pages = [];
    currentPage > 2 && pages.push(currentPage - 2)
    currentPage > 1 && pages.push(currentPage - 1)
    pages.push(currentPage);
    currentPage < totalPages && pages.push(currentPage + 1)
    currentPage + 1 < totalPages - 1 && pages.push('...')
    !pages.includes(totalPages) && pages.push(totalPages)    

    return (
        <div className="pagination">
            <nav>
                <i 
                    className={'fa-solid fa-angle-left ' + (currentPage === 1 && 'hide')} 
                    onClick={() => handlePageDirection('prev')}
                />

                <ul>
                    { pages.map((page, index) => 
                        <li 
                            key={index} 
                            data-active={page === currentPage}
                            data-valid={page !== '...'}
                            onClick={() => page !== '...' && setCurrentPage(page)}
                        >
                            {page}
                        </li>
                    )}
                </ul>

                <i 
                    className={'fa-solid fa-angle-right ' + (currentPage === totalPages && 'hide')}
                    onClick={() => handlePageDirection('next')}
                />
            </nav>
            
            <span>{startPage} - {endPage} from {dataDashboard.length} tickets</span>
        </div>
    )
}

export default Pagination
