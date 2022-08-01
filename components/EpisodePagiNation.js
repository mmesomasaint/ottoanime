import Link from "next/link";
import { useRouter } from "next/router";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import styled from "styled-components";

const PB = styled.span`
  &:hover {
    background: ${({ button }) => button.hover.background};
    color: ${({ button }) => button.hover.text};
  }
`;

const PageButton = ({ href, children, style }) => {
  const { theme } = useSelector((state) => state);
  return (
    <Link href={href}>
      <PB
        button={theme.button}
        className={`${style} ${theme.button.background} border ${theme.button.text} ${theme.button.border} p-2 px-4 flex justify-center items-center border rounded-full cursor-pointer shadow-2xl transition-all duration-500`}
      >
        {children}
      </PB>
    </Link>
  );
};

const EpisodePagiNation = ({ total, heading, episodeid }) => {
  const router = useRouter();
  const pathList = router.asPath;
  const path = pathList?.split("/");
  const page = parseInt(path?.[path?.length - 1]);
  var nxt = "";
  var prev = "";
  if (path) {
    const nextPage = page + 1;
    const prevPage = page - 1;
    if (total) {
      nxt =
        page == total
          ? null
          : (path[path.length - 1] = nextPage) && path.join("/");
      prev =
        page === 1
          ? null
          : (path[path.length - 1] = prevPage) && path.join("/");
    } else {
      nxt = (path[path.length - 1] = nextPage) && path.join("/");
      prev = (path[path.length - 1] = prevPage) && path.join("/");
    }
  }
  return (
    <div className="px-8 py-2 relative flex flex-row h-16 w-full justify-evenly items-center  ">
      {page === 1 ? null : (
        <PageButton style={"absolute left-0"} href={prev} pre={true}>
          <BiLeftArrowAlt size={20} />
          {heading} {page - 1}
        </PageButton>
      )}
      {page != total ? (
        <PageButton style={"absolute right-0"} href={nxt} pre={false}>
          {heading} {page + 1}
          <BiRightArrowAlt size={20} />
        </PageButton>
      ) : null}
      <div
        className={`p-3 shadow-lg rounded-sm bg-blue-400 text-white font-bold cursor-pointer hover:bg-blue-600 `}
      >
        <a
          href={`https://goload.io/download?id=${episodeid}`}
          rel="noreferrer"
          target="_blank"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default EpisodePagiNation;
