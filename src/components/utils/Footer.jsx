import React from 'react'

export const Footer = () => {
    return (
			<footer className="container d-flex flex-md-row flex-column justify-content-md-between justify-content-center">
            <div>&copy; 2019–2021 CoMitra by <a href="https://github.com/Soumodip-Paul" className="text-decoration-none" target="_blank" rel="noreferrer" >Soumodip Paul</a></div>
            <div>Support Us
                <a href="https://www.youtube.com/channel/UCOFwfN-LJ7wGvAOovAwpjxg?sub_confirmation=1" className="px-2 text-decoration-none">Youtube</a>
                <a href="https://spaul10032002.blogspot.com" className="px-2 text-decoration-none">Blog</a>
                <a href="//blog.comitra.ga" className="px-2 text-decoration-none">Website</a>
                {/* <a href="" className="px-2 text-decoration-none">Twitter</a> */}
            </div>
        </footer>
    )
}
