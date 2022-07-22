import React from 'react';
import './DataTerkini.css';

const DataTerkini = () => {
	return (
		<div>
			<section className="data">
				<div className="container-data">
					<div className="row">
						<div className="title-data">
							<h3 aria-label="Heading Data">
								Presentasi Data Balita Kekurangan gizi
								provinsi Jakarta
							</h3>
							<p>
								Status gizi balita berdasarkan indeks
								BB/U, TB/U, dan BB/TB (%) pada tahun
								2018
							</p>
						</div>
					</div>
					<div className="data-card">
						<div className="card">
							<div className="avatar">
								<img
									src="https://i.postimg.cc/wBm80vV0/baby-boy-icon-3.png"
									alt=""
								/>
							</div>
							<div className="content">
								<h4 className="location">
									KEPULAUAN SERIBU
								</h4>
								<p className="description">
									BB/U: 1,8% <br /> TB/U: 12,8%{' '}
									<br /> BB/TB: 3,1%
								</p>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img
									src="https://i.postimg.cc/HL9wX0Mm/baby-crying-icon.png"
									alt=""
								/>
							</div>
							<div className="content">
								<h4 className="location">
									JAKARTA UTARA
								</h4>
								<p className="description">
									BB/U: 0,7% <br /> TB/U: 0,7% <br />{' '}
									BB/TB: 1%
								</p>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img
									src="https://i.postimg.cc/HsFC5X0V/baby2.png"
									alt=""
								/>
							</div>
							<div className="content">
								<h4 className="location">
									JAKARTA TIMUR
								</h4>
								<p className="description">
									BB/U: 0,5% <br /> TB/U: 0,3% <br />{' '}
									BB/TB: 0,5%
								</p>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img
									src="https://i.postimg.cc/JnCF4QLW/baby-laughing-icon.png"
									alt=""
								/>
							</div>
							<div className="content">
								<h4 className="location">
									JAKARTA SELATAN
								</h4>
								<p className="description">
									BB/U: 0,2% <br /> TB/U: 0,1% <br />{' '}
									BB/TB: 0,2%
								</p>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img
									src="https://i.postimg.cc/fTzVp41x/baby.png"
									alt=""
								/>
							</div>
							<div className="content">
								<h4 className="location">
									JAKARTA PUSAT
								</h4>
								<p className="description">
									BB/U: 0,5% <br /> TB/U: 2,4% <br />{' '}
									BB/TB: 0,6%
								</p>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img
									src="https://i.postimg.cc/rwh1JBNp/baby-vomit-icon.png"
									alt=""
								/>
							</div>
							<div className="content">
								<h4 className="location">
									JAKARTA BARAT
								</h4>
								<p className="description">
									BB/U: 0,6% <br /> TB/U: 0,8% <br />{' '}
									BB/TB: 0,7%
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default DataTerkini;
