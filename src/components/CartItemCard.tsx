import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart, CartItem } from '@/store/CartSlice';
import { Trash2, Plus, Minus } from 'lucide-react';

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard = ({ item }: CartItemCardProps) => {
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

export default CartItemCard;
