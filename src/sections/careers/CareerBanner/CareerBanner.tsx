import { Button } from "@/components/Button/Button";
import GeneralHeading from "@/components/Heading/GeneralHeading";
import { ChevronDown } from "@/svg";
import React from "react";
import styles from "./CareerBanner.module.css";

const CareerBanner = () => {
    return (
        <div className={styles.careerBannerWrapper}>
            <div className="container">
                <GeneralHeading
                    className={"text-white text-center pt-[90px] mb-[24px]"}
                    heading={"Grow With Us"}
                />
                <div className="max-w-[1000px] mx-auto">
                <div className="grid grid-cols-4 gap-[16px] pb-[76px]">
                    <div className="col-span-1 relative">
                        <select
                            name="Job Location"
                            id="cars"
                            form="carform"
                            className={`${styles.inputField} rounded-lg w-full text-half-whitesh font-light	font-poppins`}
                        >
                            <option value="volvo">Lahore</option>
                            <option value="saab">Uk</option>
                            <option value="opel">Us</option>
                        </select>
                        <div className="absolute top-[19px] right-[10px]">
                        <ChevronDown/>
                        </div>
                       
                    </div>

                    <div className="col-span-1 relative">
                        <select
                            name="Experience"
                            id="cars"
                            form="carform"
                            className={`${styles.inputField} rounded-lg w-full text-half-whitesh font-light	font-poppins`}
                        >
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                         
                        </select>
                        <div className="absolute top-[19px] right-[10px]">
                        <ChevronDown/>
                        </div>
                    </div>
                    <div className="col-span-2">
                  <div className="w-full">
                  <input
                            name={"seearch"}
                            type={"text"}
                            className={`${styles.inputField} rounded-s-lg w-[70%] font-poppins`}
                            placeholder={"Search  Job"}
                            required
                        />
                        <Button
                            className={
                                "bg-primary-dark text-white px-[25px] py-[15px] rounded-e-lg w-[30%]"
                            }
                        >
                            Search
                        </Button>
                  </div>
                       
                    </div>
                </div>
                </div>
       
            </div>
        </div>
    );
};

export default CareerBanner;
