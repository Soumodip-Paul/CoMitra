import React from 'react'
import { Accordion, AccordionItem } from '../items/Accordion'
import { setDescription, setTitle } from '../items/MetaDirective'

const _desc = "CoMitra is a free vaccine traker application. You can find the vaccination centers near you using your PIN Code, your State and District Name and the Date on which you want to be vaccinated. You can also download your vaccination certificate from here"

export const About = () => {
    React.useEffect(() => {
        setTitle("About Us | CoMitra")
        setDescription(_desc)
    })

    return (
        <div className="container">
            <h4 className="text-center text-light roboto bg-success p-3">About Us</h4><br />
            <p className="fs-6 roboto-slab"><strong>CoMitra </strong> is a free vaccine traker application.
                You can find the vaccination centers near you using your PIN Code, your State and District Name and the Date on which you want to be vaccinated.
                You can find the details of vaccination centers like total number of Dose available , number of Dose-1 available , number of Dose-2 available.
                You can also find the age group who are allowed to take the vaccine at that centre. Fees detail like the fee of doses are also available.
                Type of the vaccine (like COVISHIELD, COVAXINE, SPUTNIK V) are also mentioned for each Vaccination centers. </p>
                
                <p className="fs-6 roboto-slab">
                You can also download the vaccination certificate from  our website. You only need the Reference ID mentioned in your appointment slip and your registered mobile number (For Authentication purpose). We will not save or share your personal details like your Phone Number, Referance ID, or any of your login information. </p>

                <br />

            <blockquote className="roboto m-0 fs-6" style={{ borderLeft: '5px solid #d0d7de',padding: '10px 15px',background: '#f6f8fa',color: "#000"}}>
                Sorry, we are not supporting the schedulling functionality till now.
                You cannot schedule appointment from our website. It is only for checking the availbility of vaccines. For registration or scheduling an appointment please check official <a className="text-decoration-none text-info fw-bold" href="https://cowin.gov.in">CoWin Portal</a>.
            </blockquote>
            <br />
            <h4 className="text-center roboto"> Frequently Asked Questions </h4>
            <br />
            <Accordion id="faqs">
                <AccordionItem id="1" heading="1. Can we find a vaccination centre using PINCode ?"  >
                    Yes, you can find vaccination centers near you using PIN code of your area.
                </AccordionItem>
                <AccordionItem id="2" heading="2. Can we find a vaccination centre using our District name ?">
                    Yes, you can find vaccination centrs using your State and District name. Select 
                    the name of your State and District from the dropdown and find vaccination centers near 
                    you. 
                </AccordionItem>
                <AccordionItem id="3" heading="3. Can I download vaccination certificate from here ?">
                    You can download your vaccination certificate from here. Enter your Referance Id 
                    (Mentioned in your Appointment Slip) and your Mobile Number (Registered Mobile Number for 
                    OTP verification) to download your certificate.
                </AccordionItem>
                <AccordionItem id="4" heading="4. Do you share my Phone Number ?"  > 
                    We donot save or share any of your personal details like Phone Number, Referance Id,
                    or login info.You can check the source code <a href="https://github.com/Soumodip-Paul/CoMitra" className="text-decoration-none">in Github</a>
                </AccordionItem>
                <AccordionItem id="5" heading="5. Can I book an Appointment for Vaccination?"  > 
                    Unfourtunately, facility of booking an Appointment is not available for now in our website.
                    If you want to book an Appointment, please visit the official <a target="_blank" href="https://cowin.gov.in" className="text-decoration-none text-info" rel="noreferrer">CoWin Portal</a> for booking the Appointment.
                </AccordionItem>
                <AccordionItem id="6" heading="6. Do you I have to pay to use your services?"  > 
                    Our service is completely free to all of our users.
                </AccordionItem>
            </Accordion>
            <br />
            <div className="alert alert-danger d-flex align-items-center" role="alert">
                <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <div className="px-2 roboto">
                    To protect our users from abusing you are only allowed 15 searches per miniutes. If you exceed your limit then your IP will be banned for 24 hours from our website.
                </div>
            </div>
        </div>
    )
}
