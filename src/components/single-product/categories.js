import { isEmpty, isArray } from 'lodash';

const Categories = ({category}) => {

    if ( isEmpty(category) || ! isArray( category ) ) {
        return null;
    }
    return (
        <span>
                {
                    category.map( (item) => {
                        return (
                            <span key={item?.id}>
                                <span>{item?.name}</span>
                            </span>
                        )
                    })
                }
        </span>
    )
}

export default Categories
