import React from 'react'

function DetailData(props) {
  const { colorPage, detailData } = props
  const { message, status, date, time } = detailData
  
  return (
    <>
      { detailData && 
        <section className='details'>
          <span>
            <i style={colorPage} className="fa-regular fa-message" />
            {message}
          </span>

          <ul>
            <li>
              <i 
                className={
                  `fa-solid fa-${status === 'warning' ? 'triangle-exclamation' : 
                  'circle-' + (status === 'success' ? 'check' : status === 'error' ? 'xmark' : 'info')}`
                } 
                style={colorPage}
              />
              {status}
            </li>

            <li>
              <i style={colorPage} className="fa-solid fa-calendar-days" />
              {date}
            </li>

            <li>
              <i style={colorPage} className="fa-solid fa-clock" />
              {time}
            </li>
          </ul>
        </section>
      }
    </>
  )
}

export default DetailData
