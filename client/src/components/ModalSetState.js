import close from '../image/close.png'

const ModalSetState = ({ toggleIsOpen, people, checkUpdatePeoples }) => {
    const handleClick = async ({ currentTarget }) => {
        if (currentTarget.classList.contains('button-create')) {
            const priceValue = document.querySelector('#input-price-people')?.value || 0
            const commentValue = document.querySelector('#input-comment-people')?.value || ''

            const body = await JSON.stringify({
                id: people.id,
                peoplename: people.peoplename,
                peoplephone: people.peoplephone,
                emodji: people.emodji,
                price: priceValue !== 0 ? priceValue  : 0,
                comment: commentValue !== '' ? commentValue  : '',
                active: true,
            });
    
            await fetch('/api/people/updatePeople', {method: 'PUT', body, headers: {'Content-Type': 'application/json'}})

            await checkUpdatePeoples()
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
                <span> Цена </span>
                <input id = 'input-price-people'
                className = "inputs-modal"
                type = "text"
                placeholder = '0' />
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