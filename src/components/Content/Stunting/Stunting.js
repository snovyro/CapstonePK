import React from 'react';
import stunting from '@assets/stunting.png';
import classes from './stunting.module.css';

const Stunting = () => {
	return (
		<div className={classes['wrapper']}>
			<h1>Stunting</h1>
			<hr />
			<div className={classes['content-main']}>
				<section>
					<h3>Apa Itu Stunting?</h3>
					<p>
						Sebagian besar masyarakat mungkin belum memahami
						istilah yang disebut stunting. Stunting adalah
						masalah kurang gizi kronis yang disebabkan oleh
						kurangnya asupan gizi dalam waktu yang cukup lama,
						sehingga mengakibatkan gangguan pertumbuhan pada
						anak yakni tinggi badan anak lebih rendah atau
						pendek (kerdil) dari standar usianya.
					</p>
				</section>
			</div>
			<div className={classes['new-paragraph']}>
				<div className={classes['img-container']}>
					<img className="shadow-lg" alt="" src={stunting} />
					<p>
						Masalah stunting dipengaruhi oleh rendahnya akses
						terhadap makanan dari segi jumlah dan kualitas
						gizi, serta seringkali tidak beragam. Selanjutnya,
						dipengaruhi juga oleh pola asuh yang kurang baik
						terutama pada aspek perilaku, terutama pada
						praktek pemberian makan bagi bayi dan Balita.
						Selain itu, stunting juga dipengaruhi dengan
						rendahnya akses terhadap pelayanan kesehatan,
						termasuk di dalamnya adalah akses sanitasi dan air
						bersih. Stunting merupakan ancaman utama terhadap
						kualitas manusia Indonesia, juga ancaman terhadap
						kemampuan daya saing bangsa. Hal ini dikarenakan
						anak stunted, bukan hanya terganggu pertumbuhan
						fisiknya (bertubuh pendek/kerdil) saja, melainkan
						juga terganggu perkembangan otaknya, yang mana
						tentu akan sangat mempengaruhi kemampuan dan
						prestasi di sekolah, produktivitas dan kreativitas
						di usia-usia produktif.
					</p>
				</div>
			</div>
			<div className={classes['last-paragraph']}>
				<section>
					<h3>Kondisi Stunting di indonesia</h3>
					<p>
						Berdasarkan data Riset Kesehatan Dasar (Riskesdas)
						Indonesia tahun 2018 menunjukkan penurunan
						prevalensi stunting dibandingkan dengan
						tahun-tahun sebelumnya. Tahun 2013, angka stunting
						mencapai 37,2% dan tahun 2018 turun menjadi 30,8 %
						dengan 19,3% balita pendek dan 11,5% balita sangat
						pendek. Sedangkan, data hasil Survei Status Gizi
						Balita Indonesia (SSGBI) tahun 2019 menunjukkan
						penurunan stunting jika dibandingkan dengan
						Riskesdas 2018, yaitu 27,67%.
					</p>
				</section>
			</div>
			<div>
				<section>
					<p>
						Kasus stunting terjadi hampir di seluruh wilayah
						di Indonesia dan di seluruh kelompok sosial
						ekonomi. Tahun 2019 tercatat jumlah stunting masih
						27,7 % .Oleh karena itu, pencegahan dan penanganan
						stunting menjadi salah satu prioritas pembangunan
						nasional. Presiden menargetkan penurunan Stunting
						tahun 2024 target turun menjadi 14 %. Percepatan
						penurunan stunting di Indonesia tingkat pusat
						melibatkan 23 Kementerian/Lembaga (salah satunya
						Kemensos). Pencegahan Stanting melalui program
						nasional Kementerian Sosial dapat dilakukan
						melalui program perlindungan sosial yaitu PKH dan
						Bantuan Pangan sembako dengan fokus program yaitu
						memastikan ketersediaan pangan yang bergizi bagi
						rumah tangga KPM dan pemberiaan bantuan biaya
						untuk pemeriksaan kesehatan rutin bagi ibu hamil.
						Program Bantuan Pangan Sembako dapat dilakukan
						peningkatan akses pangan bergizi, peningkatan
						akses dan kualitas pelayanan gizi. Untuk program
						PKH mendorong KPM memiliki akses dan memanfaatkan
						pelayanan sosial dasar kesehatan, Pendidikan,
						pangan dan gizi. Kemudian juga dapat memfungsikan
						Fungsional Penyuluh Sosial dan Penyuluh Sosial
						Masyarakat merupakan pilar/ SDM dari Kementerian
						Sosial RI yang berperan dalam meminimalisir PPKS
						serta permasalahan program nasional salah stunya
						stunting melalui Komunikasi, Informasi, Motivasi
						dan Edukasi (KIME).
					</p>
				</section>
			</div>
		</div>
	);
};

export default Stunting;
