import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../store/CartSlice';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Trash2, Plus, Minus } from 'lucide-react';

// Individual cart item card with quantity controls and delete
const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 rounded-xl border bg-card p-4 shadow-sm">
      <img src={item.image} alt={item.name} className="h-20 w-20 rounded-lg object-cover" />
      <div className="flex-1">
        <h3 className="font-semibold text-card-foreground">{item.name}</h3>
        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch(decreaseQuantity(item.id))}
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={() => dispatch(increaseQuantity(item.id))}
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <p className="w-20 text-right font-bold text-primary">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="flex h-8 w-8 items-center justify-center rounded-lg text-destructive transition-colors hover:bg-destructive/10"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
};

// Full shopping cart page with totals, checkout, and continue shopping
const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="container mx-auto min-h-[60vh] px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-primary">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground/40" />
          <p className="mb-6 text-lg text-muted-foreground">Your cart is empty</p>
          <Link
            to="/plants"
            className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Browse Plants
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="flex flex-col gap-4 lg:col-span-2">
            {cartItems.map(item => (
              <CartItemCard key={item.id} item={item} />
            ))}
          </div>
          <div className="h-fit rounded-xl border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-card-foreground">Order Summary</h2>
            <div className="mb-2 flex justify-between text-muted-foreground">
              <span>Items ({totalItems})</span>
              <span>${totalCost.toFixed(2)}</span>
            </div>
            <div className="my-4 border-t" />
            <div className="mb-6 flex justify-between text-lg font-bold text-foreground">
              <span>Total</span>
              <span>${totalCost.toFixed(2)}</span>
            </div>
            <button
              onClick={() => alert('Coming Soon!')}
              className="mb-3 w-full rounded-lg bg-secondary py-3 font-semibold text-secondary-foreground transition-opacity hover:opacity-90"
            >
              Checkout (Coming Soon)
            </button>
            <Link
              to="/plants"
              className="flex items-center justify-center gap-2 text-sm text-primary transition-opacity hover:opacity-80"
            >
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
