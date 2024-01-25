import logoImage from '../assets/logoImage.svg';

export default function Logo() {
  return (
    <div className="group flex items-center gap-4 cursor-pointer">
      <img
        src={logoImage}
        className="group-hover:-translate-y-3 group-hover:rotate-12 group-hover:scale-110 transition-transform transition-duration"
        alt=""
      />
      <div className="relative">
        <h1 className="font-poppins font-bold text-3xl select-none dark:text-foreground-dark text-foreground-light after:content-[' '] after:w-full after:scale-x-0 group-hover:after:scale-x-100 after:h-1 dark:after:bg-foreground-dark after:absolute after:-bottom-2 after:left-0 after:transition-transform after:origin-right after:duration-300">
          FakeShop.
        </h1>
      </div>
    </div>
  );
}
