import Headert from "../components/Headert";

import Head from "next/head";

    const Layout = () => {
      return (
        <>
          <Head>
            <title>Nextjs-Dev Blog</title>
            <link rel="icon" href="/favicon.ico" />

          </Head>
          <Headert />
          <div className="min-h-screen mx-auto max-w-2xl flex flex-col">
            
            <main className="flex-grow container mx-auto px-4 sm:px-6">
            <h1 className=" dark:bg-gray-900  dark:text-gray-100 " >This is H1 heading</h1>

              
            </main>
            
          </div>
        </>
      );
    };

    export default Layout;
