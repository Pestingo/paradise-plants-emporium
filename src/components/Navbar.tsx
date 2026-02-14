import { Link } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-wide">
          <Leaf className="h-6 w-6" />
          Paradise Nursery
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="transition-opacity hover:opacity-80">Home</Link>
          <Link to="/plants" className="transition-opacity hover:opacity-80">Plants</Link>
          <Link to="/cart" className="relative transition-opacity hover:opacity-80">
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
