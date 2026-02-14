import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import CartItemCard from '@/components/CartItemCard';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
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

export default CartPage;
