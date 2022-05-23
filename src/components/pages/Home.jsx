import React from 'react'
import { Link } from 'react-router-dom'
import { CovidCases, CovidVaccine } from '../items/CovidCases'
import { setDescription, setTitle } from '../items/MetaDirective'

const _desc = "CoMitra is a online tool that helps you to find vaccination centers near you. You can find vaccination centers using your pincode or district name. You can also download your certificate using your phone number and reference id. Stay safe, secure, vaccinated during COVID-19 pandemic."

export const Home = () => {
	React.useEffect(() => {
		setTitle("Co-Mitra | Covid Vaccine Traker | Certificate Downloader")
		setDescription(_desc)
	}, [])
	return (
		<main className="roboto">
			<section className="text-gray-600 body-font">
				<div className="container mx-auto flex px-5 py-12 lg:py-24 md:flex-row flex-col items-center">
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
						<img className="object-cover object-center rounded" alt="CoMitra" src="/assets/images/covid.webp" />
					</div>
					<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to CoMitra
						</h1>
						<p className="mb-8 leading-relaxed">Be a part of fight against COVID-19. Wear mask, Wash your hands and maintain social distancing.Take vaccine to stay protected from the COVID-19 virus. Help the earth and the whole mankind to recover from the pandemic.</p>
						<div className="flex justify-center">
							<a href="https://www.mohfw.gov.in" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded lg:text-lg text-sm items-center">Know More</a>
							<Link to="/district" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded lg:text-lg text-sm items-center">Find Vaccines Now</Link>
						</div>
					</div>
				</div>
			</section>
			<CovidCases />
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="text-center mb-20">
						<h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Find Vaccination Center Near You</h1>
						<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Find Vaccination Center near you  using your PIN code or using your District Name and Download Certificate for absolutely free</p>
						<div className="flex mt-6 justify-center">
							<div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
						</div>
					</div>
					<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
								<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-10 h-10" viewBox="0 0 48 48">
									<path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M24 32.35 14.35 22.7 16.5 20.55 22.5 26.55V8H25.5V26.55L31.5 20.55L33.65 22.7ZM11 40Q9.8 40 8.9 39.1Q8 38.2 8 37V29.85H11V37Q11 37 11 37Q11 37 11 37H37Q37 37 37 37Q37 37 37 37V29.85H40V37Q40 38.2 39.1 39.1Q38.2 40 37 40Z" />
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-3">Download</h2>
								<p className="leading-relaxed text-base">Download your vaccination certificate from here for your future usage.</p>
								<Link to="/download" className="mt-3 text-indigo-500 inline-flex items-center">Download Now
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</Link>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
								<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-10 h-10" viewBox="0 0 48 48">
									<path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M22.9 43.95Q18.95 43.75 15.5 42.1Q12.05 40.45 9.5 37.775Q6.95 35.1 5.475 31.55Q4 28 4 24Q4 19.85 5.575 16.2Q7.15 12.55 9.85 9.85Q12.55 7.15 16.2 5.575Q19.85 4 24 4Q31.45 4 36.95 8.7Q42.45 13.4 43.7 20.5H40.65Q39.8 16.3 37.1 13Q34.4 9.7 30.35 8.05V8.95Q30.35 10.7 29.15 12Q27.95 13.3 26.2 13.3H21.85V17.65Q21.85 18.5 21.175 19.05Q20.5 19.6 19.65 19.6H15.5V24H21V30.25H17.65L7.45 20.05Q7.2 21.05 7.1 22.025Q7 23 7 24Q7 30.75 11.55 35.65Q16.1 40.55 22.9 40.95ZM42.5 42.65 35.8 35.95Q34.75 36.7 33.525 37.1Q32.3 37.5 31 37.5Q27.45 37.5 24.975 35.025Q22.5 32.55 22.5 29Q22.5 25.45 24.975 22.975Q27.45 20.5 31 20.5Q34.55 20.5 37.025 22.975Q39.5 25.45 39.5 29Q39.5 30.3 39.075 31.525Q38.65 32.75 37.95 33.85L44.65 40.5ZM31 34.5Q33.3 34.5 34.9 32.9Q36.5 31.3 36.5 29Q36.5 26.7 34.9 25.1Q33.3 23.5 31 23.5Q28.7 23.5 27.1 25.1Q25.5 26.7 25.5 29Q25.5 31.3 27.1 32.9Q28.7 34.5 31 34.5Z" />
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-3">Districts</h2>
								<p className="leading-relaxed text-base">Select your State and District and get the list of available vaccination centers in your district.</p>
								<Link to="/district" className="mt-3 text-indigo-500 inline-flex items-center">Find Now
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</Link>
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
								<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-10 h-10" viewBox="0 0 48 48">
									<path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M24 30.4Q25.85 30.4 27.1 29.15Q28.35 27.9 28.35 26.05Q28.35 24.2 27.1 22.95Q25.85 21.7 24 21.7Q22.15 21.7 20.9 22.95Q19.65 24.2 19.65 26.05Q19.65 27.9 20.9 29.15Q22.15 30.4 24 30.4ZM36.8 41Q36.8 41 36.8 41Q36.8 41 36.8 41L28.1 32.3Q27.1 32.9 26.125 33.15Q25.15 33.4 24 33.4Q20.9 33.4 18.775 31.275Q16.65 29.15 16.65 26.05Q16.65 22.95 18.775 20.825Q20.9 18.7 24 18.7Q27.1 18.7 29.225 20.825Q31.35 22.95 31.35 26.05Q31.35 27.2 31.025 28.25Q30.7 29.3 30.05 30.1L37 37.05V16.9L28.4 7H11Q11 7 11 7Q11 7 11 7V41Q11 41 11 41Q11 41 11 41ZM11 44Q9.8 44 8.9 43.1Q8 42.2 8 41V7Q8 5.8 8.9 4.9Q9.8 4 11 4H29.6L40 15.95V41Q40 42.2 39.1 43.1Q38.2 44 37 44ZM25.5 25.1Q25.5 25.1 25.5 25.1Q25.5 25.1 25.5 25.1Q25.5 25.1 25.5 25.1Q25.5 25.1 25.5 25.1Q25.5 25.1 25.5 25.1Q25.5 25.1 25.5 25.1Q25.5 25.1 25.5 25.1Q25.5 25.1 25.5 25.1Z" />
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-3">PIN Code</h2>
								<p className="leading-relaxed text-base">Search the vaccination centers near you using PIN code of your locality or anywhere you want</p>
								<Link to="/pin" className="mt-3 text-indigo-500 inline-flex items-center">Search Now
									<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<CovidVaccine />
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-12 mx-auto">
					<div className="flex flex-col text-center w-full mb-20">
						<h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">COVID - 19</h2>
						<h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Stay Prtected From COVID-19 </h1>
					</div>
					<div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
						<div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
							<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
								<path fill='currentColor' xmlns="http://www.w3.org/2000/svg" d="M4,5c0-1.1,0.9-2,2-2s2,0.9,2,2c0,1.1-0.9,2-2,2S4,6.1,4,5z M8.78,8.58C7.93,8.21,6.99,8,6,8S4.07,8.21,3.22,8.58 C2.48,8.9,2,9.62,2,10.43L2,11h8l0-0.57C10,9.62,9.52,8.9,8.78,8.58z M18,7c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2 C16,6.1,16.9,7,18,7z M20.78,8.58C19.93,8.21,18.99,8,18,8c-0.99,0-1.93,0.21-2.78,0.58C14.48,8.9,14,9.62,14,10.43L14,11h8l0-0.57 C22,9.62,21.52,8.9,20.78,8.58z M22,17l-4-4v3H6v-3l-4,4l4,4v-3h12v3L22,17z"></path>
							</svg>
						</div>
						<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
							<h2 className="text-gray-900 text-lg title-font font-extrabold mb-2">Maintain Social Distancing</h2>
							<p className="leading-relaxed text-base">Always maintain a safe distance from other person. Avoid to go to the crowded places. Try to avoid any phisical contact with other person. Use mask and keep your hands sanitizing regularly.</p>
						</div>
					</div>
					<div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
						<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
							<h2 className="text-gray-900 text-lg title-font font-extrabold mb-2">Wear Mask</h2>
							<p className="leading-relaxed text-base">Always wear Mask, Regularly wash your hands.Sanitize your hands for atleast 4-5 times in a day. Use Soap or Alcohol based Hand Sanitizer to wash your hands. Avoid to touch your eyes and nose directly with bare hands. If possible, use FaceShield.</p>
						</div>
						<div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
							<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
								<path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M19.5,6c-1.31,0-2.37,1.01-2.48,2.3C15.14,7.8,14.18,6.5,12,6.5c-2.19,0-3.14,1.3-5.02,1.8C6.87,7.02,5.81,6,4.5,6 C3.12,6,2,7.12,2,8.5V9c0,6,3.6,7.81,6.52,7.98C9.53,17.62,10.72,18,12,18s2.47-0.38,3.48-1.02C18.4,16.81,22,15,22,9V8.5 C22,7.12,20.88,6,19.5,6z M3.5,9V8.5c0-0.55,0.45-1,1-1s1,0.45,1,1v3c0,1.28,0.38,2.47,1.01,3.48C4.99,14.27,3.5,12.65,3.5,9z M20.5,9c0,3.65-1.49,5.27-3.01,5.98c0.64-1.01,1.01-2.2,1.01-3.48v-3c0-0.55,0.45-1,1-1s1,0.45,1,1V9z M10.69,10.48 c-0.44,0.26-0.96,0.56-1.69,0.76V10.2c0.48-0.17,0.84-0.38,1.18-0.58C10.72,9.3,11.23,9,12,9s1.27,0.3,1.8,0.62 c0.34,0.2,0.71,0.42,1.2,0.59v1.04c-0.75-0.21-1.26-0.51-1.71-0.78C12.83,10.2,12.49,10,12,10C11.51,10,11.16,10.2,10.69,10.48z"></path>
							</svg>
						</div>
					</div>
					<div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
						<div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
							<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
								<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
								<circle cx="12" cy="7" r="4"></circle>
							</svg>
						</div>
						<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
							<h2 className="text-gray-900 text-lg title-font font-extrabold mb-2">Take Vaccine</h2>
							<p className="leading-relaxed text-base">If you have Fever, Cough and Loss of Smell and Taste immediately consult a Doctor. Always take the medicines prescribed by a <span className='font-bold'> Doctor</span>. Take your vaccine as early as possible to protect yourself and reduce the fatality of COVID-19 virus. Find the vaccination centers near you</p>
							<Link to={'/district'} className="mt-3 text-indigo-500 inline-flex items-center">Find Now
								<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
