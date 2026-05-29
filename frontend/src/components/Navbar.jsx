import "../App.css";

export default function Navbar({ userName, onLogout }) {
    return (
        <div className="navbar">
            <div className="nav-left">AMMA.in</div>
            <div className="nav-right">
                {userName ? <span className="welcome-chip">Hi, {userName}</span> : null}
                <button className="signup-btn" onClick={onLogout}>Logout</button>
            </div>
        </div>
    );
}
