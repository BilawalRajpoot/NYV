import useCheckMobileScreen from '@/hooks/UseCheckMobileScreen';
import { DropdownIcon } from '@/svg';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import ai_ml from '../../images/navbar/ai_ml.svg';
import appDev from '../../images/navbar/app_dev.svg';
import webDev from '../../images/navbar/web_dev.svg';
import blockchain from '../../images/navbar/blockchain.svg';
import devops from '../../images/navbar/devops.svg';
import slaesforce from '../../images/navbar/salesforce.svg';
import gameDev from '../../images/navbar/game_dev.svg';
import ecommerce from '../../images/navbar/Ecommerce.svg';
import iot from '../../images/navbar/iot.svg';

interface NavDropDownProps {
  dropDownText: string;
  className?: string;
  href?:string
}
const NavDropDown: React.FC<NavDropDownProps> = ({ dropDownText, className, href }) => {
  const isItMobile = useCheckMobileScreen();
  const [open, setOpen] = useState(false);
  const url: string =  href?href:'';



  return (
    <div>
      {!isItMobile ?

        <div className={`flex justify-center mr-[30px] ${className}`}>

          <div onMouseLeave={() => setTimeout(() => {
            setOpen(false)
          }, 200)} className="relative">
            <Link href={''} onMouseOver={() => setTimeout(() => {
              setOpen(true)
            }, 200)} className={`flex items-center p-2 rounded-md  hover:text-purple font-poppins font-medium	 ${styles.NavDropDownBtn}`}>
              <span className='me-1'> {dropDownText}</span>
              <DropdownIcon />
            </Link>

            <ul
              className={`absolute right-[-15rem] p-8  bg-white z-10 grid grid-cols-3 gap-2 w-[100vh] transition font-poppins	 rounded-lg shadow-xl ${open ? "block" : "hidden"
                }`}
            >
              
              <li className="flex w-full  items-center p-6 border-b-2 border-gray-100  gap-3 text-sm hover:text-purple hover:font-semibold font-poppins">
                <Image src={appDev} alt="app development" />
                <Link href={'/app-development'}>App Development</Link>
              </li>
              <li className="flex w-full items-center p-6 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple hover:font-semibold   font-poppins">
                <Image src={webDev} alt="app development" />
                <Link href={'/web-development'}>Web Development</Link>
              </li>
              <li className="flex w-full items-center p-6 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple hover:font-semibold  font-poppins">
                <Image src={ecommerce} alt="app development"  />
                <Link href={'/ecommerce-dev'}>E-Commerce Development</Link>
              </li>
              <li className="flex w-full items-center p-6 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple hover:font-semibold  font-poppins">
                <Image src={blockchain} alt="app development" />
                <Link href={'/blockchain-development'}>Blockchain Development</Link>
              </li>
              <li className="flex w-full items-center p-6 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple hover:font-semibold   font-poppins">
                <Image src={gameDev} alt="app development" />
                <Link href={'/game-development'}>Game Development</Link>
              </li>
              <li className="flex w-full items-center p-6 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple hover:font-semibold  font-poppins">
              <Image src={slaesforce} alt="app development" />
              <Link href={'/salesforce-development'}>SalesForce Development</Link>
              </li>
              <li className="flex w-full items-center p-6 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple hover:font-semibold   font-poppins">
              <Image src={ai_ml} alt="app development" />
              <Link href={'/ai-development'}>Ai & Ml Development</Link>
              </li>
              <li className="flex w-full items-center p-6 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple hover:font-semibold  font-poppins"> 
              <Image src={iot} alt="app development" className='m-0 p-0'/>
              <Link href={'/iot-development'}>IoT Development</Link>
              </li>
              <li className="flex w-full items-center p-6 border-b-2 border-gray-100   gap-3 text-sm hover:text-purple hover:font-semibold  font-poppins ">
              <Image src={devops} alt="app development" />
                <Link href={'/devops'}>DevOps</Link>
              </li>
            </ul>
          </div>

        </div> :
        <div className={`  ${className}`}>
          <div className={`relative ${styles.mobileDropDownmenu}`}>
            <button className={`flex items-center ps-0 rounded-md  font-poppins  text-lg font-medium	 ${styles.NavDropDownBtn} ${open && styles.NavDropDownBtnOpenState}`}
              onClick={() => setOpen(!open)}>
              <span className='me-1'> {dropDownText}</span>
              <DropdownIcon />
            </button>
            {open &&
              <ul
                className={`right-0 w-40 py-2  font-poppins	 `}
              >
                <li className="flex w-full items-center px-3 py-2 text-base font-light font-poppins text-white">
                <Link href={'/devops'}>DevOps</Link>
                </li>
                <li className="flex w-full items-center px-3 py-2 text-base font-light text-white font-poppins">
                <Link href={'/web-development'}>Web Development</Link>
                </li>
                <li className="flex w-full items-center px-3 py-2 text-base font-light text-white font-poppins">
                <Link href={'/ai-development'}>Ai & Ml Development</Link>
                </li>
                <li className="flex w-full items-center px-3 py-2 text-base font-light text-white font-poppins">
                <Link href={'/game-development'}>Game Development</Link>
                </li>
                <li className="flex w-full items-center px-3 py-2 text-base font-light text-white font-poppins">
                <Link href={'/ecommerce-dev'}>E-Commerce Development</Link>
                </li>
                <li className="flex w-full items-center px-3 py-2 text-base font-light text-white font-poppins">
                <Link href={'/salesforce-development'}>SalesForce Development</Link>
                </li>
                <li className="flex w-full items-center px-3 py-2 text-base font-light text-white font-poppins">
                <Link href={'/blockchain-development'}>Blockchain Development</Link>
                </li> 
                <li className="flex w-full items-center px-3 py-2 text-base font-light text-white font-poppins">
                <Link href={'/iot-development'}>IoT Development</Link>
                </li>
              </ul>
            }
          </div>
        </div>


      }

    </div>

  )
}

export default NavDropDown