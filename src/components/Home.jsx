import Header from './Header';
import Button from './Button';
import 'animate.css';

function Home() {
  return (
    <>
      <Header />
      <div>
        <h1 className="animate__animated animate__fadeInDown dark:text-foreground-dark text-foreground-light text-center text-6xl font-poppins mt-20 leading-relaxed max-sm:text-3xl">
          pay less, buy more.
        </h1>
        <div className="flex justify-center mt-10">
          <Button>check out</Button>
        </div>
      </div>
    </>
  );
}

export default Home;
