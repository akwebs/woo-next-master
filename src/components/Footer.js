import {Facebook, Instagram, Twitter, Youtube} from "./icons";

const Footer = () => (
	<div className="footer bg-black text-white fixed">
		<div className="container mx-auto">
			<div className="footer-text flex-none sm:grid text-center md:flex items-center justify-between">
				<p className="text-gray">Learn the latest tech skills</p>
				<p>© AK Webs 2021</p>
				<ul className="social-links mt-8 flex  align-center justify-center">
					<li><a href="https://www.facebook.com/" className="fa fa-facebook" target="_blank"><Facebook/></a></li>
					<li className="ml-2 mt-1"><a href="https://twitter.com/" target="_blank"><Twitter/></a></li>
					<li className="ml-2 mt-1"><a href="https://youtube.com/" className="fa fa-youtube" target="_blank"><Youtube/></a></li>
					<li className="ml-2"><a href="https://www.instagram.com/" className="fa fa-instagram" target="_blank"><Instagram/></a></li>
				</ul>
			</div>
			
		</div>
	</div>
);

export default Footer;
