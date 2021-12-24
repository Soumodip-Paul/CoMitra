import React from 'react'
import { Link } from 'react-router-dom'
import { CovidCases, CovidVaccine } from '../items/CovidCases'
import { setDescription, setTitle } from '../items/MetaDirective'
import { Footer } from '../utils/Footer'

const _desc = "CoMitra is a online tool that helps you to find vaccination centers near you. You can find vaccination centers using your pincode or district name. You can also download your certificate using your phone number and reference id. Stay safe, secure, vaccinated during COVID-19 pandemic."

export const Home = () => {
	React.useEffect(() => {
		setTitle("Co-Mitra | Covid Vaccine Traker | Certificate Downloader")
		setDescription(_desc)
	}, [])
	return (
			<main className="roboto">

				<div id="myCarousel" className="carousel slide mb-0" data-bs-ride="carousel">
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src="/assets/images/covid.webp" className="bd-placeholder-img" alt="covid" />
							<div className="container">
								<div className="carousel-caption">
									<h1>Welcome to <span className="text-info">CoMitra</span></h1>
									<p>Be a part of fight against COVID-19. Wear mask, Wash your hands and
										maintain social distancing.</p>
									<p><a className="btn btn-lg btn-primary" href="http://mohfw.gov.in">Know More</a></p>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<img src="/assets/images/vaccine.webp" className="bd-placeholder-img" alt="covid" />
							<div className="container">
								<div className="carousel-caption text-start">
									<h1>Be Vaccinated</h1>
									<p>Take vaccine to stay protected from the COVID-19 virus.</p>
									<p><Link to="/pin" className="btn btn-lg btn-success"> Find Now</Link></p>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<img src="/assets/images/cert.webp" className="bd-placeholder-img" alt="covid" />
							<div className="container">
								<div className="carousel-caption text-end text-dark">
									<h1>Download your certificate</h1>
									<p>Download your certificate from our websitefor your future Referance</p>
									<p><Link className="btn btn-lg btn-primary" to="/download">Download</Link></p>
								</div>
							</div>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>

				<CovidCases />

				<h3 className="text-center mb-4">Find Vaccination center near you and Download Certificate</h3>

				<div className="container marketing">
					<div className="row">
						<div className="col-lg-4">
							<svg className="bd-placeholder-img rounded-circle" width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" focusable="false">
								<path fill="#0dcaf0" xmlns="http://www.w3.org/2000/svg" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 4h7l5 5v8.58l-1.84-1.84c1.28-1.94 1.07-4.57-.64-6.28C14.55 8.49 13.28 8 12 8c-1.28 0-2.55.49-3.53 1.46-1.95 1.95-1.95 5.11 0 7.05.97.97 2.25 1.46 3.53 1.46.96 0 1.92-.28 2.75-.83L17.6 20H6V4zm8.11 11.1c-.56.56-1.31.88-2.11.88s-1.55-.31-2.11-.88c-.56-.56-.88-1.31-.88-2.11s.31-1.55.88-2.11c.56-.57 1.31-.88 2.11-.88s1.55.31 2.11.88c.56.56.88 1.31.88 2.11s-.31 1.55-.88 2.11z" />
							</svg>

							<h2>PIN Code</h2>
							<p>Search the vaccination centers near you using PIN code of your locality.</p>
							<p><Link className="btn btn-info text-light" to="/pin">Try Now &raquo;</Link></p>
						</div>
						<div className="col-lg-4">
							<svg className="bd-placeholder-img rounded-circle" width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" focusable="false">
								<path fill="#198754" xmlns="http://www.w3.org/2000/svg" d="M19.3,16.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S11,12,11,14.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l3.2,3.2 l1.4-1.4L19.3,16.9z M15.5,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S16.9,17,15.5,17z M12,20v2 C6.48,22,2,17.52,2,12C2,6.48,6.48,2,12,2c4.84,0,8.87,3.44,9.8,8h-2.07c-0.64-2.46-2.4-4.47-4.73-5.41V5c0,1.1-0.9,2-2,2h-2v2 c0,0.55-0.45,1-1,1H8v2h2v3H9l-4.79-4.79C4.08,10.79,4,11.38,4,12C4,16.41,7.59,20,12,20z" />
							</svg>

							<h2>Districts</h2>
							<p>Select your State and District and get the list of available vaccination centers in your district.</p>
							<p><Link className="btn btn-success" to="/district">Try Now &raquo;</Link></p>
						</div>
						<div className="col-lg-4">
							<svg className="bd-placeholder-img rounded-circle" width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" focusable="false">
								<g>
									<path fill="#6610F2" d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z" />
								</g>
							</svg>

							<h2>Download</h2>
							<p>Download your vaccination certificate from here for your future usage.</p>
							<p><Link className="btn btn-primary" to="/download">Downlaod Now &raquo;</Link></p>
						</div>
					</div>

					<CovidVaccine />
					<hr className="featurette-divider" />

					<h2 className="my-4 mx-2">Stay protected from COVID-19</h2>

					<div className="row featurette">
						<div className="col-md-7">
							<h2 className="featurette-heading">Wear Mask, <span className="text-muted">
								Regularly wash your hands </span></h2>
							<p className="lead">Always wear mask. Sanitize your hands for atleast 4-5 times in a
								day. Use Soap or Alcohol based Hand Sanitizer to wash your hands. Avoid to touch your
								eyes and nose directly with bare hands. If possible, use FaceShield. </p>
						</div>
						<div className="col-md-5">
							<svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false">
								<path fill="#0dcaf0" xmlns="http://www.w3.org/2000/svg" d="M19.5,6c-1.31,0-2.37,1.01-2.48,2.3C15.14,7.8,14.18,6.5,12,6.5c-2.19,0-3.14,1.3-5.02,1.8C6.87,7.02,5.81,6,4.5,6 C3.12,6,2,7.12,2,8.5V9c0,6,3.6,7.81,6.52,7.98C9.53,17.62,10.72,18,12,18s2.47-0.38,3.48-1.02C18.4,16.81,22,15,22,9V8.5 C22,7.12,20.88,6,19.5,6z M3.5,9V8.5c0-0.55,0.45-1,1-1s1,0.45,1,1v3c0,1.28,0.38,2.47,1.01,3.48C4.99,14.27,3.5,12.65,3.5,9z M20.5,9c0,3.65-1.49,5.27-3.01,5.98c0.64-1.01,1.01-2.2,1.01-3.48v-3c0-0.55,0.45-1,1-1s1,0.45,1,1V9z M10.69,10.48 c-0.44,0.26-0.96,0.56-1.69,0.76V10.2c0.48-0.17,0.84-0.38,1.18-0.58C10.72,9.3,11.23,9,12,9s1.27,0.3,1.8,0.62 c0.34,0.2,0.71,0.42,1.2,0.59v1.04c-0.75-0.21-1.26-0.51-1.71-0.78C12.83,10.2,12.49,10,12,10C11.51,10,11.16,10.2,10.69,10.48z" />
							</svg>

						</div>
					</div>

					<hr className="featurette-divider" />

					<div className="row featurette">
						<div className="col-md-7 order-md-2">
							<h2 className="featurette-heading">Maintain Social Distancing.
								<span className="text-muted"> Avoid crowded place</span></h2>
							<p className="lead">Always maintain a safe distance from other person.
								Avoid to go to the crowded places. Try to avoid any phisical contact with
								other person. Use mask and keep your hands sanitizing regularly. </p>
						</div>
						<div className="col-md-5 order-md-1">
							<svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" viewBox="0 0 24 24" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false">
								<path fill="#20c997" xmlns="http://www.w3.org/2000/svg" d="M4,5c0-1.1,0.9-2,2-2s2,0.9,2,2c0,1.1-0.9,2-2,2S4,6.1,4,5z M8.78,8.58C7.93,8.21,6.99,8,6,8S4.07,8.21,3.22,8.58 C2.48,8.9,2,9.62,2,10.43L2,11h8l0-0.57C10,9.62,9.52,8.9,8.78,8.58z M18,7c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2 C16,6.1,16.9,7,18,7z M20.78,8.58C19.93,8.21,18.99,8,18,8c-0.99,0-1.93,0.21-2.78,0.58C14.48,8.9,14,9.62,14,10.43L14,11h8l0-0.57 C22,9.62,21.52,8.9,20.78,8.58z M22,17l-4-4v3H6v-3l-4,4l4,4v-3h12v3L22,17z" />
							</svg>

						</div>
					</div>

					<hr className="featurette-divider" />

					<div className="row featurette">
						<div className="col-md-7">
							<h2 className="featurette-heading">Consult a Doctor.
								<span className="text-info">Take Vaccine</span></h2>
							<p className="lead">If you have Fever, Cough and Loss of Smell and Taste
								immediately consult a <strong className="fw-bold">Doctor</strong>. Always take the
								medicines prescribed by a <strong className="fw-bold"> Doctor</strong>. Take
								your vaccine as early as possible to protect yourself and
								reduce the fatality of COVID-19 virus. Find the vaccination centers near you &raquo;</p>
							<Link className="btn btn-outline-success" to="/district">Find now</Link>
						</div>
						<div className="col-md-5">
							<img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="./android-chrome-512x512.webp" alt="doctor" />
						</div>
					</div>

					<hr className="featurette-divider" />


				</div>

				<Footer />
			</main>
	)
}
