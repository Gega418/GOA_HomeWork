const Cart = ({cart}) => {
  return (
    <div>
      <h2>my cart</h2>
      {cart.length === 0 ? (
        <p>cart empty</p>
      ):(
        <div>
            {cart.map((item) => {
                <div key={item.id}>
                    <img src={item.image} alt="" />
                </div>
            })}
        </div>
      )}
    </div>
  );
};

export default Cart