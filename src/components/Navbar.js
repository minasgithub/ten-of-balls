function Navbar(props) {
    const { handleSpinButtonClick, logo, setDisplayFilter } = props;

    const handleSpinClick = () => {
        setDisplayFilter('spin');
        handleSpinButtonClick();
      };

    return (
        <div className="nav">
            <div onClick={() => setDisplayFilter("home")} className="nav-left">
                <img className="logo" src={logo} />
                <h1 className="title">TEN OF BALLS</h1>
            </div>
            <div className="nav-right">
                <button onClick={() => setDisplayFilter("players")} className="nav-link">Players</button>
                <button onClick={() => setDisplayFilter("teams")} className="nav-link">Teams</button>
                <button onClick={handleSpinClick} className="nav-link">Spin the Ball</button>
            </div>
        </div>
    )
}

export default Navbar;