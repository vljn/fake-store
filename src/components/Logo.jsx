import logoImage from '../assets/logoImage.svg';

export default function Logo() {
  return (
    <div className="group flex items-center gap-4 cursor-pointer">
      <img
        src={logoImage}
        className="group-hover:-translate-y-3 group-hover:rotate-12 group-hover:scale-110 transition-transform transition-duration"
        alt=""
      />
      <h1 className="font-poppins font-bold text-3xl select-none dark:text-foreground-dark text-foreground-light">
        FakeShop.
      </h1>
    </div>
  );
}
