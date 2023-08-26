import { interfaceActions } from "./interfaceSlice"
import { cartActions } from "./cart-slice"



export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-http-project-dcdba-default-rtdb.firebaseio.com/cart.json');

            if (!response.ok) {
                throw new Error('could not fetch cart data');
            }

            const data = await response.json();

            return data;
        }
        try{
           const cartData = await fetchData();
           dispatch(cartActions.replaceCart({
            items : cartData.items || [],
            totalQty : cartData.totalQty
           }));
        }catch(error){
            dispatch(interfaceActions.showNotification({
                status: 'error',
                title: 'error',
                message: 'fetching cart data failed'
            }))
        }
    }
}


export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(interfaceActions.showNotification({
            status: 'pending',
            title: 'sending....',
            message: 'sending cart data!'
        }))

        const sendRequest = async () => {
            const response = await fetch('https://react-http-project-dcdba-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        items : cart.items,
                        totalQty : cart.totalQty
                    })
                });

            if (!response.ok) {
                throw new Error('cart data failed');
            }
        }

        try {
            await sendRequest();

            dispatch(interfaceActions.showNotification({
                status: 'success',
                title: 'success',
                message: 'sent data successfully'
            }))
        } catch (error) {
            dispatch(interfaceActions.showNotification({
                status: 'error',
                title: 'error',
                message: 'sending cart data failed'
            }))
        }


    }
}