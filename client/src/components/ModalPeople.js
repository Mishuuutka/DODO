import close from '../image/close.png'
import { useState } from 'react';

const ModalPeople = ({people, toggleIsOpen, checkUpdatePeoples}) => {
    const handleClick = async ({target}) => {
        const body = await JSON.stringify({
            id: people.id,
            peoplename: document.querySelector('#input-name-people').value,
            peoplephone: document.querySelector('#input-phone-people').value,
            emodji: document.querySelector('#input-emodji-people').value,
            price: document.querySelector('#input-price-people')?.value || 0,
            comment: document.querySelector('#input-comment-people')?.value || '',
            active: people.active,
        });

        await fetch('/api/people/updatePeople', {method: 'PUT', body, headers: {'Content-Type': 'application/json'}})

        await checkUpdatePeoples()
        toggleIsOpen(target)
    }

    const handleClickDelete = async ({target}) => {
        await fetch('/api/people/deletePeople/' + people.id, {method: 'DELETE', headers: {'Content-Type': 'application/json'}})

        await checkUpdatePeoples()
        toggleIsOpen(target)
    }

    const [peopleName, changeName] = useState(people.peoplename)
    const [peoplePhone, changePhone] = useState(people.peoplephone)
    const [peopleEmodji, changeEmodji] = useState(people.emodji)
    const [peoplePrice, changePrice] = useState(people.price)
    const [peopleComment, changeComment] = useState(people.comment)

    return (
        <div onClick={toggleIsOpen(this)} className="modal">
            <div className="create-modal create-people">
                <img onClick={toggleIsOpen(this)} className="close-modal" src={close} alt="close" />
                <p className='title-create'>Изменить данные</p>

                <span>ФИО</span>
                <input id='input-name-people' className="inputs-modal" type="text"  value={peopleName} onChange={e => changeName(e.target.value)}/>

                <span>Телефон</span>
                <input id='input-phone-people' className="inputs-modal" type="text" value={peoplePhone} onChange={e => changePhone(e.target.value)}/>

                <span>Эмоджи</span>
                <input id='input-emodji-people' className="inputs-modal-emodji" type="text" maxLength={3} value={peopleEmodji} onChange={e => changeEmodji(e.target.value)}/>

                {people.active &&
                    <>
                        <span>Цена</span>
                        <input id='input-price-people' className="inputs-modal" type="text" value={peoplePrice} onChange={e => changePrice(e.target.value)}/>

                        <span>Комментарий</span>
                        <textarea id='input-comment-people' className="inputs-modal" value={peopleComment} onChange={e => changeComment(e.target.value)}/>
                    </>
                }
                
                <div className='width-container'>
                    <div className='flex-container'>
                        <button onClick={handleClick} className='header-button button-create'>Изменить</button>
                        <button onClick={handleClickDelete} className='header-button button-delete'>Удалить</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ModalPeople