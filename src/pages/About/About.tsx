import React from 'react';
import Team from '../../assets/team.svg';
import Muti from '../../assets/muti.jpeg';
import Selvia from '../../assets/selvia.png';
import Megis from '../../assets/megis.jpeg';
import Thoriq from '../../assets/thoriqq.jpeg';
import Vaia from '../../assets/vaia.jpg';
import './About.css';

interface About {}

const About = () => {
	return (
		<div>
			<div className="about-section">
				<div className="container-about">
					<div className="content-section">
						<div className="title">
							<h1>Tentang Kami</h1>
						</div>
						<div className="content">
							<h2>Mari mengenal apa itu someting !</h2>
							<p>
								Hai Fams, kami membangun sebuah website
								sistem informasi untuk menyelesaikan
								keresahan yang dialami para orang tua
								ataupun calon orang tua. Website apakah
								ituu?? Ya, Someting membantu pasangan
								suami istri yang ingin mempunyai anak
								dan ibu yang sedang hamil untuk
								terhindar dari Stunting. Banyak fitur
								yang kami punya, dari fitur mengenai
								informasi stunting, gizi, MPASI, dan
								presentasi data balita yang mengalami
								stunting.
							</p>
						</div>
					</div>
					<div className="image-section">
						<img src={Team} alt="" />
					</div>
				</div>
			</div>
			<section className="team">
				<div className="container-team">
					<div className="row">
						<div className="title-team">
							<h3>Siapakah kami?</h3>
						</div>
					</div>

					<div className="team-card">
						<div className="card">
							<div className="avatar">
								<img src={Thoriq} alt="" />
							</div>
							<div className="content">
								<h4 className="name">THORIQ</h4>
								<a
									aria-label="Babang Thoriq"
									className="button"
									href="https://www.linkedin.com/in/thoriq-ilhami-zaidan-6ab628224/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fab fa-linkedin"></i>
									Contact
								</a>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img src={Muti} alt="" />
							</div>
							<div className="content">
								<h4 className="name">MUTIARA</h4>
								<a
									className="button"
									href="https://www.linkedin.com/in/mutiara-/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Contact
								</a>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img
									src={Selvia}
									className="rounded-circle z-depth-1 img-fluid"
								/>
							</div>
							<div className="content">
								<h4 className="name">SELVIA</h4>
								<a
									className="button"
									href="https://www.linkedin.com/in/selvia-eldina-35840621b/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Contact
								</a>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img
									src={Megis}
									className="rounded-circle z-depth-1 img-fluid"
								/>
							</div>
							<div className="content">
								<h4 className="name">MEGIS</h4>
								<a
									className="button"
									href="https://www.linkedin.com/in/christian-megis-85a166235/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Contact
								</a>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img
									src={Vaia}
									className="rounded-circle z-depth-1 img-fluid"
								/>
							</div>
							<div className="content">
								<h4 className="name">VAIA</h4>
								<a
									className="button"
									href="https://www.linkedin.com/in/vaia-sanu-ba7507225/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Contact
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
