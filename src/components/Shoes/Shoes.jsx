import { Fragment } from 'react';
import AvailableShoes from './AvailableShoes';
import ShoesSummary from './ShoesSummery'
const Shoes=()=>{
    return(
        <Fragment>
            <ShoesSummary/>
            <AvailableShoes/>
        </Fragment>

    );
}
export default Shoes;