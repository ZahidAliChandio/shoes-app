import { Fragment } from 'react'
import HeaderCartButton from './HeardCartButton'
import shoesImage from '../../assets/shoes-bg.jpg'
import classes from './Header.module.css'
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1 className={classes.title}>ShopShoes</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={shoesImage} alt="Long lasting and comfortable shoes" />
            </div>
        </Fragment>
    )
}

export default Header
