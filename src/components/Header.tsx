import Link from "next/link";
import { useRouter } from "next/router";
import { FaPlay } from "react-icons/fa";
import ThemeToggler from "./ThemeToggler";

const menus = [
  { url: '/', text: 'Home' },
  { url: '/Project', text:'Project'},
  { url: '/blog', text: 'Blog' },
  { url: '/ContactUs', text: 'Contact Us'},
];



const Header: React.FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const renderMenu = menus.map((menu) => (
    <div className="flex" key={menu.url}>
      <FaPlay className={currentRoute === menu.url ? "text-blue-600 dark:text-white " : "text-white dark:text-slate-800"}
      />
      <Link href={menu.url} className="text-slate-800 dark:text-slate-100">
        {menu.text}
      </Link>
    </div>
  ));

  return (
    <div>
      <div className="flex justify-between mt-6 font-sans">
        <Link href="/">
          <p className="font-bold text-2xl flex ml-10 text-slate-800 dark:text-slate-100 ">
            TRIOLI
          </p>
        </Link>
        <div className="flex justify-center space-x-8 font-bold">
          {renderMenu}
        </div>
        <div className="flex">
          <div className="pr-10">
            <ThemeToggler />
          </div>
          <Link
            href="/letstalk"
            className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-right justify-end ... mr-10 ">
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;