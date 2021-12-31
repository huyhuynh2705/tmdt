/**
 *
 * Checkout
 *
 */

import React from 'react';

import Button from '../../Common/Button';

const Checkout = (props) => {
  const { authenticated, handleShopping, handleCheckout, placeOrder, momoPay } =
    props;

  return (
    <div className="easy-checkout">
      <div className="checkout-actions">
        <Button
          variant="primary"
          text="Continue shopping"
          onClick={() => handleShopping()}
        />
        {authenticated ? (
          <div style={{ width: '100%', marginTop: '10px' }}>
            <Button
              variant="primary"
              text="Place Order"
              onClick={() => placeOrder()}
            />
            <Button
              variant="primary"
              text="Momo Pay"
              onClick={() => momoPay()}
            />
          </div>
        ) : (
          <Button
            variant="primary"
            text="Proceed To Checkout"
            onClick={() => handleCheckout()}
          />
        )}
      </div>
    </div>
  );
};

export default Checkout;
