import GeneralHeading from '@/components/Heading/GeneralHeading';
import React from 'react'
import styles from './Theory.module.css';
import theoryImage from '../../../../src/images/theoryImage.svg';
import Image from 'next/image';
const Theory = () => {
    return (
        <div className={styles.theoryWrapper}>
            <div className='container'>
                <GeneralHeading className={'text-left text-white'} heading={'Our Theory'} />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-[16px]'>
                    <div className='text-white'>
                        <p className='font-poppins text-lg font-normal leading-8 mb-[16px]'>NYV Digital Solutions is an innovative technology company that specializes in a wide range of services, including software development, app development, UI/UX design, and product management support, among others.</p>
                        <p className='font-poppins text-lg font-normal leading-8 mb-[16px]'>Our name reflects our commitment to assisting clients in the challenging journey of expanding their software solutions, all while striking the right balance between quality, speed, and cost-effectiveness. We achieve this through the following key elements:</p>
                        <ul className='mb-[16px]'>
                            <li className='font-poppins text-lg font-normal leading-8'><strong>1.</strong> A robust network of highly specialized talent.</li>
                            <li className='font-poppins text-lg font-normal leading-8'><strong>2.</strong> Our team of dedicated managers based in the United States maintain direct communication with our overseas QA and development teams. This ensures project alignment and collaboration with both the client and end-users. </li>
                        </ul>
                        <p className='font-poppins text-lg font-normal leading-8'> Our founders, who bring extensive experience from top-tier tech companies, have instilled best practices within our organization. This has resulted in a proven track record of consistently delivering projects on time and achieving peak performance, helping our clients reach their goals successfully.</p>
                    </div>
                    <div className='mx-auto'>
                        <Image src={theoryImage} alt={'Overseas Development'}  quality={100}/>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Theory