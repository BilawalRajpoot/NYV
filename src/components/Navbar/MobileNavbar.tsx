import React, { useState } from 'react'
import { Button } from '../Button/Button';
import styles from './Navbar.module.css';
import NavDropDown from './NavDropDown';
import NavItem from './NavItem';
import Link from 'next/link';
const MobileNavbar = () => {
    const [isnavActive, setIsnavActive] = useState<boolean>(false);

    const toggleHumBurger = () => {
        setIsnavActive(!isnavActive)
    }
    return (
        <div>
            <button id={styles.navIcon} className={isnavActive ? styles.open : ''} onClick={toggleHumBurger}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            {isnavActive &&
                <div className={styles.mobileMenu}>
                    <ul className='mt-[72px] px-[35px] w-full '>
                        <div>
                            <div onClick={toggleHumBurger}>
                                <NavItem text="Home" className=' text-white 	 text-lg 	  inline-block	 w-full  border-b	py-9' href={'/'} />
                            </div>
                            <div onClick={toggleHumBurger}>
                                <NavItem text="About" className='text-white text-lg 		  inline-block w-full  border-b py-9	' href={'/about'} /></div>
                            <NavDropDown onClose={toggleHumBurger} dropDownText='Services' className='text-white text-lg 		  inline-block 	w-full border-b py-9' href='/services' />
                            <div onClick={toggleHumBurger}>
                                <NavItem text="Our Team" className='text-white text-lg 		 inline-block w-full	 border-b py-9' href={'our-team'} /></div>
                            <div onClick={toggleHumBurger}>
                                <NavItem text="Careers" className='text-white text-lg 	  inline-block w-full  border-b py-9	' href={'/careers'} /></div>
                                <div onClick={toggleHumBurger}>
                                <NavItem text="Portfolio" className='text-white text-lg 	  inline-block w-full  border-b py-9	' href={'/#portfolio'} /></div>
                                <div onClick={toggleHumBurger}>
                                <NavItem text="Complaints" href={'/suggestion-box'} className='text-white text-lg 	  inline-block w-full  border-b py-9	' /></div>
                           

                        </div>
                        <Button className="bg-primary-dark text-white text-base font-poppins  mb-20 mt-20	 px-[14px] py-[10px] font-bold	capitalize rounded-lg">
                            <span onClick={toggleHumBurger}>
                                <Link href={'/contact'} >
                                    Get in Touch
                                </Link>
                            </span>
                        </Button>
                    </ul>
                </div>
            }
        </div>
    )
}

export default MobileNavbar