import React, { useState } from 'react'
import { Button } from '../Button/Button';
import styles from './Navbar.module.css';
import NavDropDown from './NavDropDown';
import NavItem from './NavItem';
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
                             <NavItem  text="Home" className=' text-white 	 text-lg 	  inline-block	 w-full  border-b	py-9' href={'/'} />
                            </div>
                              <div onClick={toggleHumBurger}>
                            <NavItem  text="About" className='text-white text-lg 		  inline-block w-full  border-b py-9	' href={'/about'} /></div>
                            <NavDropDown onClose={toggleHumBurger} dropDownText='Services' className='text-white text-lg 		  inline-block 	w-full border-b py-9' href='/services'/>
                              <div onClick={toggleHumBurger}>
                            <NavItem text="Hire Talent" className='text-white text-lg 		 inline-block w-full	 border-b py-9' href={'hire-talent'} /></div>
                              <div onClick={toggleHumBurger}>
                            <NavItem text="Careers" className='text-white text-lg 	  inline-block w-full  border-b py-9	' href={'/careers'} /></div>
                            
                        </div>
                        <Button className="bg-primary-dark text-white text-base font-poppins  mt-20	 px-[14px] py-[10px] font-bold	capitalize rounded-lg">
                            Get in Touch
                        </Button>
                    </ul>
                </div>
            }
        </div>
    )
}

export default MobileNavbar