import React from 'react';

import classes from './ErrorModal.module.css';

const ErrorModal = React.memo((props) => {
	return (
		<>
			<div className={classes.backdrop} onClick={props.onClose} />
			<div className={classes['error-modal']}>
				<h2>Terjadi Kesalahan!</h2>
				<p>{props.children}</p>
				<div className={classes['error-modal__actions']}>
					<button
						onClick={props.onClose}
						className="bg-someting-green hover:bg-someting-dark-green text-white font-bold py-2 px-4 rounded my-4"
					>
						Tutup
					</button>
				</div>
			</div>
		</>
	);
});

export default ErrorModal;
