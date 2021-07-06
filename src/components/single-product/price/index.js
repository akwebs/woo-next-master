import {isEmpty} from "lodash";

const Price = ({ regularPrice = 0, salesPrice }) => {

    if ( isEmpty( salesPrice ) ) {
    	return null;
    }

    /**
     * Get discount percent.
     *
     * @param {String} regularPrice
     * @param {String} salesPrice
     */
    const discountPercent = ( regularPrice, salesPrice ) => {
        if( isEmpty( regularPrice ) || isEmpty(salesPrice) ) {
            return null;
        }

        const formattedRegularPrice = parseInt( regularPrice?.substring(1) );
        const formattedSalesPrice = parseInt( salesPrice?.substring(1) );

        const discountPercent = ( ( formattedRegularPrice - formattedSalesPrice ) / formattedRegularPrice ) * 100;

        return {
            discountPercent: formattedSalesPrice !== formattedRegularPrice ? `(${discountPercent.toFixed(2)}%) OFF` : null,
            strikeThroughClass: formattedSalesPrice < formattedRegularPrice ? 'product-regular-price line-through text-green-600' : ''
        }
    }

    const productMeta = discountPercent( regularPrice, salesPrice );

    return (
        <span>
            {/* Regular price */}
            { productMeta?.discountPercent ? <span>{salesPrice}</span> : null }
            {/* Discounted price */}
            <span className={productMeta?.strikeThroughClass}>{ regularPrice }</span>
            {/* Discount percent */}
            <span className="product-discount">{productMeta?.discountPercent}</span>
            
        </span>
    )
}

export default Price
