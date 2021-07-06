import { isEmpty, isArray } from 'lodash';
import Link from 'next/link';
const Categories = ({category}) => {

    if ( isEmpty(category) || ! isArray( category ) ) {
        return null;
    }
    return (
        <span>
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
        </span>
    )
}

export default Categories
