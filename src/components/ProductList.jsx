import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/CartSlice';
import { plants, categories } from '../data/plants';
import { ShoppingCart } from 'lucide-react';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some(item => item.id === id);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-2 text-center text-4xl font-bold text-primary">Our Collection</h1>
      <p className="mb-12 text-center text-muted-foreground">Discover the perfect plant for every corner of your home</p>

      {categories.map(category => (
        <div key={category.key} className="mb-14">
          <h2 className="mb-6 border-b-2 border-primary/20 pb-2 text-2xl font-semibold text-foreground">
            {category.name}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {plants
              .filter(p => p.category === category.key)
              .map(plant => {
                const added = isInCart(plant.id);
                return (
                  <div key={plant.id} className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-card-foreground">{plant.name}</h3>
                      <p className="mb-3 text-xl font-bold text-primary">${plant.price.toFixed(2)}</p>
                      <button
                        disabled={added}
                        onClick={() =>
                          dispatch(addToCart({
                            id: plant.id,
                            name: plant.name,
                            price: plant.price,
                            image: plant.image,
                            category: plant.category,
                          }))
                        }
                        className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                          added
                            ? 'cursor-not-allowed bg-muted text-muted-foreground'
                            : 'bg-primary text-primary-foreground hover:opacity-90'
                        }`}
                      >
                        <ShoppingCart className="h-4 w-4" />
                        {added ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
