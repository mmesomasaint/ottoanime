import Head from "next/head";

const Layout = ({ children, title = "Animex Stream",description }) => {
  return (
    <div className="w-full justify-center items-center min-h-screen mx-auto lg:h-full mt-[3rem] ml-0">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key={title} />

        <meta property="og:description" content={description} />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
