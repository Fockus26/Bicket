import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Table from './Dashboard/Table.js';
import Pagination from './Dashboard/Pagination.js';
import data from './Dashboard/data.js';

import useDeviceSize from 'utils/useDeviceSize.js';

function Dashboard() {
  const navigate = useNavigate()

  const [ dataDashboard, setDataDashboard ] = useState(data)
  useEffect(() => { setDataDashboard(data) }, [data])
  
  const [ hasData, setHasData ] = useState(dataDashboard.length > 0)
  const [ showCreateEventText, setShowCreateEventText ] = useState(false)

  const { isMobile } = useDeviceSize()

  const [itemsPerPage, setItemsPerPage ] = useState(isMobile ? 5 : 10)

  useEffect(() => { setItemsPerPage(isMobile ? 5 : 10) }, [isMobile])

  const [ actualPage, setActualPage ] = useState(1)

  const getStartItem = useCallback(page => (itemsPerPage * (page - 1)) + 1, [itemsPerPage]);
  const [ startItem, setStartItem ] = useState(getStartItem(actualPage))

  const getEndItem = useCallback( page => {
      const maxItem = page * itemsPerPage;
      return maxItem > dataDashboard.length ? dataDashboard.length : maxItem;
  }, [itemsPerPage, dataDashboard.length]);
  const [ endItem, setEndItem ] = useState(getEndItem(actualPage))
  
  const handleItemsToShow = useCallback((newPage) => {
    setActualPage(newPage);
    setStartItem(getStartItem(newPage));
    setEndItem(getEndItem(newPage));
  }, [getStartItem, getEndItem]);

  useEffect(() => {
    setHasData(dataDashboard.length > 0)
    handleItemsToShow(actualPage)
  }, [actualPage, dataDashboard, handleItemsToShow])

  return (
    <div id='Dashboard' className='container'>
      <h1>{ dataDashboard.length ? 'Dashboard' : 'No hay eventos' }</h1>

      <section 
        data-active={hasData} 
        onMouseEnter={() => setShowCreateEventText(true)}
        onMouseLeave={() => setShowCreateEventText(false)}
        onClick={() => !hasData && navigate('/control-panel/create-event')}
      >
        { hasData ? (
            <>
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
            </>
          ) : (
            <div>
              <i className="fa-solid fa-circle-plus" />
              <span className={!showCreateEventText && 'hide'}>Crear Evento</span>
            </div>
          )
        } 
      </section>

      <button className={hasData ? 'hide' : ''} onClick={() => hasData && navigate('/control-panel/create-event')} />
    </div>
  );
}

export default Dashboard;
