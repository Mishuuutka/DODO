import close from '../image/close.png'
import { useState } from 'react'

const ModalSetState = ({ toggleIsOpen, people, checkUpdatePeoples }) => {
    const [isDoublePrice, setDoublePrice] = useState(false)
    const [priceValue, setPriceValue] = useState('')
    const [priceTwoValue, setPriceTwoValue] = useState('')
    const [typeMoney, setTypeMoney] = useState(true)
    const [typeMoneyTwo, setTypeMoneyTwo] = useState(true)

    const handleClick = async ({ currentTarget }) => {
        if (currentTarget.classList.contains('button-create')) {
            const priceElementValue =  document.querySelector('#input-price-people')?.value
            const priceTwoElementValue =  document.querySelector('#input-price-two-people')?.value

            const money = typeMoney ? 'Карта ' : ' Нал. '
            const moneyTwo = typeMoneyTwo ? 'Карта ' : ' Нал. '
            const priceValue = money + priceElementValue
            const priceTwoValue = moneyTwo + priceTwoElementValue
            const commentValue = document.querySelector('#input-comment-people')?.value || ''

            const body = await JSON.stringify({
                id: people.id,
                peoplename: people.peoplename,
                peoplephone: people.peoplephone,
                emodji: people.emodji,
                price: priceElementValue ? priceValue  : 0,
                price_two: priceTwoElementValue ? priceTwoValue : 0,
                comment: commentValue !== '' ? commentValue  : '',
                doubleprice: isDoublePrice,
                active: true,
            });
    
            await fetch('/api/people/updatePeople', {method: 'PUT', body, headers: {'Content-Type': 'application/json'}})

            await checkUpdatePeoples()
        }
    }

    const numberClick = (event) => {
        setPriceValue(priceValue + event.target.getAttribute('data-number'))
    }
    const numberClickTwo = (event) => {
        setPriceTwoValue(priceTwoValue + event.target.getAttribute('data-number'))
    }

    const typeMoneyClick = (event) => {
        if (event.target.getAttribute('data-money') === 'Б') {
            setTypeMoney(true)
        } else {
            setTypeMoney(false)
        }
    }

    const typeMoneyClickTwo = (event) => {
        if (event.target.getAttribute('data-money') === 'Б') {
            setTypeMoneyTwo(true)
        } else {
            setTypeMoneyTwo(false)
        }
    }

    return (
        <div onClick = {toggleIsOpen(this)} className = "modal">
            <div className = "create-modal">
                <img onClick = {toggleIsOpen(this)}
                className = "close-modal"
                src = { close }
                alt = "close" />
                <p className = 'title-create' > Назначить задолжность </p>
                <span> ФИО </span> <p className = 'p-name'> { people.peoplename } { people.emodji } </p>

                <div className="toggle-double-price">
                    <input type='checkbox' className='ios8-switch' id='checkbox-2' onClick={() => setDoublePrice(!isDoublePrice)} />
                    <label className='label-double-price' htmlFor='checkbox-2'>Два заказа</label>
                </div>

                <span> Цена </span>
                <input id = 'input-price-people'
                className = "inputs-modal"
                type = "text"
                placeholder = '0'
                value = {priceValue} 
                onChange = {e => setPriceValue(e.target.value)} />

                <div className='container-center'>
                    <div className='keyboard'>
                        <div className='keyboard-line'>
                            <div className='keyboard-number' onClick={numberClick} data-number="1">1</div>
                            <div className='keyboard-number' onClick={numberClick} data-number="2">2</div>
                            <div className='keyboard-number' onClick={numberClick} data-number="3">3</div>
                        </div>
                        <div className='keyboard-line'>
                            <div className='keyboard-number' onClick={numberClick} data-number="4">4</div>
                            <div className='keyboard-number' onClick={numberClick} data-number="5">5</div>
                            <div className='keyboard-number' onClick={numberClick} data-number="6">6</div>
                        </div>
                        <div className='keyboard-line'>
                            <div className='keyboard-number' onClick={numberClick} data-number="7">7</div>
                            <div className='keyboard-number' onClick={numberClick} data-number="8">8</div>
                            <div className='keyboard-number' onClick={numberClick} data-number="9">9</div>
                        </div>
                        <div className='keyboard-line'>
                            <div className={typeMoney ? 'keyboard-number' : 'keyboard-number keyboard-active-money'} onClick={typeMoneyClick} data-money="Н">Н</div>
                            <div className='keyboard-number' onClick={numberClick} data-number="0">0</div>
                            <div className={typeMoney ? 'keyboard-number keyboard-active-money' : 'keyboard-number'} onClick={typeMoneyClick} data-money="Б">Б</div>
                        </div>
                    </div>
                </div>

                {isDoublePrice && 
                    <>
                        <span> Цена №2</span>
                        <input id = 'input-price-two-people'
                        className = "inputs-modal"
                        type = "text"
                        placeholder = '0'
                        value = {priceTwoValue} 
                        onChange = {e => setPriceTwoValue(e.target.value)} />

                        <div className='container-center'>
                            <div className='keyboard'>
                                <div className='keyboard-line'>
                                    <div className='keyboard-number' onClick={numberClickTwo} data-number="1">1</div>
                                    <div className='keyboard-number' onClick={numberClickTwo} data-number="2">2</div>
                                    <div className='keyboard-number' onClick={numberClickTwo} data-number="3">3</div>
                                </div>
                                <div className='keyboard-line'>
                                    <div className='keyboard-number' onClick={numberClickTwo} data-number="4">4</div>
                                    <div className='keyboard-number' onClick={numberClickTwo} data-number="5">5</div>
                                    <div className='keyboard-number' onClick={numberClickTwo} data-number="6">6</div>
                                </div>
                                <div className='keyboard-line'>
                                    <div className='keyboard-number' onClick={numberClickTwo} data-number="7">7</div>
                                    <div className='keyboard-number' onClick={numberClickTwo} data-number="8">8</div>
                                    <div className='keyboard-number' onClick={numberClickTwo} data-number="9">9</div>
                                </div>
                                <div className='keyboard-line'>
                                    <div className={typeMoneyTwo ? 'keyboard-number' : 'keyboard-number keyboard-active-money'} onClick={typeMoneyClickTwo} data-money="Н">Н</div>
                                    <div className='keyboard-number' onClick={numberClickTwo} data-number="0">0</div>
                                    <div className={typeMoneyTwo ? 'keyboard-number keyboard-active-money' : 'keyboard-number'} onClick={typeMoneyClickTwo} data-money="Б">Б</div>
                                </div>
                            </div>
                        </div>
                    </>
                }

                <span > Комментарий </span> <textarea id = 'input-comment-people' className = "inputs-modal" />
                <div className = 'width-container'>
                    <div className = 'flex-container'>
                        <button onClick = { handleClick } className = 'header-button button-create'> Готово </button>
                        <button onClick = { handleClick } className = 'header-button button-delete'> Отмена </button> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSetState