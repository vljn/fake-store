import logoImage from '../assets/logoImage.svg';

export default function Logo() {
  return (
    <div className="group flex items-center px-10 py-10 gap-4 cursor-pointer">
      <img
        src={logoImage}
        className="group-hover:-translate-y-3 group-hover:rotate-12 transition-transform transition-duration"
        alt=""
      />
      <h1 className="font-poppins font-bold text-3xl select-none">FakeShop.</h1>
    </div>
  );
}
