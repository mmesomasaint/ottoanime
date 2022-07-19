import Head from "next/head";
import styled from "styled-components";
import Container from "../card/Container";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Discover } from "../../utils/data";
import HomeContainer from "../card/HomeContainer";






const HomePage = () => {

  const [dataRecently, setDataRecently] = useState([]);
  const [dataPopular, setDataPopular] = useState([]);
  const { theme, resumeId, myList, watchList } = useSelector((state) => state);

  useEffect(() => {
    recentlyFetch();
    PopularFetch();
  }, []);

  const recentlyFetch = async () => {
    let req = await fetch(
      "https://ottogo.vercel.app/api/recently/1/"
    );
    let res = await req.json();
    setDataRecently(res.slice(8));
    console.log(dataRecently);
  };

  const PopularFetch = async () => {
    let req = await fetch(
      "https://ottogo.vercel.app/api/popular/1/"
    );
    let res = await req.json();
    setDataPopular(res.slice(8));
    console.log(dataPopular);
  };

  return (
    <div className={`${theme.background} mx-auto lg:p-[6rem]`}>
      <div>
    <HomeContainer
            Data={dataRecently}
            heading={"Recently Added"}
            Icon={Discover[0].icon}
          /></div><div>
          <HomeContainer
            Data={dataPopular}
            heading={"Popular"}
            Icon={Discover[1].icon}
          /></div>
          {myList.length > 0 ? (
        <div><HomeContainer Data={myList} heading={"My List"} Icon={Discover[2].icon} /></div>
      ) : (
        ""
      )}
      {watchList.length > 0 ? (
        <HomeContainer Data={watchList} heading={"Watch List"} Icon={Discover[4].icon} />
      ) : (
        ""
      )}
          </div>
  );
};

export default HomePage;
