import {useState, useContext} from "react";
import {useQuery, useMutation} from '@apollo/client';
import Link from "next/link";
import {v4} from 'uuid';
import cx from 'classnames';

import {AppContext} from "../context/AppContext";
import {getFormattedCart} from "../../functions";
import GET_CART from "../../queries/get-cart";
import ADD_TO_CART from "../../mutations/add-to-cart";
import Sound from "../Audio";

const AddToCart = (props) => {
    
    const {product} = props;

    const productQryInput = {
        clientMutationId: v4(), // Generate a unique id.
        productId: product.productId,
    };
    const [cart, setCart] = useContext(AppContext);
    const [showViewCart, setShowViewCart] = useState(false);
    const [requestError, setRequestError] = useState(null);
    const [addedCart, setAddedCart] = useState(false);
        // Get Cart Data.
    const {data, refetch} = useQuery(GET_CART, {
            notifyOnNetworkStatusChange: true,
            onCompleted: () => {

                // Update cart in the localStorage.
                const updatedCart = getFormattedCart(data);
                localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));

                // Update cart data in React Context.
                setCart(updatedCart);
            }
        });

    // Add to Cart Mutation.
    const [addToCart, {
        data: addToCartRes,
        loading: addToCartLoading,
        error: addToCartError
    }] = useMutation(ADD_TO_CART, {
        variables: {
            input: productQryInput,
        },
        onCompleted: () => {
            // On Success:
            // 1. Make the GET_CART query to update the cart with new values in React context.
            refetch();

            // 2. Show View Cart Button
            setShowViewCart(true)
            setAddedCart(true)
        },
        onError: (error) => {
            if (error) {
                setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
            }
        }
    });

    const handleAddToCartClick = async () => {
        setRequestError(null);
        await addToCart();
    };

    return (
        <div>
            {/*	Check if its an external product then put its external buy link */}
            {"ExternalProduct" === product.__typename ? (
                <Sound>
                    <a href={product?.externalUrl ?? '/'} target="_blank"
                       className="_2k33J JGkgU eNsxw _1m-Jy _3Wm5U">
						Buy now
                    </a>
                </Sound>
                ) :
                <Sound>
                    <button disabled={addToCartLoading} onClick={handleAddToCartClick} className="_2k33J JGkgU eNsxw _1m-Jy _3Wm5U">
                        { addToCartLoading ? 'Adding to cart...' : addedCart? 'Add more':'Add to cart' }
                    </button>
                </Sound>
            }
                {/* {cx(
                '',
                {'hover:bg-white hover:text-black hover:border-black': !addToCartLoading},
                {'opacity-50 cursor-not-allowed': addToCartLoading})}            
                {/* {showViewCart ? ( 
                <Link href="/cart">
                    <Sound>
                        <button
                            className="px-3 py-1 rounded-sm text-sm border-solid border border-current inline-block hover:bg-white hover:text-black hover:border-black">
                                View Cart
                        </button>
                    </Sound>
                </Link>
            ) : ''} */}
        </div>
    );
};

export default AddToCart;
