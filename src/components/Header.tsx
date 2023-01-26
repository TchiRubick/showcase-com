import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/router";
import ThemeToggler from "./ThemeToggler";


const menus = [
  { url: '/', text: 'Home' },
  { url: '/project', text:'Project'},
  { url: '/blog', text: 'Blog' },
  { url: '/contactus', text: 'Contact Us'}
];



const Header: React.FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const renderMenu = menus.map((menu) => (
    <div className="flex items-center pr-2" key={menu.url}>
      <FaPlay 
        className={currentRoute === menu.url ? "text-blue-600 dark:text-white " : "invisible"}
      />
      <Link href={menu.url} className="text-slate-800 dark:text-slate-100">
        {menu.text}
      </Link>
    </div>
  ));

  return (
    <div>
      <div className="flex justify-between mt-6 font-sans">
        <Link  href="/"> 
          <p className="font-bold text-2xl flex ml-10 text-slate-800 dark:text-slate-100 ">
            TRIOLI
          </p>
        </Link> 
        <div className="flex justify-center space-x-8 font-bold">     
          <div className="flex items-center">
            {renderMenu}
          </div>
        </div>
        <div className="flex">
          <div className="pr-10">
            <ThemeToggler/>
          </div>
          <Link
            href="/letstalk" 
            className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-right justify-end ... mr-10"> 
            Let&apos;s talk 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;