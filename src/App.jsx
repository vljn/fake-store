import Router from './components/Router';
import useCart from './hooks/useCart';

export default function App() {
  const cart = useCart();
  return (
    <>
      <Router cart={cart} />
    </>
  );
}
