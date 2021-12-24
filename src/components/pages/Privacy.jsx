import React from 'react'
import {  Link  } from 'react-router-dom'
import { Accordion, AccordionItem } from '../items/Accordion'
import { setDescription, setTitle } from '../items/MetaDirective'

export const Privacy = () => {
    React.useEffect(() => {
        setTitle("Privacy Policy | CoMitra")
        setDescription("CoMitra website privacy policy")
    })
    return (
        <>
            <div className="container">
                <h4 className="text-center text-light roboto bg-success p-3">Privacy Policy</h4><br />
                <p className="fs-6 roboto-slab">
                    <strong className="fs-5">Content Policy : </strong>
                    <Link className="text-decoration-none text-info" to="/">CoMitra </Link> is a free and open 
                    source COVID-19 vaccine vaccine traker application that uses official 
                    <a href="https://apisetu.gov.in/public/marketplace/api/cowin" 
                    className="text-decoration-none text-primary"> Co-Win Public API</a> to provide the 
                    details of available vaccination centers using the <strong>PIN Code</strong> and <strong>
                        State and District
                    </strong> name. You can also download your certificate from here.
                    All of your input will not be stored, saved or shared with others.
                    Your login information like your Phone Number, Referance Id, or your login credentials
                    are also not be saved or shared. Even we ( <strong>CoMitra Team</strong> ) could not 
                    see your login information. We donot compromise our users' valuable data.
                    <br />
                    To provide free services, our website may contain sponsered link. Their
                    privacy policy may differ from us. So before using them, please go through their privacy 
                    policies to ensure your privacy.
                </p>
                <p className="fs-6 roboto-slab">
                    <strong className="fs-5">Fair Usage Policy : </strong>
                    To reduce abuse, You are only allowed to perform 15 searches per minite in our website.
                    If you use more than 15 search in a minute, your IP Address will be banned from our 
                    website for 24 Hour. You  cannot access any of our services for the next 24 hours from our 
                    website. This services include Search by PIN Code, Search by District, Login and Download 
                    Certificate.
                </p>
                <br />
                <h4 className="text-center roboto"> Frequently Asked Questions </h4>
                <Accordion id="privacy-faqs">
                <AccordionItem id="1" heading="1. Do you share my login details?"  >
                    No, we even cannot see your login details.
                </AccordionItem>
                <AccordionItem id="2" heading="2. Do you contain adds?">
                    Yes, to keep our services free our website may contain Sponsered Link (Adds). But their 
                    Privacy Policy may differ from us. So before using them please go through their Privacy 
                    Policies.
                </AccordionItem>
                <AccordionItem id="3" heading="3. What happens if I searched more than 15 times in a minite?">
                   According to our Fair Usage Policy, if you searched more than 15 times in minite 
                   Your IP Address will be banned and you cannot use any of our services from our website for 
                   next 24 hours.
                </AccordionItem>
            </Accordion>
            <br />
                <div className="alert alert-danger d-flex align-items-center" role="alert">
                <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <div className="px-2 roboto">
                    To stop the abusing of our site Users are only allowed 15 searches per miniutes. If an user exceed this limit then his/her IP will be banned for 24 hours from our website.
                </div>
            </div>
            </div>
        </>
    )
}
