import Layout from "../src/components/Layout";
import Product from "../src/components/Product";
import client from '../src/components/ApolloClient';
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import HeroCarousel from "../src/components/home/hero-carousel";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function Home (props) {
	const responsive = {
		superLargeDesktop: {
		  // the naming can be any, depends on you.
		  breakpoint: { max: 4000, min: 3000 },
		  items: 6,
		  slidesToSlide: 1
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5,
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
				{/*Hero Carousel*/}
				{/* <HeroCarousel heroCarousel={heroCarousel}/> */}
				{/*Categories*/ }
				<div className="hero mx-auto my-32 px-4 xl:px-0">
				<h1 className="heading text-center">
						GUNS & THIGHS
					</h1>
					<div className="lg:container lg:mx-auto">
						<ParentCategoriesBlock productCategories={ productCategories }/>
					</div>	
				</div>
				{/*Hero Carousel*/}
				<div className="container mx-auto my-32 px-4 xl:px-0">
					<HeroCarousel heroCarousel={heroCarousel}/>
				</div>
				{/* <div className="product-categories-container container mx-auto my-32 px-4 xl:px-0">
					<h2 className="main-title text-xl mb-5 uppercase"><span className="main-title-inner">Categories</span></h2>
					<ParentCategoriesBlock productCategories={ productCategories }/>
				</div> */}
				{/*Products*/ }
				<div className="container mx-auto my-32 px-4 xl:px-0">
				<p className="description text-left">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
				<div className="products lg:container lg:mx-auto my-32 px-4 xl:px-0">
					<h2 className="products-main-title main-title mb-5 text-xl uppercase"><span className="main-title-inner">Products</span></h2>
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
					{/* </div> */}
				</div>
				<div className="container mx-auto my-32 px-4 xl:px-0">
				<h2 className="products-main-title main-title mb-5 text-xl uppercase"><span className="main-title-inner">MADE IN</span></h2>
					<h1 className="heading text-center">
						BENGALURU
					</h1>
				</div>
				<div className="container mx-auto my-32 px-4 xl:px-0">
					<h2 className="products-main-title main-title mb-5 text-xl uppercase"></h2>
					<marquee className="description py-4">This is basic example of marquee Lorem Ipsum is simply dummy text of the printing and typesetting industry</marquee>
					<h2 className="products-main-title main-title mb-5 text-xl uppercase"></h2>
				</div>
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
