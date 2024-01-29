import PropTypes from 'prop-types';
import Item from './Item';

export default function ItemsList({ items, cart }) {
  return (
    <div className="mx-8 lg:grid lg:grid-cols-[repeat(auto-fit,minmax(24rem,1fr))] lg:gap-12 lg:mx-20 ">
      {items.map((item) => (
        <Item
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          key={item.id}
          className="flex justify-center w-full transition-all"
          cart={cart}
        />
      ))}
    </div>
  );
}

ItemsList.propTypes = {
  items: PropTypes.array,
  cart: PropTypes.cart,
};
