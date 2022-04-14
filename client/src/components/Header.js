import ModalCreate from "./ModalCreate";
import { useState } from "react";
import refresh from '../image/refresh.png'

const Header = ({checkUpdatePeoples, setAuth}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = ({target}) => {
        if (target.classList.contains('modal') ||
            target.classList.contains('button-create') ||
            target.classList.contains('close-modal') ||
            target.classList.contains('button-create')) {
            setIsOpen(!isOpen)
        }
    };
    const logout = () => {
        localStorage.setItem('user', JSON.stringify({status: false}));
        setAuth({status: false})
    }

    return (
        <div className="header">
            <button className="header-button button-delete" onClick={logout}>Выйти</button>
            <div className="header-container">
                <button className="refresh-button" onClick={checkUpdatePeoples}><img src={refresh} alt="refresh" /></button>
                <button onClick={toggleIsOpen} className="header-button button-create">Создать</button>
            </div>
            {isOpen && <ModalCreate toggleIsOpen={(event) => toggleIsOpen} checkUpdatePeoples={checkUpdatePeoples} />}
        </div>
    )
}

export default Header