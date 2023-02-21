import { useEffect, useState } from "react";

function Modal(props) {
    const { abbr, city, closeModal, conference, openModal, position, teamFullName, teamName, title } = props;
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(openModal);
    }, [openModal])

    const handleCloseModal = () => {
        setIsOpen(false);
        closeModal();
    }


    return (
        <div className={`modal${isOpen ? '-open' : '-closed'}`}>
            <div className="modal-btn-div">
                <button onClick={handleCloseModal} className="modal-btn">x</button>
            </div>
            <div className="layout-inner">
                <h2 className="modal-title">{title}</h2>
                {teamFullName && <p>Team: {teamFullName}</p>}
                <p>A.k.a. the {teamName}</p>
                {position && <p>Position: {position}</p>}
                <p>City: {city}</p>
                <p>Abbreviation: {abbr}</p>
                <p>Conference: {conference}</p>
            </div>
        </div>
    )
}

export default Modal;