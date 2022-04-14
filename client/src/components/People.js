import dots from '../image/dots.png';
import { useState } from 'react';
import ModalPeople from './ModalPeople';
import ModalSetState from './ModalSetState';
import ModalUnsetState from './ModalUnsetState';

const People = ({people, checkUpdatePeoples}) => {
    const [isOpenSetting, setIsOpen] = useState(false);
    const [isOpenSet, setStateSet] = useState(false);
    const [isOpenUnset, setStateUnset] = useState(false);
    const [isUnset, setUnset] = useState(false);

    const toggleIsOpenSetting = (event) => {
        event.stopPropagation()
        
        const {classList} = event.target;

        if (classList.contains('modal') ||
            classList.contains('close-modal') ||
            classList.contains('menu-people') ||
            classList.contains('button-create') ||
            classList.contains('button-delete')) {
            setIsOpen(!isOpenSetting)
        }
    };

    const toggleisOpenState = (event) => {
        const {classList} = event.target;

        if ((event.currentTarget.classList.contains('block-people') ||
            classList.contains('modal') ||
            classList.contains('close-modal') ||
            classList.contains('button-create') ||
            classList.contains('button-delete')) &&
            !event.currentTarget.classList.contains('active-people')) {
                setStateSet(!isOpenSet)
        }
    }

    const toggleisOpenUnstate = (event) => {
        const {classList} = event.target;

        if ((event.currentTarget.classList.contains('block-people') ||
            classList.contains('modal') ||
            classList.contains('close-modal') ||
            classList.contains('button-create') ||
            classList.contains('button-delete')) && (
            event.currentTarget.classList.contains('active-people') || isUnset)) {
                setStateUnset(!isOpenUnset)
                setUnset(!isUnset)
        }
    }

    const toggleState = (event) => {
        toggleisOpenUnstate(event)
        toggleisOpenState(event)
    }

    return (
    <div className="container-people"> 
        <div className={people.active ? 'active-people block-people' : 'block-people' } onClick={toggleState}>
            <div className="flex-container">
                <img onClick={toggleIsOpenSetting} className='menu-people' src={dots} alt="menu"/>
                <p className="name-people">{people.peoplename} <span className="emodji-people">{people.emodji}</span></p>
            </div>
            <p className="price-people">{people.active && people.price !== '0' ? `${people.price} ₽` : ''}</p>
        </div>
        {isOpenSetting && <ModalPeople
        toggleIsOpen={(event) => toggleIsOpenSetting}
        people={people}
        checkUpdatePeoples={checkUpdatePeoples} />}

        {isOpenSet && <ModalSetState
        toggleIsOpen={(event) => toggleisOpenState}
        people={people}
        checkUpdatePeoples={checkUpdatePeoples} />}

        {isOpenUnset && <ModalUnsetState
        toggleIsOpen={(event) => toggleisOpenUnstate}
        people={people}
        checkUpdatePeoples={checkUpdatePeoples} />}
    </div>
    )
}

export default People;