import React from 'react'

function DetailData(props) {
  const { colorPage, detailData } = props
  const { message, location, tickets, status } = detailData

  return (
    <>
      { detailData && 
        <div className='details'>
          <span className='message'>
            <i style={colorPage} className="fa-regular fa-message" />
            {message}
          </span>

          <div>
            <span className='location'>
              <i style={colorPage} className="fa-solid fa-location-dot" />
              {location}
            </span>

            <span className='tickets'>
              <i style={colorPage} className="fa-solid fa-hashtag" />
              {tickets} {tickets > 1 ? 'tickets' : 'ticket'}
            </span>

            <span>
              <i 
                className={
                  `fa-solid fa-${status === 'warning' ? 'triangle-exclamation' : 
                  'circle-' + (status === 'success' ? 'check' : status === 'error' ? 'xmark' : 'info')}`
                } 
                style={colorPage}
              />
              {status}
            </span>
          </div>
        </div>
      }
    </>
  )
}

export default DetailData
