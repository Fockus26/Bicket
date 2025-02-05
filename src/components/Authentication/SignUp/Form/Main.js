import React, { useEffect, useState } from 'react'

function MainData(props) {
    const { mainData, setData, setShowComponent } = props

    const [ progress, setProgress ] = useState(false);
    const resetProgress = () => {
        setProgress(false);
        setTimeout(() => { setProgress(true) }, 500);
    }
    useEffect(() => { resetProgress() }, [])

    const [ isError, setIsError ] = useState(false)
    const [ errorLabel, setErrorLabel ] = useState('')

    const [ amountVerified, setAmountVerified ] = useState(0)

    const [ actualData, setActualData ] = useState(Object.keys(mainData)[amountVerified])
    const [ floatingLabel, setFloatingLabel ] = useState(actualData)

    const renderTemporalMessage = () => {
        setShowComponent(prev => ({ ...prev, temporalMessage: true }))
        setTimeout(() => {
            setShowComponent(prev => ({ ...prev, main: false, specific: true, temporalMessage: false }))
        }, 3000) 
    }        
    const navigateData = direction => {
        if (direction === 'prev' || mainData[actualData].isVerified) {
            const isAllVerified = Object.values(mainData).every(item => item.isVerified) 

            if (direction === 'next' && isAllVerified) {
                renderTemporalMessage()
            } else {
                setAmountVerified(amountVerified + (direction === 'prev' ? -1 : 1))

                resetProgress();

                direction === 'prev' && setIsError(false) 
            }
        } else {
            setIsError(true)
            verifyData(actualData, mainData[actualData].value)
        }
    }
    // Cada vez que naveguemos a otros datos
    useEffect(() => {
        const newActualData = Object.keys(mainData)[amountVerified];
        setActualData(newActualData);

        setFloatingLabel(newActualData);
    }, [amountVerified, mainData]);

    const [ showPassword, setShowPassword ] = useState(false)
    const [ repeatPassword, setRepeatPassword ] = useState('')
    const [ showRepeatPassword, setShowRepeatPassword ] = useState(false)
    const [ showInputRepeatPassword, setShowInputRepeatPassword ] = useState(false)

    const verifyData = (key, value) => {
        switch (key) {
          case 'username': {
            if (!/^[a-zA-Z0-9]{6,}$/.test(value)) {
              setErrorLabel('At least 6 characters.');
              return false;
            }
            return true;
          }
      
          case 'email': {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
              setErrorLabel('Enter a valid email address.');
              return false;
            }
            return true;
          }
      
          case 'password': {
            const minLength = value.length >= 8;
            const hasUpperCase = /[A-Z]/.test(value);
            const hasLowerCase = /[a-z]/.test(value);
            const hasNumber = /[0-9]/.test(value);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

            setShowInputRepeatPassword(value.length > 0 && actualData === 'password')
      
            if (!minLength) {
              setErrorLabel('At least 8 characters');
              return false;
            }
            if (!hasUpperCase) {
              setErrorLabel('At least one uppercase letter.');
              return false;
            }
            if (!hasLowerCase) {
              setErrorLabel('At least one lowercase letter.');
              return false;
            }
            if (!hasNumber) {
              setErrorLabel('At least one number.');
              return false;
            }
            if (!hasSpecialChar) {
              setErrorLabel('At least one special character.');
              return false;
            }
            if (repeatPassword !== value) {
                setErrorLabel('Passwords do not match.');
                return false;
            }

            return true;
          }
      
          default: {
            setErrorLabel('Invalid input.');
            return false;
          }
        }
    };
      
    const handleData = (key, value) => {
        setIsError(false)
        const isRepeatPassword = key === 'repeatPassword'
        let isVerified = isRepeatPassword ? false : verifyData(key, value)

        if (isRepeatPassword) {
            setRepeatPassword(value)
            if (mainData.password.value === value) {
                isVerified = true
            } 
        }

        setData(prev => {
            const newKey = isRepeatPassword ? 'password' : key

            const newMainData = {
                ...prev.main, 
                [newKey]: { 
                    value: isRepeatPassword ? prev.main.password.value : value, 
                    isVerified 
                } 
            }

            return { ...prev, main: newMainData }
        });
    };
    
  return ( 
    <>
        <i
            className={'fa-solid fa-chevron-left ' + (amountVerified === 0 ? 'hide' : '')}
            style={{ transform: amountVerified === 0 && "translateX(-0.625rem)" }}
            onClick={() => amountVerified > 0 && navigateData('prev')}
        />

        <div className={'entries ' + (isError ? 'error' : '')}>
            {/* Email and Password */}
            <div className='entry'>
                <input 
                    type={ actualData === 'password' && !showPassword ? 'password' : 'text'}
                    placeholder=""
                    value={mainData[actualData].value}
                    onChange={e => handleData(actualData, e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && navigateData('next')}
                />
                <label className="floating">{isError ? errorLabel : floatingLabel}</label>
                <i 
                    className={ !(actualData === 'password') ? 'hide' : 'fa-solid fa-eye' + (showPassword ? '-slash' : '') }
                    onClick={() => setShowPassword(!showPassword)}
                />
                <div className="progress" style={{ width: progress && '100%'}} />
            </div>

            {/* Repeat Password */}
            <div 
                className={'entry ' + (actualData === 'password' && showInputRepeatPassword ? '' : 'hide')} 
                style={{ transform: actualData === 'password' && !showInputRepeatPassword && 'translateY(1rem)' }}
            >
                <input 
                    type={showRepeatPassword ? 'text' : 'password'}
                    placeholder=""
                    value={repeatPassword}
                    onChange={e => handleData('repeatPassword', e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && navigateData('next')}
                />
                <label className="floating">Repeat password</label>
                { actualData === 'password' && 
                    <i 
                        className={'fa-solid fa-eye' + (showRepeatPassword ? '-slash' : '')} 
                        onClick={() => setShowRepeatPassword(!showRepeatPassword)} 
                    />
                }
                <div className="progress" style={{ width: progress && '100%' }} />
            </div>
        </div>

        <i 
            className={'fa-solid fa-' + (actualData === 'password' ? 'angles' : 'chevron') + '-right'} 
            onClick={ () => navigateData('next') }
        />
    </>
  )
}

export default MainData
