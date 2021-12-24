import React from 'react'

const Pid = React.createContext(null);

export const Accordion = ({ id, children }) => {
    return (
        <Pid.Provider value={id}>
            <div className="accordion" id={id}>
                {children}
            </div>
        </Pid.Provider>
    )
}

export const AccordionItem = ({heading,id,children}) => {
    const parentId = React.useContext(Pid)
    return (
        <div className="accordion-item">
            <h2 className="accordion-header " id={`heading${id}`}>
                <button className="accordion-button collapsed fw-bold roboto" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
                    {heading}
                </button>
            </h2>
            <div id={`collapse${id}`} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent={`#${parentId}`}>
                <div className="accordion-body roboto-slab">
                    {children}
                </div>
            </div>
        </div>
    )
}