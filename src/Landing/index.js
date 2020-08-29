import React from 'react';
import './main.css';
import logo from './img/orig-1.svg';
import error from './img/error.svg';

class Landing extends React.Component {
	removePopup() {
		let elem = document.querySelector('.popup');
		elem.classList.add('is-hidden');
	}
	addPopup() {
		let elem = document.querySelector('.popup');
		elem.classList.remove('is-hidden');
	}
	render() {
		return (
			<div class="container">
				<div className="popup is-hidden">
					<div className="popup__wrap">
						<div className="popup__warn">
							<img className="popup__img" src={error} alt="img" />
						</div>
						<div className="popup__content">
							<p className="popup__para">
								This email id is not registered with Internshala. To register, please click here if you
								are a student or here if you an employer. If you are a T&P head, register here.
							</p>
							<button className="popup__button" onClick={this.removePopup}>
								Close
							</button>
						</div>
					</div>
				</div>
				<header className="navbar">
					<ul class="nav__list">
						<li class="nav__item">
							<a className="nav__link" href="/">
								Home
							</a>
						</li>
						<li class="nav__item">
							<a className="nav__link" href="/">
								Company
							</a>
						</li>
						<li class="nav__item">
							<a className="nav__link" href="/">
								Profile
							</a>
						</li>
						<li class="nav__item">
							<a className="nav__link" href="/">
								Projects
							</a>
						</li>
					</ul>
				</header>
				<section className="section__header">
					<a class="section__header--link" href="#">
						Back
					</a>
				</section>
				<section className="section__main">
					<div className="section__content">
						<div className="section__description">
							<div className="heading__wrapper">
								<h3 class="content__heading">&nbsp;</h3>
								<span className="content__remote"> Remote </span>
							</div>
							<p class="content__company">
								<img class="content__img" src={logo} alt="logo" />
								<div className="company__desc">
									<h2 class="company__title">Shopback</h2>
									<h3 class="company__loc">Random</h3>
									<p class="company__para">2 assignments</p>
									<p class="company__para-1">1 openings</p>
								</div>
							</p>
							<br />
							<p class="content__para">
								I'm currently a Junior trying to look for internship opportunities! Let me know if
								anything is wrong with my resume.
							</p>
							<p class="content__para">
								Link to Resume:
								https://drive.google.com/file/d/1sBFYgdxiYuZk35r-jueknFYlHofZJgqh/view?usp=sharing
								(edited)
							</p>
						</div>
						<div className="section__tags">
							<h3 className="company__loc">Tags:</h3>
							<div className="section__tags--wrapper">
								<button className="section__tags--button">Python</button>
								<button className="section__tags--button">C++</button>
								<button className="section__tags--button">Tensorflow</button>
								<button className="section__tags--button">LINUX/UNIX</button>
							</div>
						</div>
					</div>
					<div class="content__para design__change">
						<button className="profile__button" onClick={this.addPopup}>
							Apply
						</button>
					</div>
				</section>
			</div>
		);
	}
}

export default Landing;
