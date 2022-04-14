import close from '../image/close.png'

const ModalCreate = ({toggleIsOpen, checkUpdatePeoples}) => {
    const handleClick = async ({target}) => {
        const body = await JSON.stringify({
            peoplename: document.querySelector('#input-name-people').value,
            peoplephone: document.querySelector('#input-phone-people').value,
            emodji: document.querySelector('#input-emodji-people').value,
            active: false,
            price: 0,
            comment: '',
        });

        await fetch('/api/people/createPeople', {method: 'POST', body, headers: {'Content-Type': 'application/json'}})
        
        await checkUpdatePeoples();
        toggleIsOpen(target);
    }

    return (
        <div onClick={toggleIsOpen(this)} className="modal">
            <div className="create-modal">
                <img onClick={toggleIsOpen(this)} className="close-modal" src={close} alt="close" />
                <p className='title-create'>Добавление курьера</p>

                <span>ФИО</span>
                <input id='input-name-people' className="inputs-modal" type="text" />

                <span>Телефон</span>
                <input id='input-phone-people' className="inputs-modal" type="text" />

                <span>Эмоджи</span>
                <input id='input-emodji-people' className="inputs-modal-emodji" type="text" maxLength={3}/>

                <button onClick={handleClick} className='header-button button-create'>Добавить</button>
            </div>
        </div>
    )
}

export default ModalCreate;