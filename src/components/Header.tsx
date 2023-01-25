import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import ThemeToggler from "./ThemeToggler";
import { useRouter } from "next/router";



const Header: React.FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div>
      <div className="flex justify-between mt-6 font-sans">
       <Link  href="/"> <p className="font-bold text-2xl flex ml-10 text-slate-800 dark:text-slate-100 ">TRIOLI</p></Link> 
       <div className="flex justify-center space-x-8 font-bold">     
          <div className="flex items-center"><FaPlay className={currentRoute === '/' ?  "text-blue-600 dark:text-white pr-1 " : "invisible "  }/><Link href="/" className="text-slate-800 dark:text-slate-100" >Home</Link></div> 
          <div className="flex items-center"><FaPlay className={currentRoute === '/project' ?  "text-blue-600 dark:text-white pr-1 " : "invisible "  }/><Link href="/project" className="text-slate-800 dark:text-slate-100 pl-1" >Project</Link></div>
          <div className="flex items-center"><FaPlay className={currentRoute === '/blog' ?  "text-blue-600 dark:text-white pr-1 " : "invisible "  }/><Link href="/blog" className="text-slate-800 dark:text-slate-100 pl-1" >Blog</Link></div>
          <div className="flex items-center"><FaPlay className={currentRoute === '/contactus' ?  "text-blue-600 dark:text-white pr-1 " : "invisible "  }/><Link href="/contactus" className="text-slate-800 dark:text-slate-100 pl-1" >Contactus</Link></div>
       </div>
       <div className="flex">
         <div className="pr-10"><ThemeToggler/></div>
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