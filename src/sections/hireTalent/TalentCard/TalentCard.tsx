import { Button } from "@/components/Button/Button";
import { Card } from "@/components/card/Card";
import GeneralHeading from "@/components/Heading/GeneralHeading";
import SubHeading from "@/components/Heading/SubHeading";
import Text from "@/components/Text/Text";
import Image from "next/image";
import React from "react";
import { TALENT_DATA } from "./TalentCardData";

const TalentCard = () => {
    return (
        <div className="py-[100px]">
            <div className="container">
            <SubHeading className={'text-center mb-[8px]'} subHeading={'Top Talent'} />
            <GeneralHeading className={'text-center max-w-[900px] mx-auto mb-[8px]'} heading={'Leverage The Expertise of Available Developers'} />
            <Text text={'Our developers utilise best-in-class tools, state-of-the-art technologies and updated approaches to uplift your business.'} className="text-grey text-center mb-[60px]"/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]  mt-[60px]">
                    {TALENT_DATA.map((data, index) => {
                        return (
                            <Card className={""} key={index}>
                                <div className={`mb-[32px]`}>
                                    <Image
                                        src={data.image}
                                        alt={data.name}
                                        height={200}
                                        width={200}
                                        className="mx-auto"
                                    />
                                </div>
                                <h5 className="mb-[12px] font-poppins text-2xl text-center text-primary-dark  font-semibold">
                                    {data.name}
                                </h5>
                                <p className="text-purple text-center font-poppins text-lg font-normal mb-[12px]">
                                    {data.position}
                                </p>
                                <p className="text-grey font-poppins text-center text-lg font-normal mb-[32px]">
                                    {data.description}
                                </p>
                                <Button className="bg-primary text-white font-poppins text-base items-center justify-center hover:shadow-custom-button hover:translate-y-[-3px] w-full		flex gap-3 py-[16px] px-[24px] font-bold	capitalize rounded-lg">
                                    Hire Now
                                </Button>
                            </Card>
                        );
                    })}
                </div>
                <div className="flex justify-center mt-[60px]">
                <Button className="bg-white  text-purple border border-purple font-poppins text-base items-center justify-center hover:shadow-custom-button hover:translate-y-[-3px] flex  py-[16px] px-[29px] font-bold	capitalize rounded-lg">
                        View More
                    </Button>
                </div>
        
            </div>
        </div>
    );
};

export default TalentCard;
