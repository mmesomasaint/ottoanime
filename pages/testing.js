import Contact from "../components/Contact";
import Layout from "../components/Layout";
// import Container from "../components/card/Container";
import { useEffect, useState } from "react";
// import cheerio from "cheerio";
// const axios = require("axios");

// export async function getServerSideProps(ctx) {
//   const req = await fetch("https://ottogo.vercel.app/api/recently/1");
//   const res = await req.json();

//   return {
//     props: {
//       data: res,
//     },
//   };
// }

function Testing() {
  // const [content, setContent] = useState([]);
 

  // const Fetching = async (e) => {
  //   let d = await axios.get(
  //     `https://ajax.gogo-load.com/ajax/page-recent-release.html?page=1&type=1`
  //   );
  //   d = d.data;
  //   // console.log(d);
  //   const myList = [];
  //   var $ = cheerio.load(d);
  //   $(".items li").each(function (index, element) {
  //     let result = {};
  //     let url = $(this).children("div").children("a").attr("href");
  //     let title = $(this).children("div").children("a").attr("title");
  //     let image = $(this).find("img").attr("src");
  //     let episode = $(this).children(".episode").text();

  //     result = { title, url, image, episode };
  //     myList.push(result);
  //     console.log(myList);
  //   });
  //   setContent(myList);
  // };

  useEffect(() => {
    console.log("im here")
  },[])
  return (
    <Layout>
      <div className="h-full w-full text-black">
      <iframe
            
              src="https://animixplay.to/api/liveTVRrd01qUXpMVFhzM0dyVTh3ZTlPVFZScmQwMXFVWG89"
              frameBorder="0"
              width="1200"
              height="700"
            ></iframe>
            
      </div>

      <Contact />
      </Layout>
  );
}

export default Testing;
