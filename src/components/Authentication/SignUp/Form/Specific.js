import React, { useState, useRef } from 'react';
import { countries, birthdayDate, phoneData } from '../data';

function SpecificData(props) {
    const { specificData, setData, sendData } = props

    const [ filteredCountries, setFilteredCountries ] = useState(countries)
    const [ filteredPhoneCodes, setFilteredPhoneCodes ] = useState(phoneData.map(item => item.code))
    const [ phone, setPhone ] = useState({
        code: '',
        number: ''
    })

    const getDate = ({key, length=31 }) => {
        if (key === 'day') {
            return Array.from({ length: length }, (_, i) => (i + 1).toString())
        } else {
            return birthdayDate[key].map(key => key.name)
        }
    }
    const [ filteredBirthdayDate, setFilteredBirthdayDate ] = useState({
        day: getDate({key: 'day'}),
        month: getDate({key: 'month'}),
        year: getDate({key: 'year'})
    })    
    
    // Break down Birthday data values
    const [ birthday, setBirthday ] = useState({
        day: '',
        month: '',
        year: '',
    })

    const [dropdown, setDropdown] = useState(null);
    const dropdownRefs = useRef({})
    // Assign ref dropdowns just
    const addDropdownRef = e => {        
        const dataDropdowns = ['day', 'month', 'year', 'country', 'code']
        if (e && dataDropdowns.includes(e.name))
            dropdownRefs.current[e.name] = e
    }
    const renderDropdown = (options, onSelect) =>
        <ul>
            { options.map((option, index) => 
                <li key={index} onClick={() => { onSelect(option); setDropdown(null) } }> {option} </li> 
            )}
        </ul> 

    const renderInput = (key, value, placeholder) =>
        <input 
            name={key}
            type="text" 
            value={value} 
            placeholder={placeholder}
            onChange={e => handleData(key, e.target.value)} 
            onClick={() => setDropdown(key)}
            data-active={specificData.birthday.isVerified}
            ref={addDropdownRef}
        />    
    
    const renderPhone = key =>
        <>
            <div className='code'>
                { renderInput('code', phone.code, '') }
                { dropdown === 'code' && renderDropdown(filteredPhoneCodes, value => handleData('code', value)) }
            </div>
            <div className='number'>
                { renderInput('number', phone.number, '') }
                <label className='floating'>{formatLabel(key)}</label>
            </div>
        </>

    const renderBirthday = () => 
        Object.entries(birthday).map(([key, value], index) => 
            <div key={index} onMouseLeave={() => setDropdown(null)}>
                { renderInput(key, value, key) }

                { dropdown === key && renderDropdown(filteredBirthdayDate[key], value => handleData(key, value)) }
            </div>
        )

    const renderGender = (key, value) =>          
        <>
            <label onClick={() => handleData(key, 'male')}>
                <p>Male</p>
                <input type="radio" name="gender" checked={value === 'male'} readOnly />
            </label>
            <label onClick={() => handleData(key, 'female')}>
                <p>Female</p>
                <input type="radio" name="gender" checked={value === 'female'} readOnly />
            </label>
            <div className="slider" />
        </>

    const [ amountVerified, setAmountVerified ] = useState(0)
    const [ isAllVerified, setIsAllVerified ] = useState(false)

    const verifyValue = (key, value, isBirthday, isPhone) => {
        const newValue = value.toLowerCase()
        if (dropdownRefs.current[key]) dropdownRefs.current[key].focus()
        if (key === 'country') {
            const validCountries = countries.filter(country => country.startsWith(newValue));
            if (!validCountries.length) return specificData.country.value
            else setFilteredCountries(validCountries)
        }

        if (isPhone) {
            let formattedValue = { 
                code: key === 'code' ?  newValue : phone.code,
                number: key === 'number' ? newValue : phone.number
            }
            
            const phoneItem = phoneData.find(item => item.code === (key === 'code' ? newValue : phone.code))
            console.log(phoneItem);
            
            

            let isValidPhone = false
            if (key === 'code') {                
                const validPhones = phoneData.map(item => item.code).filter(code => code.startsWith(formattedValue.code));
                    
                if (validPhones.length) {
                    if (phoneItem && (phoneItem.numberLength < phone.number.length)) {
                        formattedValue.number = phone.number.slice(0, phoneItem.numberLength)
                    }
                    setFilteredPhoneCodes(validPhones)
                    isValidPhone = true
                }
            } else if (key === 'number') {
                const areDigits = /^\d+$/.test(formattedValue.number) || !newValue.length
                const validLength = !phoneItem || (phoneItem.numberLength >= formattedValue.number.length)
                
                isValidPhone = areDigits && validLength
            }            

            if (isValidPhone) {
                setPhone(formattedValue)
                return formattedValue
            } else {
                return {code: phone.code, number: phone.number}
            }
        }

        if (isBirthday) {
            const monthItem = birthdayDate['month'][filteredBirthdayDate.month]
            const newDate = getDate({key, length: monthItem ? monthItem.days : 31})
            const validDate = newDate.filter(date => date.startsWith(newValue))

            if (validDate.length) {
                setBirthday(prev => ({...prev, [key]: newValue}))
                setFilteredBirthdayDate(prev => { 
                    let newBirthdayDate = { ...prev, [key]: validDate }

                    if (['month', 'year'].includes(key)) {
                        const dateItem = birthdayDate[key].find(key => key.name === newValue)

                        if (dateItem) {
                            // If change the month changes the days of that month
                            if (key === 'month') {
                                const actualDays = prev.day.length - 1
                                if (actualDays !== dateItem.days) {
                                    newBirthdayDate.day = getDate({key: 'day', length: dateItem.days})
                                }
                            } 
                            // If change the year verify is a leap year
                            if (key === 'year' && (prev.month[0] === 'february')) {
                                newBirthdayDate.day = getDate({key: 'day', length: dateItem.isLeap ? 29 : 28})
                            }
                        }
                    }
                    return newBirthdayDate
                })
            }
            else return birthday[key]
        }

        return newValue
    }
    
    const verifyData = (key, value, isBirthday, isPhone) => {        
        if (value) {
            const newValue = isPhone ? value[key].toLowerCase() : value.toLowerCase()
            if (['firstName', 'lastName', 'gender'].includes(key)) return true
            if (key === 'country' && countries.includes(newValue)) return true;

            if (isBirthday) {
                const { day, month, year } = { ...birthday, [key]: newValue };

                const monthDays = birthdayDate['month'][filteredBirthdayDate.month]
                const days = getDate({key: 'day', length: monthDays ? monthDays.days : 31})
                const months = getDate({key: 'month'})
                const years = getDate({key: 'year'})
                
                if (days.includes(day) &&  months.includes(month) && years.includes(year)) return true;
            }
            if (isPhone) {                
                const { code, number } = { ...phone, [key]: newValue }                
                const numberLengthItem = phoneData.find(item => item.code === code) 

                if (numberLengthItem && number && (numberLengthItem.numberLength === number.length)) return true
            }
        }
        return false
    };

    const handleData = (key, value) => {     
        const isBirthday = ['day', 'month', 'year'].includes(key)
        const isPhone = ['code', 'number'].includes(key)

        const newValue = verifyValue(key, value, isBirthday, isPhone)                
        const isVerified = verifyData(key, newValue, isBirthday, isPhone)
        
        setData(prev => {
            const newKey = isBirthday ? 'birthday' : isPhone ? 'phone' : key
            let formattedValue = newValue
            if (isBirthday) {
                const { day, month, year } = newValue
                const numberMonth = filteredBirthdayDate.month.indexOf(month)
                formattedValue = `${numberMonth}/${day}/${year}`
            } else if (isPhone) {
                const { code, number } = newValue
                formattedValue = code + number
            }

            const newSpecificData = {
                ...prev.specific,
                [newKey]: { value: formattedValue, isVerified }
            }           

            const amountVerified = Object.values(newSpecificData).filter(item => item.isVerified).length

            setAmountVerified(amountVerified)
            setIsAllVerified(Object.keys(specificData).length === amountVerified)
            
            return { ...prev, specific: newSpecificData }
        });
    }

    const formatLabel = label => label.replace(/([a-z])([A-Z])/g, '$1 $2')

    return (
        <>
            <div className='entries'>
                { Object.entries(specificData).map(([ key, value ], index) => (
                    <div key={index} className={`entry ${key}`} onMouseLeave={() => setDropdown(null)}>
                        { 
                            key === 'birthday' ? renderBirthday() : 
                            key === 'gender' ? renderGender(key, value.value) : 
                            
                            <>
                                { 
                                    key === 'phone' ? renderPhone(key) : 

                                    <>
                                        { renderInput(key, value.value, '') }
                                        <label className='floating'>{formatLabel(key)}</label>
                                    </> 
                                }
                                <div className='progress' style={{ width: value.isVerified && '100%' }} />
                                { key === 'country' && dropdown === 'country' &&
                                    renderDropdown(filteredCountries, value => handleData(key, value)) 
                                }
                            </>
                        }
                    </div>
                ))}
            </div>

            <div className='counter'>
                <p className={isAllVerified ? 'hide' : ''}>{amountVerified}/6</p> 
                <i className={'fa-solid fa-caret-right ' + (!isAllVerified ? 'hide' : '')} onClick={sendData} />
            </div>
        </>
    );
}

export default SpecificData;
