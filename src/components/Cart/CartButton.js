import classes from './CartButton.module.css';
import { interfaceActions } from '../../Store/interfaceSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartQty = useSelector(state => state.cart.totalQty);

  const toggelCartHandler = () => {
    dispatch(interfaceActions.toggle());
  }


  return (
    <button className={classes.button} onClick={toggelCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQty}</span>
    </button>
  );
};

export default CartButton;
