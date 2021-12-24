import { useEffect, useState } from 'react'

export const ScrollTop = () => {

    const [bottom, setBottom] = useState(-60)

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if(window.scrollY > 300) setBottom(0)
            else setBottom(-60)
        })
    }, [])

    const handleClick = e => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="bg-dark" style={{
            height: "30px",
            width: "30px",
            position: 'fixed',
            bottom: `${bottom}px`,
            right: '0',
            borderRadius: '50%',
            margin: '10px',
            display: "flex",
            padding: "20px",
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'bottom 0.25s ease-in-out',
            zIndex: "2000"
        }} onClick={handleClick}>

            <i style={{
                border: "solid white",
                borderWidth: " 0 4px 4px 0",
                padding: "4px",
                marginTop: "4px",
                transform: 'rotate(-135deg)' ,       
            }}>

            </i>
        </div>
    )
}
