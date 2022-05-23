import React from 'react'
import { Accordion, AccordionItem } from '../items/Accordion'
import { setDescription, setTitle } from '../items/MetaDirective'
import { ExclamationCircleIcon } from '@heroicons/react/solid'

const _desc = "CoMitra is a free vaccine traker application. You can find the vaccination centers near you using your PIN Code, your State and District Name and the Date on which you want to be vaccinated. You can also download your vaccination certificate from here"

export const About = () => {
    React.useEffect(() => {
        setTitle("About Us | CoMitra")
        setDescription(_desc)
    })

    return (
        <section class="text-gray-600 roboto">
            <div class="container mx-auto flex flex-col px-5 py-6 justify-center items-center">
                <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-start">
                    <h1 class="title-font sm:text-4xl text-3xl font-medium text-gray-900 mb-8">ABOUT US</h1>
                    <p class="mb-8 leading-relaxed"><strong>CoMitra </strong> is a free vaccine traker application.You can find the vaccination centers near you using your PIN Code, your State and District Name and the Date on which you want to be vaccinated.You can find the details of vaccination centers like total number of Dose available , number of Dose-1 available , number of Dose-2 available.You can also find the age group who are allowed to take the vaccine at that centre. Fees detail like the fee of doses are also available.Type of the vaccine (like COVISHIELD, COVAXINE, SPUTNIK V) are also mentioned for each Vaccination centers.</p>
                    <p class="mb-8 leading-relaxed"> You can also download the vaccination certificate from  our website. You only need the Reference ID mentioned in your appointment slip and your registered mobile number (For Authentication purpose). We will not save or share your personal details like your Phone Number, Referance ID, or any of your login information. </p>
                    <blockquote className="roboto m-0 text-base bg-indigo-50 text-gray-600 border-l-4 border-indigo-500 rounded-r-md" style={{ padding: '10px 15px', }}>
                        Sorry, we are not supporting the schedulling functionality till now.
                        You cannot schedule appointment from our website. It is only for checking the availbility of vaccines. For registration or scheduling an appointment please check official <a className="text-decoration-none text-info fw-bold" href="https://cowin.gov.in">CoWin Portal</a>.
                    </blockquote>
                </div>
                <div class="w-full md:w-2/3 flex flex-col mb-8 items-center text-start">
                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-8">Frequently Asked Questions</h1>
                    <Accordion>
                        <AccordionItem heading="1. Can we find a vaccination centre using PINCode ?"  >
                            Yes, you can find vaccination centers near you using PIN code of your area.
                        </AccordionItem>
                        <AccordionItem heading="2. Can we find a vaccination centre using our District name ?">
                            Yes, you can find vaccination centrs using your State and District name. Select
                            the name of your State and District from the dropdown and find vaccination centers near
                            you.
                        </AccordionItem>
                        <AccordionItem heading="3. Can I download vaccination certificate from here ?">
                            You can download your vaccination certificate from here. Enter your Referance Id
                            (Mentioned in your Appointment Slip) and your Mobile Number (Registered Mobile Number for
                            OTP verification) to download your certificate.
                        </AccordionItem>
                        <AccordionItem heading="4. Do you share my Phone Number ?"  >
                            We donot save or share any of your personal details like Phone Number, Referance Id,
                            or login info.You can check the source code <a href="https://github.com/Soumodip-Paul/CoMitra" className="text-decoration-none">in Github</a>
                        </AccordionItem>
                        <AccordionItem heading="5. Can I book an Appointment for Vaccination?"  >
                            Unfourtunately, facility of booking an Appointment is not available for now in our website.
                            If you want to book an Appointment, please visit the official <a target="_blank" href="https://cowin.gov.in" className="text-decoration-none text-info" rel="noreferrer">CoWin Portal</a> for booking the Appointment.
                        </AccordionItem>
                        <AccordionItem heading="6. Do you I have to pay to use your services?"  >
                            Our service is completely free to all of our users.
                        </AccordionItem>
                    </Accordion>
                </div>
                <div class="w-full md:w-2/3 flex flex-col mb-8 items-center ">
                    <div className="bg-indigo-50 rounded-lg w-full mx-auto flex items-center py-4 px-6 ">
                        <ExclamationCircleIcon className='w-10 h-10 mr-4 text-indigo-400' />
                        <p className='text-md'>To protect our users from abusing you are only allowed 15 searches per miniutes. If you exceed your limit then your IP will be banned for 24 hours from our website.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
