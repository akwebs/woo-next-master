import { useContext } from 'react';
import { AppContext } from "../context/AppContext";
import Link from 'next/link';

const CartIcon = () => {

	const [ cart ] = useContext( AppContext );
	const productsCount = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsCount : '';
	const totalPrice = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsPrice : '';

	return (
		<Link href="/cart">
			<a className="_3iw4N JGkgU eNsxw _3fxbX _3Wm5U">
			<span className="_1h2mV">cart</span>
			<span className="_2AKAD">{ productsCount ? <span>({ productsCount })</span> : '' }</span>
			<div className="_3pghL underline"></div>	
				{/*{ totalPrice ? <span>{ totalPrice }</span> : '' }*/}
			</a>
		</Link>

	)
};

export default CartIcon;
