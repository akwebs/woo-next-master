import Link from 'next/link';
import CartIcon from "./cart/CartIcon";
import Logo from "./LogoImg";
import Menu from "./MenuBtn";
import { useState } from 'react';
import Sound from './Audio';



const Nav = () => {
	const [ isMenuVisible, setMenuVisibility ] = useState(false);
	return (
			<nav className="p-4">
			<div className="flex items-center justify-between flex-wrap px-3 mx-auto">

				<div className="flex items-center flex-shrink-0 text-white">
					<span className="font-semibold text-xl tracking-tight">
					<Sound>
					<Link href="/">
					<a className="enime logo">
						<Logo/>
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
					<span></span>
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
							Profile
						</a>
						</Sound>
						<Sound>
						<a href="#responsive-header" className="block mt-4 text-white text-center hover:text-white mr-10">
						<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
							Wishlist
						</a>
						</Sound>
						<Sound>
						<CartIcon/>
						</Sound>
					</div>
					<div className="hover-close" onMouseEnter={() => setMenuVisibility(! isMenuVisible)}>
							
					</div>
				</div>

			</div>
		</nav>
	)
};

export default Nav;
