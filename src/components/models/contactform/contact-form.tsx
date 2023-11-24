import * as yup from "yup";


export class ContactFormEntity{
    fullname?: string;
    email?: string;
    phone?: string;
    companyname?: string;
    dev_message?: string;
    website?:string;
    Mobile_App?: string;
    Digital_Product?: string;
    Software_Development?: string;
    Ecommerce_Development?:string;
    Blockchain_Development?:string;
    Game_Development?:string;
    Salesforce_Development?:string;
    Ai_Development?:string;
    Iot_Development?:string;
    Devops_Development?:string;
   
    static yupSchema(){
        return yup.object({
            fullname: yup.string().trim().nullable(),
            email: yup.string().email().trim().nullable(),
            phone: yup.string().nullable(),
            companyname: yup.string().trim().nullable(),
            dev_message: yup.string().trim().nullable(),
            website: yup.string(),
            Mobile_App: yup.string(),
            Digital_Product: yup.string(),
            Software_Development: yup.string(),
            Ecommerce_Development: yup.string(),
            Blockchain_Development: yup.string(),
            Game_Development: yup.string(),
            Salesforce_Development: yup.string(),
            Ai_Development: yup.string(),
            Iot_Development: yup.string(),
            Devops_Development: yup.string(),
        })
    }
}







