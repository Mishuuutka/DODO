import ModalCreate from "./ModalCreate";
import { useState } from "react";

const Header = ({checkUpdatePeoples}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = ({target}) => {
        if (target.classList.contains('modal') ||
            target.classList.contains('button-create') ||
            target.classList.contains('close-modal') ||
            target.classList.contains('button-create')) {
            setIsOpen(!isOpen)
        }
    };

    return (
        <div className="header">
            <button onClick={toggleIsOpen} className="header-button button-create">Создать</button>
            {isOpen && <ModalCreate toggleIsOpen={(event) => toggleIsOpen} checkUpdatePeoples={checkUpdatePeoples} />}
        </div>
    )
}

export default Header