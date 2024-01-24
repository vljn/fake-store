import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <div className="flex items-center justify-between px-10 py-10">
      <Logo />
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
