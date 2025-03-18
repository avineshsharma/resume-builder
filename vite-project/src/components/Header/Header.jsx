import React from "react";

// import resumeSvg from "../../assets/resume.svg";

import style from './header.module.css'

function Header() {
    return (<>
        <div className={style.container}>
            <p className={style.heading}>A <span>Resume</span>
                Resume that stand out !
            </p>
            <p className={style.heading}>
                Make your own resume. <span>It's free</span>
            </p>
        </div>
        <h1>working</h1>
    </>
    );
}

export default Header;