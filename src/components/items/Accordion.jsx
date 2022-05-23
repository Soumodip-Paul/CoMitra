import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'


export const Accordion = ({ children }) => {
    return (
        <div className="w-full px-4 pt-4">
            <div className="mx-auto w-full max-w-2xl rounded-2xl p-2">
                {children}
            </div>
        </div>
    )
}

export const AccordionItem = ({ heading, children }) => {
    return(
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-100 px-4 py-4 text-left text-base font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75 mb-2">
                <span>{heading}</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-indigo-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-6 text-base text-gray-500">
                {children}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    )
}