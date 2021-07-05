import Link from 'next/link';
import CartIcon from "./cart/CartIcon";
import Logo from "./LogoImg";
import Menu from "./MenuBtn";
import { useState } from 'react';
import Sound from './Audio';



const Nav = () => {
	const [ isMenuVisible, setMenuVisibility ] = useState(false);
	return (
			<nav>
				<div className="flex items-center justify-between flex-wrap mx-auto">
					<div className="flex items-center flex-shrink-0 text-white">
						<span className="font-semibold text-xl tracking-tight">
							<Sound>
								<Link href="/">
									<a className="enime logo">
										<svg className="_3szyq" width="315" height="25" viewBox="0 0 315 25"><title>GUN &amp; Thighs Home</title><g fill="#F5F0ED" fillRule="nonzero" stroke="#F5F0ED" strokeWidth="1.162"><path d="M45.276,1c4.362,0,6.345,1.983,6.345,5.552v.793H46.862V6.552c0-.4-.4-.793-1.586-.793H35.362c-1.19,0-1.586.4-1.586.793v11.5c0,.4.4.793,1.586.793h9.914c1.19,0,1.586-.4,1.586-.793V14.879H37.741V10.121h13.88v7.931c0,3.965-1.983,5.551-6.345,5.551H35.759c-4.362,0-6.345-1.982-6.345-5.551V6.552C29.414,2.586,31.4,1,35.759,1Z"></path><path d="M70.655,18.845c1.19,0,1.586-.4,1.586-.793V1H77V18.052c0,3.965-1.983,5.551-6.345,5.551H60.741c-4.362,0-6.344-1.982-6.344-5.551V1h4.758V18.052c0,.4.4.793,1.586.793Z"></path><path d="M84.535,8.534V24l-5.156-.4V1h5.156L97.224,16.466V1h4.759V23.6H96.828Z"></path><path d="M121.017,1c4.362,0,6.345,1.983,6.345,5.552v.793H122.6V6.552c0-.4-.4-.793-1.586-.793H111.1c-1.189,0-1.586.4-1.586.793V8.931c0,.4.4.793,1.586.793h9.914c4.362,0,6.345,1.983,6.345,5.552v2.379c0,3.966-1.983,5.552-6.345,5.552l-9.914.4c-4.362,0-6.344-1.982-6.344-5.551v-.793h4.758v.793c0,.4.4.793,1.586.793h9.914c1.19,0,1.586-.4,1.586-.793v-2.38c0-.4-.4-.793-1.586-.793H111.1c-4.362,0-6.344-1.982-6.344-5.551V6.948c0-3.965,1.982-5.551,6.344-5.551Z"></path><path d="M141.241,7.345H146v3.569h-4.759c-.793,0-1.189,0-1.189.4V12.9c0,.4.4.4,1.189.4h5.949V12.1h3.569v1.19h1.189v3.569h-1.189v2.379c0,.4.4.4,1.189.4v3.569a7.368,7.368,0,0,1-2.776-.793A6.325,6.325,0,0,1,146,23.6h-4.759c-3.172,0-4.758-1.189-4.758-3.965V18.052a5.637,5.637,0,0,1,.793-2.38,4.246,4.246,0,0,1-.793-2.379V11.707C136.879,8.931,138.069,7.345,141.241,7.345Zm5.949,9.914h-5.949c-.793,0-1.189,0-1.189.4v1.586c0,.4.4.4,1.189.4H146c.793,0,1.19,0,1.19-.4Z"></path><path d="M168.6,5.759V23.6h-4.758V5.759h-9.121V1h22.6V5.759Z"></path><path d="M180.1,1h4.759v9.121h13.086V1h4.759V23.6h-4.759v-9.12H184.862V23.6H180.1Z"></path><path d="M210.241,1V23.6h-4.758V1Z"></path><path d="M228.879,1c4.362,0,6.345,1.983,6.345,5.552v.793h-4.759V6.552c0-.4-.4-.793-1.586-.793h-9.914c-1.189,0-1.586.4-1.586.793v11.5c0,.4.4.793,1.586.793h9.914c1.19,0,1.586-.4,1.586-.793V14.879h-9.12V10.121h13.879v7.931c0,3.965-1.983,5.551-6.345,5.551h-9.914c-4.362,0-6.344-1.982-6.344-5.551V6.552C212.621,2.586,214.6,1,218.965,1Z"></path><path d="M237.6,1h4.759v9.121h13.086V1h4.759V23.6h-4.759v-9.12H242.362V23.6H237.6Z"></path><path d="M279.241,1c4.362,0,6.345,1.983,6.345,5.552v.793h-4.758V6.552c0-.4-.4-.793-1.587-.793h-9.913c-1.19,0-1.587.4-1.587.793V8.931c0,.4.4.793,1.587.793h9.913c4.362,0,6.345,1.983,6.345,5.552v2.379c0,3.966-1.983,5.552-6.345,5.552h-9.913c-4.363,0-6.345-1.983-6.345-5.552v-.793h4.758v.793c0,.4.4.793,1.587.793h9.913c1.19,0,1.587-.4,1.587-.793V15.276c0-.4-.4-.793-1.587-.793h-9.913c-4.362,0-6.345-1.983-6.345-5.552V6.552c0-3.966,1.983-5.552,6.345-5.552Z"></path></g></svg>
									</a>
								</Link>
							</Sound>
						</span>
					</div>
					{/*Menu button*/}
					<div className="block onTop">
						<Sound>
							<button onMouseEnter={() => setMenuVisibility(! isMenuVisible)} className="flex items-center px-3 py-2 border rounded text-white border-black hover:text-white hover:border-black">
								<Menu/>
							</button>
						</Sound>
					</div>
					{/*MMenu in mobile*/}
					<div className={`${ isMenuVisible ? 'show' : 'hide' } menu overflow-hidden p-10`}>
						<div className="text-sm font-medium uppercase ">
							<Link href="/categories">
								<a className="block mt-4 text-white hover:text-white mr-10">
									Categories
								</a>
							</Link>
							<Link href="/">
								<a className="block mt-4 text-white hover:text-white mr-10">
									Women
								</a>
							</Link>
							<Link href="/">
								<a className="block mt-4 text-white hover:text-white mr-10">
									Kids
								</a>
							</Link>
							<Link href="/">
								<a className="block mt-4 text-white hover:text-white mr-10">
									Home & Living
								</a>
							</Link>
							<Link href="/">
								<a className="block mt-4 text-white hover:text-white mr-10">
									Offers
								</a>
							</Link>
						</div>
						<div className="text-sm font-medium">
							<Sound>
								<a href="#responsive-header" className="block mt-4 text-white text-center hover:text-white mr-10">
									<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
									<span>Profile</span>
								</a>
							</Sound>
							<Sound>
								<a href="#responsive-header" className="block mt-4 text-white text-center hover:text-white mr-10">
									<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
									<span>Wishlist</span>
								</a>
							</Sound>
							<Sound>
								<CartIcon/>
							</Sound>
						</div>
						<div className="hover-close" onMouseEnter={() => setMenuVisibility(! isMenuVisible)}></div>
					</div>

				</div>
		</nav>
	)
};

export default Nav;
