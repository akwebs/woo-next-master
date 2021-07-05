import Layout from "../src/components/Layout";
import Product from "../src/components/Product";
import client from '../src/components/ApolloClient';
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import HeroCarousel from "../src/components/home/hero-carousel";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'
export default function Home (props) {
	const responsive = {
		superLargeDesktop: {
		  // the naming can be any, depends on you.
		  breakpoint: { max: 4000, min: 3000 },
		  items: 4,
		  slidesToSlide: 1
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 1 // optional, default to 1.
		  },
		  tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
			slidesToSlide: 1 // optional, default to 1.
		  },
		  mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		  }
	  };
	const { products, productCategories, heroCarousel } = props || {};

	return (
			<Layout>
				<div className="_3Vq1m _23Dox">
					<section className="NykPf">
						<ul className="AlRLY">
							<li className="_1KKPR"><button className="_3VAwH JGkgU eNsxw _1m-Jy _3Wm5U" >intro<div className="_3pghL underline"></div></button></li>
							<li className="_1KKPR"><button className="_3VAwH JGkgU eNsxw _1m-Jy _3Wm5U" >about<div className="_3pghL underline"></div></button></li>
							<li className="_1KKPR"><button className="_3VAwH JGkgU eNsxw _1m-Jy _3Wm5U" >featured<div className="_3pghL underline"></div></button></li>
						</ul>
						<h1 className="_1RCmr -NDSt _3HbGi QA_eG _1-LSP">
							<span className="_2k33J _2weTr">
								<span className="_1YBrD">A</span>
							</span>
							<span className="_2k33J _2weTr">
								<span className="_1YBrD">r</span>
							</span>
							<span className="_2k33J _2weTr">
								<span className="_1YBrD">t</span>
							</span>
							<br></br>
							<span className="_2k33J _2weTr">
								<span className="_1YBrD">O</span>
							</span>
							<span className="_2k33J _2weTr">
								<span className="_1YBrD">b</span>
							</span>
							<span className="_2k33J _2weTr">
								<span className="_1YBrD">j</span>
							</span>
							<span className="_2k33J _2weTr">
								<span className="_1YBrD">e</span>
							</span>
							<span className="_2k33J _2weTr">
								<span className="_1YBrD">c</span>
							</span>
							<span className="_2k33J _2weTr">
								<span className="_1YBrD">t</span>
							</span>
							<span className="_2k33J _2weTr">
								<span className="_1YBrD">s</span>
							</span>	
						</h1>
					</section>
					<section className="NykPf">
						<div className="_1EBPT">
							<div className="_22TLJ _1BnkC _1yuDD _2eVCK">
								<div className="_2WsKB">
									<div className="_1RCmr _1c66u QA_eG" >
										<span className="_1YBrD" >A</span>
										<span className="_1YBrD" >p</span>
										<span className="_1YBrD" >o</span>
										<span className="_1YBrD" >l</span>
									</div>
								</div>
								<div className="_3mP2Y _3LzsC _2bfvV ">
									<Image className="_3o7Rg" src="/img/girls.jpg" alt="NAID" loading="eager" width="438" height="607"></Image>
								</div>
							</div>
							<div className="_22TLJ _3LmUO _3pWU7 _2eVCK">
								<div className="_2WsKB">
									<div className="_1RCmr _1c66u QA_eG" >
										<span className="_1YBrD" >N</span>
										<span className="_1YBrD" >A</span>
										<span className="_1YBrD" >I</span>
										<span className="_1YBrD" >D</span>
									</div>
								</div>
								<div className="_3mP2Y _3LzsC _2bfvV ">
									<Image className="_3o7Rg" src="/img/girls.jpg" alt="NAID" loading="eager" width="968" height="1161"></Image>
								</div>
							</div>
						</div>
					</section>
					<section className="NykPf">
						<div className="_2F1v8">
							<div className="XxnXU">
								<h2 className="_1RCmr QA_eG" >
									<span className="_1YBrD" >F</span>
									<span className="_1YBrD" >e</span>
									<span className="_1YBrD" >a</span>
									<span className="_1YBrD" >t</span>
									<span className="_1YBrD" >u</span>
									<span className="_1YBrD" >r</span>
									<span className="_1YBrD" >e</span>
									<span className="_1YBrD" >d</span>
								</h2>
								<a href="/objects" className="_1RCmr QA_eG JGkgU eNsxw _1m-Jy _3Wm5U" >
									<span className="_1YBrD" >v</span>
									<span className="_1YBrD" >i</span>
									<span className="_1YBrD" >e</span>
									<span className="_1YBrD" >w</span>
									<span className="_1YBrD" > </span>
									<span className="_1YBrD" >a</span>
									<span className="_1YBrD" >l</span>
									<span className="_1YBrD" >l</span>
									<span className="_1YBrD" > </span>
									<span className="_1YBrD" >o</span>
									<span className="_1YBrD" >b</span>
									<span className="_1YBrD" >j</span>
									<span className="_1YBrD" >e</span>
									<span className="_1YBrD" >c</span>
									<span className="_1YBrD" >t</span>
									<span className="_1YBrD" >s</span>
									<div className="_3pghL underline" ></div>
								</a>
							</div>
							<div className="z1SX-">
							{/* <div className="grid grid-cols-6 gap-4"> */}
								<Carousel 
									draggable={true}
									swipeable={true}
									responsive={responsive}
									autoPlaySpeed={1000}
									keyBoardControl={true}
									containerClass="carousel-container"
									>
									{ products.length ? (
										products.map( product => <Product key={ product.id } product={ product }/> )
									) : '' }
								</Carousel>
							</div>
							<div className="_2Amit">
								<div className="_1RCmr _2WCzB QA_eG" >
									<span className="_1YBrD" >d</span>
									<span className="_1YBrD" >r</span>
									<span className="_1YBrD" >a</span>
									<span className="_1YBrD" >g</span>
								</div>
								<div className="_1RCmr Gxe2w QA_eG" >
									<span className="_1YBrD" >0</span>
									<span className="_1YBrD" >1</span>
									<span className="_1YBrD" >/</span>
									<span className="_1YBrD" >0</span>
									<span className="_1YBrD" >6</span>
								</div>
							</div>
						</div>
					</section>
					<section className="NykPf">
						<div className="_2-Rh- _1ABwV ">
							<div className="oF1GG">
								<h2 className="_2dun8" >
									<span className="_2iQ9M">About</span>
								</h2>
								<p className="_1RCmr _1rsHF _1NsqH _1-LSP" >
									<span className="_2k33J" >
										<span className="_1YBrD _2STEJ">Existing between the</span>
									</span>
									<span className="_2k33J" >
										<span className="_1YBrD">boundaries of nature and culture,</span>
									</span>
									<span className="_2k33J" >
										<span className="_1YBrD">Matthew’s work conveys an evocative</span>
									</span>
									<span className="_2k33J" >
										<span className="_1YBrD">nostalgia through the use of historically</span>
									</span>
									<span className="_2k33J" >
										<span className="_1YBrD">revered natural materials. His work</span>
									</span>
									<span className="_2k33J" >
										<span className="_1YBrD">ranges from unique art objects to</span>
									</span>
									<span className="_2k33J" >
										<span className="_1YBrD">editioned productions and celebrates</span>
									</span>
									<span className="_2k33J" >
										<span className="_1YBrD">the union between heritage, natural</span>
									</span>
									<span className="_2k33J" >
										<span className="_1YBrD">materials, and refined craftsmanship.</span>
									</span>
								</p>
							</div>
						</div>
					</section>
				</div>
				{/*Hero Carousel*/}
				{/* <HeroCarousel heroCarousel={heroCarousel}/> */}
				{/*Categories*/ }
					{/* <div className="lg:container lg:mx-auto mx-4">
						<ParentCategoriesBlock productCategories={ productCategories }/>
					</div> */}
				{/*Hero Carousel*/}
				{/* <div className="lg:container lg:mx-auto mx-4 my-32 px-4 xl:px-0">
					<HeroCarousel heroCarousel={heroCarousel}/>
				</div> */}
				{/* <div className="product-categories-container lg:container lg:mx-auto mx-4 my-32 px-4 xl:px-0">
					<h2 className="main-title text-xl mb-5 uppercase"><span className="main-title-inner">Categories</span></h2>
					<ParentCategoriesBlock productCategories={ productCategories }/>
				</div> */}
				{/*Products*/ }
				{/* <div className="lg:container lg:mx-auto mx-4 my-32 px-4 xl:px-0">
					<h2 className="products-main-title main-title mb-5 text-xl uppercase"><span className="main-title-inner">ABOUT US</span></h2>
					<p className="description text-left">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div> */}
				
				{/* </div>
				<div className="lg:container lg:mx-auto mx-4 my-32 px-4 xl:px-0">
				<h2 className="products-main-title main-title mb-5 text-xl uppercase"><span className="main-title-inner">MADE IN</span></h2>
					<h1 className="heading text-center">
						BENGALURU
					</h1>
				</div>
				<div className="lg:container lg:mx-auto mx-4 my-32 px-4 xl:px-0">
					<h2 className="products-main-title main-title mb-5 text-xl uppercase"></h2>
					<marquee className="description py-4">This is basic example of marquee Lorem Ipsum is simply dummy text of the printing and typesetting industry</marquee>
					<h2 className="products-main-title main-title mb-5 text-xl uppercase"></h2>
				</div> */}
			</Layout>
	)
};

export async function getStaticProps () {

	const { data } = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );

	return {
		props: {
			productCategories: data?.productCategories?.nodes ? data.productCategories.nodes : [],
			products: data?.products?.nodes ? data.products.nodes : [],
			heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
		},
		revalidate: 1
	}

};
