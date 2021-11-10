import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addOrder } from '../Order/actions';

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

const paid = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const query = useQuery();
	const orderId = query.get('orderId');
	const resultCode = query.get('resultCode');
	const cartId = orderId.slice(4);
	if (resultCode === '0' || resultCode === '9000') {
		dispatch(addOrder());
		history.push(`/order/success/${cartId}`);
	}
	return (
		<div>
			<h1>Failed to pay with Momo.</h1>
		</div>
	);
};

export default paid;
