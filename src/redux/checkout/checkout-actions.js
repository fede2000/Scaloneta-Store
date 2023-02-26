export const SAVE_SHIPPING_ADDRESS = 'SAVE_SHIPPING_ADDRESS'
export const SAVE_BILLING_ADDRESS = 'SAVE_BILLING_ADDRESS'

export const saveShippingAddress = (shippingAddress) => ({
    type: SAVE_SHIPPING_ADDRESS,
    payload: shippingAddress,
})
export const saveBillingAddress = (billingAddress) => ({
    type: SAVE_BILLING_ADDRESS,
    payload: billingAddress,
})