import React from 'react'
import Image from '../../../node_modules/next/image'
import { Button } from '../Button/Button'
import NavItem from './NavItem'
import Logo from '../../../src/images/NYV-Logo.png';
import NavDropDown from './NavDropDown';
import useCheckMobileScreen from '@/hooks/UseCheckMobileScreen';
import MobileNavbar from './MobileNavbar';
import Link from 'next/link';
const Navbar = () => {
  const isItMobile = useCheckMobileScreen();
  return (
    <div className='container '>
      <div className='flex justify-between items-center h-[88px]' >
        <div className='cursor-pointer'>
          <Link href={'/'}>
          <Image src={Logo}
            height={200}
            width={200}
            alt="Picture of the author" />
            </Link>
        </div>
        {!isItMobile ? <ul className='flex items-center '>
          <NavItem text="Home" href={'/'} className="hover:text-purple transition" />
          <NavItem text="About" href={'/about'} className="hover:text-purple transition" />
          <NavDropDown dropDownText='Services' className="transition" href='/services' />
          <NavItem text="Our Team" href={'/our-team'} className="hover:text-purple transition" />
          {/* <NavItem text="Work" href={'/about'} className="hover:text-purple transition" /> */}
          <NavItem text="Careers" href={'/careers'} className="hover:text-purple transition" />
          {/* <NavDropDown dropDownText='Careers' className="transition" href='/careers' /> */}
          <Button className="bg-primary text-white font-poppins text-xs hover:shadow-custom-button hover:translate-y-[-3px]	 px-[18px] py-[14px] font-bold	capitalize rounded-lg">
            <Link href={'/contact'}>  Get in Touch </Link>
          </Button>
        </ul> :
          <MobileNavbar />}

      </div>

    </div>
  )

}

export default Navbar