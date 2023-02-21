import { useState } from "react";
import Modal from "./Modal";

function Players(props) {
    const { players } = props;
    const [openModal, setOpenModal] = useState(false);
    const [currentPlayer, setCurrentPlayer] = useState({});

    const handlePlayer = (data) => {
        setOpenModal(true);
        setCurrentPlayer(data);
    }

    return (
        <>
            <div className="layout">
                <div className="layout-inner">
                    <h2 className="title">PLAYERS</h2>
                    <ul>{players.map((p, index) => (
                        <li key={index} onClick={() => handlePlayer(p)}>
                            {`${p.name}, Team: ${p.team_full_name}, Position: ${p.position ? p.position : '?'}`}
                        </li>
                    ))}</ul>
                </div>
            </div>
            <Modal 
                abbr={currentPlayer.abbr}
                city={currentPlayer.city}
                closeModal={() => setOpenModal(false)}
                conference={currentPlayer.conference}
                openModal={openModal}
                position={currentPlayer.position}
                teamFullName={currentPlayer.team_full_name}
                teamName={currentPlayer.team_name} 
                title={currentPlayer.name} 
            />
        </>
    )
}

export default Players;