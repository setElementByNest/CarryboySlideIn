import { useState } from 'react'
import './nav.css'

function Nav() {
    const [nowMobile, setMobile] = useState<boolean>(false)
    return (
        <div className='nav'>
            <div className="nav-content">
                <img src="/slide-in-img/logo.png" alt="" className='nav-content-img' />
                <div className="nav-menu">
                    <a href="/">Overview</a>
                    <a href="">Video Guide</a>
                    <a href="/buildcamper.html">Build your CAMPER</a>
                    <a href="">Gallery</a>
                    <a href="">Contact</a>
                </div>
                <i className="navicon material-icons" onClick={() => { setMobile(true) }}>&#xe5d2;</i>
                <div className="nav-mobile" style={{ transform: nowMobile ? 'translate(0%, 0)' : 'translate(100%, 0)' }}>
                    <div className="nav-mobile-top">
                        <img src="/slide-in-img/logo.png" alt="" className='nav-content-img' />
                        <i className="naviconmobile material-icons" onClick={() => { setMobile(false) }}>&#xe5cd;</i>
                    </div>
                    <hr style={{width: '90%'}}/>
                    <div className="nav-mobile-menu">
                        <a href="/">Overview</a>
                        <a href="">Video Guide</a>
                        <a href="/buildcamper.html">Build your CAMPER</a>
                        <a href="">Gallery</a>
                        <a href="">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
