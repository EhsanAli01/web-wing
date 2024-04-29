import logo from '../assets/logo.svg'
import facebook from '../assets/facebook.png'
import { useNavigate } from 'react-router-dom'
import badge from '../assets/badge.png'
import { Link } from 'react-router-dom'

const Navbar = () => {


    const tog_menu = () => {
        const menu = document.getElementById('dp-drop-menu');
        menu.classList.toggle('d-none');
    }


    return (
        <>
            <nav id='navbar' className="flex j-spc-between align-center">
                <div id="logo" className="font-h flex justify-center align-center">
                    <img src={logo} width={'100%'} alt="WebWing" />
                </div>
                <div id='user-data' className='flex j-spc-between align-center'>
                    <div id='user-dp' className='u-dp' onClick={tog_menu}>
                        <img src={localStorage.getItem("userDp_url")} alt="" />
                    </div>
                    <div className='flex f-col'>
                        <p className='font-xl'>{localStorage.getItem('userName')}</p>
                        <span>{localStorage.getItem('userEmail')}</span>
                    </div>
                </div>
            </nav>
            <div id="secondarynav" className="flex justify-center align-center font-xl">
                <div className='flex justify-center align-center'>
                    <span className='font-xl'>Inspired By</span>
                    <img src={facebook} width={'100px'} alt="facebook" />
                </div>
            </div>
            <section id='dp-drop-menu' className='drop-menu d-none'>
                <div id='d-user-dp' className='u-dp'>
                    <img src={localStorage.getItem("userDp_url")} alt="" />
                </div>
                <p>{localStorage.getItem('userEmail')}</p>
                <Link to="/main/profile">Visit Your Profile</Link>
                <div className='divider'></div>
                <div id='user-name'>
                    <span>{localStorage.getItem('userName')}</span>
                    <img src={badge} alt="" />
                </div>
                <p style={{ textAlign: 'center' }}>{localStorage.getItem('userDescription')}</p>
                <button className='btn btn-bg' onClick={() => { localStorage.clear(), location.reload() }}>Logout</button>
            </section>
        </>
    )
}

export default Navbar