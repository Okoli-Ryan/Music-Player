import React from 'react';
import { useDispatch } from 'react-redux';

const Header = () => {
	const dispatch = useDispatch();
	return (
		<div
			className="header"
			onClick={() =>
				dispatch({
					type: 'expand-false',
				})
			}
		>
			<h1 className="app-name">
				<span>R</span>aadio
			</h1>
		</div>
	);
};

export default Header;
