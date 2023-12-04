import GeneralHeading from '@/components/Heading/GeneralHeading';
import SubHeading from '@/components/Heading/SubHeading';
import React from 'react'
import styles from './Execution.module.css';
import executionImage from '../../../../src/images/about/execution.png'
import Image from 'next/image';
const heading = "We’re­ a­ full­ service­ creative­ and­ digital­ agency,­ working­ globally­ with­ largest­brands."
export const Execution = () => {
    return (
        <div className={styles.executuonWrapper}>
            <div className='container'>
                <SubHeading className={'text-left mb-[8px]'} subHeading={'From ideation to execution'} />
                <GeneralHeading className={'text-left max-w-[900px] leading-[64px] mb-[32px]'} heading={heading} />
                <div>
                    <Image src={executionImage} alt="execution image" />
                </div>
            </div>

        </div>
    )
}
