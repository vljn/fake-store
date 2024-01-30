import Header from './Header';

export default function NotFound() {
  return (
    <>
      <Header path={'/'} />
      <div>
        <h1 className="dark:text-primary-dark text-primary-light text-6xl sm:text-8xl lg:text-9xl font-bold text-center mt-10 sm:mt-20">
          404 :/
        </h1>
        <p className="text-center mt-8 sm:mt-10 md:mt-14 sm:text-4xl sm:mx-8 mx-16 text-2xl">
          sorry, but the page you were looking for was not found.
        </p>
      </div>
    </>
  );
}
