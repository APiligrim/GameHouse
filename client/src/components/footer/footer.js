import React from 'react'
import AppLogo from "../../images/gamehouse_logo.svg"
import TeamLogo from "../../images/4baozi_logo.svg"
import "./styles/footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div>
                <img className="appLogo logoImg" src={AppLogo}/>
            </div>
            <hr></hr>
            <div>
                <img className="teamLogo logoImg" src={TeamLogo}/>
            </div>
            <div className="copyright">
                &copy; 2021 - Powered by Four Baozi
            </div>
        </div>
    )
}
