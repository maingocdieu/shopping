import { useEffect, useState } from "react";
import style from "./Slide.module.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Images = {
  url: string;
  price: number;
  label: string;
};
const images: Images[] = [
  {
    url: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/02/dau-xa-l-occitane-aromachologie-intensive-repair-conditioner-500ml-620c50f65b713-16022022081846.jpg",
    label: "qqq",
    price: 1230000,
  },
  {
    url: "https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/02/dau-xa-l-occitane-aromachologie-intensive-repair-conditioner-500ml-620c50f65b713-16022022081846.jpg",
    label: "qqq",
    price: 1230000,
  },
  {
    url: "https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2020/08/sua-rua-mat-hoa-cuc-kiehl-s-calendula-deep-cleansing-foaming-face-wash-230ml-5f37a5cb8d1ad-15082020160723.jpg",
    label: "qqq",
    price: 1230000,
  },
  {
    url: "https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/02/lan-khu-mui-hugo-boss-botled-75ml-620c6228a216d-16022022093208.jpg",
    label: "qqq",
    price: 1230000,
  },
  {
    url: "https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2021/09/nuo-c-hoa-nam-nautica-voyage-edt-100ml-61359a4222f30-06092021113410.jpg",
    label: "qqq",
    price: 1230000,
  },
  {
    url: "https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/04/mu-lacoste-men-s-sport-geometric-print-tennis-cap-mau-trang-6268bbaa8f004-27042022104234.jpg",
    label: "qqq",
    price: 1230000,
  },

  {
    url: "https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/04/mu-lacoste-men-s-sport-geometric-print-tennis-cap-mau-trang-6268bbaa8f004-27042022104234.jpg",
    label: "qqq",
    price: 1230000,
  },
  {
    url: "https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/04/dong-ho-pha-le-nu-swarovski-duo-watch-5484376-mau-xanh-626a4f7f4005c-28042022152535.jpg",
    label: "qqq",
    price: 1230000,
  },
  {
    url: "https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/04/dong-ho-pha-le-nu-swarovski-duo-watch-5484376-mau-xanh-626a4f7f4005c-28042022152535.jpg",
    label: "qqq",
    price: 1230000,
  },
  {
    url: "https://cdn.vuahanghieu.com/unsafe/500x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/04/dong-ho-pha-le-nu-swarovski-duo-watch-5484376-mau-xanh-626a4f7f4005c-28042022152535.jpg",
    label: "qqq",
    price: 1230000,
  },
];

const pagesize = 5;
export const Slide = () => {
  const pageNumber: Array<number> = Array(
    Math.floor((images.length + pagesize - 1) / pagesize)
  ).fill(0);

  const [index, setIndex] = useState(1);
  const [position, setPosition] = useState(0);

  const [card, setCard] = useState<Images[]>([]);
  useEffect(() => {
    setCard(
      images.slice((index - 1) * pagesize, (index - 1) * pagesize + pagesize)
    );
  }, [index]);

//   const frame = useCallback(
//     (id: any) => {
//       console.log(position);
//       if (position >= 100) {
//         clearInterval(id);
//       } else {
//         setPosition((prev) => prev + 10);
//       }
//     },
//     [position]
//   );

  return (
    <>
      {console.log("render", position)}
      <div className={style.container} id="id">
        <div className={style.imageContainer}>
          {images.map((value, index) => {
            return (
              <a className={style.imageLink} style={{ right: `${position}px`, transition: 'all 1s ease-in-out' }}>
                <img
                  src={value.url}
                  alt=""
                  key={index}
                  className={style.image}
                />
              </a>
            );
          })}
        </div>
        <ul>
          {pageNumber.map((value, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  alert(index);
                }}
              ></li>
            );
          })}
        </ul>
        <button
          className={style.buttonLeft}
          onClick={() => {
            if (index !== 1) {
              setIndex(index - 1);
              setPosition(position - 1425);
            }
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className={style.buttonRight}
          onClick={() => {
            if (index !== pageNumber.length) {
              setIndex(index + 1);
              //setPosition(position + 1425);
              // let id = setInterval(frame, 10);
              // function frame() {
              //     setPosition((prev) => {
              //       if(prev >= 1420) {
              //           clearInterval(id);
              //       }
              //       return prev + 500});

              // }
              setPosition(position + 1425)
            }
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  );
};
