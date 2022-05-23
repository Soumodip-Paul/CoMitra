import React from 'react'
import { Link } from 'react-router-dom'
import { Accordion, AccordionItem } from '../items/Accordion'
import { setDescription, setTitle } from '../items/MetaDirective'
import { ExclamationCircleIcon } from '@heroicons/react/solid'

export const Privacy = () => {
    const i1 =
        <section class="text-gray-600 roboto">
            <div class="container mx-auto flex flex-col px-5 py-6 justify-center items-center">
                <div class="w-full md:w-2/3 flex flex-col mb-8 items-center text-start">
                    <h1 class="title-font sm:text-4xl text-3xl font-medium text-gray-900 mb-8 capitalize">Privacy Policy</h1>
                    <p class="mb-8 leading-relaxed"><strong >Content Policy : </strong>
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
                        policies to ensure your privacy.</p>
                    <p class="mb-8 leading-relaxed"><strong className="fs-5">Fair Usage Policy : </strong>
                        To reduce abuse, You are only allowed to perform 15 searches per minite in our website.
                        If you use more than 15 search in a minute, your IP Address will be banned from our
                        website for 24 Hour. You  cannot access any of our services for the next 24 hours from our
                        website. This services include Search by PIN Code, Search by District, Login and Download
                        Certificate.</p>
                </div>
                <div class="w-full md:w-2/3 flex flex-col mb-8 items-center text-start">
                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-8">Frequently Asked Questions</h1>
                    <Accordion>
                        <AccordionItem heading="1. Do you share my login details?"  >
                            No, we even cannot see your login details.
                        </AccordionItem>
                        <AccordionItem heading="2. Do you contain adds?">
                            Yes, to keep our services free our website may contain Sponsered Link (Adds). But their
                            Privacy Policy may differ from us. So before using them please go through their Privacy
                            Policies.
                        </AccordionItem>
                        <AccordionItem heading="3. What happens if I searched more than 15 times in a minite?">
                            According to our Fair Usage Policy, if you searched more than 15 times in minite
                            Your IP Address will be banned and you cannot use any of our services from our website for
                            next 24 hours.
                        </AccordionItem>
                    </Accordion>
                </div>
                <div class="w-full md:w-2/3 flex flex-col mb-8 items-center ">
                    <div className="bg-indigo-50 rounded-lg w-full mx-auto flex items-center py-4 px-6 ">
                        <ExclamationCircleIcon className='w-10 h-10 mr-4 text-indigo-400' />
                        <p className='text-md'>To stop the abusing of our site Users are only allowed 15 searches per miniutes. If an user exceed this limit then his/her IP will be banned for 24 hours from our website.</p>
                    </div>
                </div>
            </div>
        </section>

    React.useEffect(() => {
        setTitle("Privacy Policy | CoMitra")
        setDescription("CoMitra website privacy policy")
    })
    return (i1)
}
