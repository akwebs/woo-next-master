import { isEmpty, isArray } from 'lodash';
import Link from 'next/link';
import Sound from "../Audio";

const Categories = ({category}) => {

    if ( isEmpty(category) || ! isArray( category ) ) {
        return null;
    }
    return (
        <Sound>
                {
                    category.map( (item) => {
                        return (
                            <Link href={`/category/${item?.slug}`}>
                                <a>
                                    <span key={item?.id}>
                                        <span>{item?.name}</span>
                                    </span>                                            
                                </a>
                            </Link>
                        )
                    })
                }
        </Sound>
    )
}

export default Categories
