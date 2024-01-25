import Header from './Header';

export default function NotFound() {
  return (
    <>
      <Header path={'/'} />
      <div>
        <h1 className="dark:text-primary-dark text-primary-light text-9xl font-bold text-center mt-20">
          404 :/
        </h1>
        <p className="text-center mt-14 text-4xl mx-8">
          sorry, but the page you were looking for was not found.
        </p>
      </div>
    </>
  );
}
