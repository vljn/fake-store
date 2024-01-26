import PropTypes from 'prop-types';
import Item from './Item';

export default function ItemsList({ items }) {
  console.log(items);
  return (
    <div className="px-20 grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-8">
      {items.map((item) => (
        <Item
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          key={item.id}
          className="flex justify-center w-full transition-all"
        />
      ))}
    </div>
  );
}

ItemsList.propTypes = {
  items: PropTypes.array,
};
