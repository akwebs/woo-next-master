import Layout from '../../src/components/Layout';
import { useRouter } from 'next/router';
import client from '../../src/components/ApolloClient';
import AddToCartButton from '../../src/components/cart/AddToCartButton';
import {PRODUCT_BY_SLUG_QUERY, PRODUCT_SLUGS} from '../../src/queries/product-by-slug';
import { isEmpty } from 'lodash';
import GalleryCarousel from "../../src/components/single-product/gallery-carousel";
import Price from "../../src/components/single-product/price";
import Categories from "../../src/components/single-product/categories";

export default function Product(props) {
	const { product } = props;

    const router = useRouter()
    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

	return (
		<Layout>
			{ product ? (
                <div className="_3Vq1m">
                    <section className="_1Qfuq _3zD8d NykPf">
                        <div className="_3T7TB">
                            <div className="product-images">
                                { 
                                // !isEmpty( product?.galleryImages?.nodes ) ? (
                                //     <GalleryCarousel gallery={product?.galleryImages?.nodes}/>
                                // ) : 
                                !isEmpty( product.image ) ? (
                                    <img
                                        src={ product?.image?.sourceUrl }
                                        alt="Product Image"
                                        width="100%"
                                        height="auto"
                                        srcSet={ product?.image?.srcSet }
                                    />
                                ) : null }
                            </div>
                        </div>
                        <div className="_233Wl">
                            <div className="_2J18R _2SkgR">
                                <div className="_1v8wi"></div>
                                <div className="_1JL7A"></div>
                            </div>
                            <div className="_1p_gw m2mc8">
                                <div className="_9442B">
                                    <div className="_1RCmr _74Au8 QA_eG">
                                        <div className="_2k33J">
                                            <Categories category={product.productCategories.nodes}></Categories>
                                        </div>
                                    </div>
                                    <div className="_1RCmr WEVJh QA_eG">
                                        <span className="_1YBrD">{ product.name }</span>
                                    </div>
                                </div>
                                <div className="_2L4Ug _9442B">
                                    <div className="_1RCmr _74Au8 QA_eG">
                                        <AddToCartButton product={ product }/>
                                    </div>
                                    <div className="_1RCmr WEVJh QA_eG" >
                                        <Price salesPrice={product?.price} regularPrice={product?.regularPrice}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="_2JpCA">
                            <button className="_1RCmr QA_eG JGkgU eNsxw _1m-Jy _3Wm5U" >
                                <span className="_1YBrD" >D</span>
                                <span className="_1YBrD" >e</span>
                                <span className="_1YBrD" >s</span>
                                <span className="_1YBrD" >c</span>
                                <span className="_1YBrD" >r</span>
                                <span className="_1YBrD" >i</span>
                                <span className="_1YBrD" >p</span>
                                <span className="_1YBrD" >t</span>
                                <span className="_1YBrD" >i</span>
                                <span className="_1YBrD" >o</span>
                                <span className="_1YBrD" >n</span>
                                <div className="_3pghL underline" ></div>
                            </button>
                        </div>
                        <div className="_1RCmr _3OASo QA_eG" >
                            <span className="_1YBrD" >A</span>
                            <span className="_1YBrD" >V</span>
                            <span className="_1YBrD" >A</span>
                            <span className="_1YBrD" >I</span>
                            <span className="_1YBrD" >L</span>
                            <span className="_1YBrD" >A</span>
                            <span className="_1YBrD" >B</span>
                            <span className="_1YBrD" >L</span>
                            <span className="_1YBrD" >E</span>
                            <span className="_1YBrD" > </span>
                            <span className="_1YBrD" >F</span>
                            <span className="_1YBrD" >O</span>
                            <span className="_1YBrD" >R</span>
                            <span className="_1YBrD" > </span>
                            <span className="_1YBrD" >O</span>
                            <span className="_1YBrD" >R</span>
                            <span className="_1YBrD" >D</span>
                            <span className="_1YBrD" >E</span>
                            <span className="_1YBrD" >R</span>
                        </div>
                    </section>
                </div>
			) : (
				''
			) }
		</Layout>
	);
};

{/* <div className="single-product container mx-auto my-32 px-4 xl:px-0">
					<div className="grid md:grid-cols-2 gap-4">
						<div className="product-images">

							{ !isEmpty( product?.galleryImages?.nodes ) ? (
                                <GalleryCarousel gallery={product?.galleryImages?.nodes}/>
							) : !isEmpty( product.image ) ? (
                                <img
                                    src={ product?.image?.sourceUrl }
                                    alt="Product Image"
                                    width="100%"
                                    height="auto"
                                    srcSet={ product?.image?.srcSet }
                                />
							) : null }
						</div>
						<div className="product-info">
							<h4 className="products-main-title text-2xl uppercase">{ product.name }</h4>
							<div dangerouslySetInnerHTML={ {
									__html: product.description,
								} }
								className="product-description mb-5"
							/>
                            <Price salesPrice={product?.price} regularPrice={product?.regularPrice}/>
							<AddToCartButton product={ product }/>
						</div>
					</div>

				</div> */}


export async function getStaticProps(context) {

    const {params: { slug }} = context

    const {data} = await client.query({
        query: PRODUCT_BY_SLUG_QUERY,
        variables: { slug }
    })

    return {
        props: {
            product: data?.product || {},
        },
        revalidate: 1
    };
}

export async function getStaticPaths () {
    const { data } = await client.query({
        query: PRODUCT_SLUGS
    })

    const pathsData = []

    data?.products?.nodes && data?.products?.nodes.map((product) => {
        if (!isEmpty(product?.slug)) {
            pathsData.push({ params: { slug: product?.slug } })
        }
    })

    return {
        paths: pathsData,
        fallback: true
    }
}
