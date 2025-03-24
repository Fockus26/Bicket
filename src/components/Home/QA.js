import React, { useState, useEffect } from 'react'
import data from './QA/data'

function QA() {
  const [ activeAnswer, setActiveAnswer ] = useState(null)
  const showContent = answerId => activeAnswer === answerId ? setActiveAnswer(null) : setActiveAnswer(answerId)

  const [isTablet, setIsTablet] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth > 767);
    }

    // Agregar el event listener
    window.addEventListener('resize', handleResize);
    handleResize(); // Asegúrate de verificar el tamaño de la ventana al montar el componente

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [])

  return (
    <section id="QA">
      <div className='container'>
        <h2>Frequently Asked Questions</h2>
        <ul>
          {data.map(data => 
            <li key={ data.id }>
              <div className='content'>
                <div className='title' onClick={ () => showContent(data.id) }>
                  <i 
                    className={ `fa-solid fa-${activeAnswer === data.id ? "minus" : "plus"}` } 
                    style={{ transform: activeAnswer === data.id && 'rotate(180deg)' }}
                  />
                  <h3>{ data.question }</h3>
                </div>
                <p 
                  style={{
                    height: activeAnswer === data.id && "auto",
                    opacity: activeAnswer === data.id && "1",
                  }} 
                  dangerouslySetInnerHTML={{ __html: data.answer }} 
                />
              </div>
              <hr style={{ marginTop: isTablet && activeAnswer === data.id && '0.625rem' }}/>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default QA