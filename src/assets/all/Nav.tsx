import './nav.css'

function Nav() {
    return (
        <div className='nav'>
            <div className="nav-content">
                <img src="/slide-in-img/logo.png" alt="" className='nav-content-img'/>
                <div className="nav-menu">
                    <a href="">Overview</a>
                    <a href="">Vide Guide</a>
                    <a href="">Build your CAMPER</a>
                    <a href="">Gallery</a>
                    <a href="">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Nav
