import ProductCategoryBlock from "./ParentCategoryBlock";

const ParentCategoriesBlock = ( props ) => {

	const { productCategories } = props || {};

	return (
		<div className="product-categories grid gap-1">
			{ productCategories.length ? (
				productCategories.map( ( productCategory, index ) => <ProductCategoryBlock key={ productCategory?.id ?? index }  category={ productCategory }/> )
			) : null }
		</div>
	)

};

export default ParentCategoriesBlock;
