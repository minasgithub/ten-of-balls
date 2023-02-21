import { useState } from "react";
import Modal from "./Modal";

function Teams(props) {
    const { teams } = props;
    const [openModal, setOpenModal] = useState(false);
    const [currentTeam, setCurrentTeam] = useState({});

    const handleTeam = (data) => {
        setOpenModal(true);
        setCurrentTeam(data);
    }
    
    return (
        <>
            <div className="layout">
                <div className="layout-inner">
                    <h2 className="title">TEAMS</h2>
                    <ul>{teams.map((t, index) => (
                        <li key={index} onClick={() => handleTeam(t)}>
                            {`${t.full_name} (a.k.a. the ${t.name}, abbr. ${t.abbr}), Conference: ${t.conference}`}
                        </li>
                    ))}</ul>
                </div>
            </div>
            <Modal 
                abbr={currentTeam.abbr}
                city={currentTeam.city}
                closeModal={() => setOpenModal(false)} 
                conference={currentTeam.conference}
                openModal={openModal} 
                teamName={currentTeam.name} 
                title={currentTeam.full_name} 
            />
        </>
    )
}

export default Teams;