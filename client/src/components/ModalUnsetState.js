import close from '../image/close.png'

const ModalUnsetState = ({toggleIsOpen, people, checkUpdatePeoples}) => {
    const handleClick = async ({currentTarget}) => {
        if (currentTarget.classList.contains('button-create')) {
            const body = await JSON.stringify({
                id: people.id,
                peoplename: people.peoplename,
                peoplephone: people.peoplephone,
                emodji: people.emodji,
                price: document.querySelector('#input-price-people')?.value || 0,
                comment: document.querySelector('#input-comment-people')?.value || '',
                active: false,
            });
    
            await fetch('/api/people/updatePeople', {method: 'PUT', body, headers: {'Content-Type': 'application/json'}})

            await checkUpdatePeoples()
        }
    }

    return (
        <div onClick={toggleIsOpen(this)} className="modal">
            <div className="create-modal">
                <img onClick={toggleIsOpen(this)} className="close-modal" src={close} alt="close" />
                <p className='title-create'>Сбрость задолжность</p>

                <span>ФИО</span>
                <p className='p-name'>{people.peoplename} {people.emodji}</p>

                <span>Цена</span>
                <p className='p-name'>{people.price !== 0 ? people.price  : '<Пусто>'}</p>

                <span>Комментарий</span>
                <p className='p-name p-commnet'>{people.comment !== '' ? people.comment : '<Пусто>'}</p>

                <div className='width-container'>
                    <div className='flex-container'>
                        <button onClick={handleClick} className='header-button button-create'>Готово</button>
                        <button onClick={handleClick} className='header-button button-delete'>Отмена</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalUnsetState