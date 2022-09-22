import React, { useState } from 'react'
import {
    AiOutlineUser,
    AiOutlineVideoCamera,
    AiOutlineIdcard,
    AiOutlineAppstore
} from "react-icons/ai";
import { FaRunning } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import './Navbar.css';

const Navbar = () => {

    const toggleBtn = (e) => {
        e.preventDefault();
        (toggle === true) ? setToggle(false) : setToggle(true)
        if (toggle === true) {
            document.getElementById('ham_nav').style.height = '240px'
        } else {
            document.getElementById('ham_nav').style.height = '0px'
        }
    }

    const [toggle, setToggle] = useState(true)

    return (
        <>
            <div className="nav bg-light py-2 d-flex justify-content-around align-items-center fixed-top" style={{ fontSize: '17px' }}>
                <div className="logo bg-dark d-flex justify-content-around align-items-center" style={{ width: '45px', height: '45px', borderRadius: '50%' }}>
                    <a className='nav-link text-light' href="/">HF</a>
                </div>
                <div className="nav-items">
                    <ul className='navbar-nav  d-flex flex-row'>
                        <li className='nav-item px-4 my-1 d-flex flex-column justify-content-center align-items-center'>
                            <AiOutlineVideoCamera style={{ fontSize: '20px' }} />
                            <a className='nav-link active py-1' href="#">LIVE</a>
                        </li>
                        <li className='nav-item px-4 my-1 d-flex flex-column justify-content-around align-items-center'>
                            <AiOutlineIdcard style={{ fontSize: '20px' }} />
                            <a className='nav-link active py-1' href="#">MEMBERSHIP</a>
                        </li>
                        <li className='nav-item px-4 my-1 d-flex flex-column justify-content-around align-items-center'>
                            <FaRunning style={{ fontSize: '20px' }} />
                            <a className='nav-link active py-1' href="#">PLANS</a>
                        </li>
                        <li className='nav-item px-4 my-1 d-flex flex-column justify-content-around align-items-center'>
                            <AiOutlineAppstore style={{ fontSize: '20px' }} />
                            <a className='nav-link active py-1' href="#">MORE</a>
                        </li>
                    </ul>
                </div>
                <div className="admin-login ">
                    <AiOutlineUser style={{ fontSize: '20px' }} />
                    <a className='nav-link text-dark px-1' href="/login">Login</a>
                </div>
                {(toggle === false) ?
                    <CgClose
                        id='ham-close'
                        className='py-1 px-1 rounded'
                        onClick={toggleBtn}
                    /> :
                    <GiHamburgerMenu
                        id='hamburger'
                        className='py-1 px-1 rounded'
                        type='button'
                        onClick={toggleBtn} />}


                <div className="ham_item bg-light" id='ham_nav'>
                    <ul className=' navbar-nav d-flex flex-column'>
                        <li className='nav-item my-2 d-flex flex-row justify-content-center align-items-center'>
                            <AiOutlineVideoCamera style={{ fontSize: '20px' }} />
                            <a className='nav-link active py-2 px-1' href="#">LIVE</a>
                        </li>
                        <li className='nav-item my-2 d-flex flex-row justify-content-center align-items-center'>
                            <AiOutlineIdcard style={{ fontSize: '20px' }} />
                            <a className='nav-link active py-2 px-1' href="#">MEMBERSHIP</a>
                        </li>
                        <li className='nav-item my-2 d-flex flex-row justify-content-center align-items-center'>
                            <FaRunning style={{ fontSize: '20px' }} />
                            <a className='nav-link active py-2 px-1' href="#">PLANS</a>
                        </li>
                        <li className='nav-item my-2 d-flex flex-row justify-content-center align-items-center'>
                            <AiOutlineAppstore style={{ fontSize: '20px' }} />
                            <a className='nav-link active py-2 px-1' href="#">MORE</a>
                        </li>
                    </ul>
                    <div className="admin-login d-flex align-items-center">
                        <AiOutlineUser style={{ fontSize: '20px' }} />
                        <a className='nav-link text-dark px-1' href="#">Login</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar