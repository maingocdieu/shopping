import style from "./main.module.css";
import {
  faCartShopping,
  faMessage,
  faSearch,
  faArrowsUpDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.svg";
import image from "../../assets/dong-ho-nam-citizen-dress-black-panther-ca0297-52w-621751af65f62-24022022163647.jpg";

export const Main = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.topHeader}>
            <div className={style.top_header_content}>
              <div className={style.top_header_left}>
                <span>Tin tức</span>
                <span>Kênh người bán</span>
                <span>Hàng hiệu giảm 50%</span>
              </div>

              <div className={style.top_header_right}>
                <span>Tài khoản</span>
                <div className={style.cart}>
                  <span>Giỏ hàng</span>
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
              </div>
            </div>
          </div>
          <div className={style.middleheader}>
            <div className={style.middle_left_header}>
              <span>
                <FontAwesomeIcon icon={faMessage} />
              </span>
              <div className={style.contact}>
                <span>Hotline: 093.934.8888</span>
                <span>ổng đài: 1900 232322</span>
              </div>
            </div>
            <img src={logo} alt="" className={style.logo} />
            <div className={style.search}>
              <input type="text" placeholder="Tìm kiếm trên vua hàng hiệu" />
              <span>
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
          <div className={style.bottomHeader}>
            <ul>
              <li>
                <a href="">Thương hiệu</a>
              </li>
              <li>
                <a href="">Đồng hồ</a>
              </li>
              <li>
                <a href="">Túi sách</a>
              </li>
              <li>
                <a href="">Nước hoa</a>
              </li>
              <li>
                <a href="">Mỹ phẩm</a>
              </li>
              <li>
                <a href="">Giày</a>
              </li>
              <li>
                <a href="">Thời trang</a>
              </li>
              <li>
                <a href="">Mũ nón</a>
              </li>
              <li>
                <a href="">Kính mắt</a>
              </li>
              <li>
                <a href="">Son môi</a>
              </li>
              <li>
                <a href="">Trang sức</a>
              </li>
              <li>
                <a href="">Trang điểm</a>
              </li>
              <li>
                <a href="">...</a>
              </li>
            </ul>
          </div>

          {/* Body */}
        </div>
        <div className={style.content}>
          <div className={style.content_left}>
            <div className={style.filter}>
              <div className={style.label}>Thương hiệu</div>
              <ul className={style.same_filter}>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
              </ul>
            </div>
            <div className={style.filter}>
              <div className={style.label}>Dây</div>
              <ul className={style.same_filter}>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
              </ul>
            </div>
            <div className={style.filter}>
              <div className={style.label}>Máy</div>
              <ul className={style.same_filter}>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
              </ul>
            </div>
            <div className={style.filter}>
              <div className={style.label}>Kiểu mặt</div>
              <ul className={style.same_filter}>
                <li>
                  <input type="checkbox" />
                  <span>Versace(211)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.content_right}>
            <div className={style.order}>
              <span>Order đồng hồ</span>
              <div>
                <FontAwesomeIcon icon={faArrowsUpDown} />
                <span>Sắp xếp theo</span>
              </div>
            </div>
            <div className={style.product}>
              <div className={style.card}>
                <img src={image} alt="ss" className={style.image_product} />
                <div className = {style.label}>Đồng Hồ Nam Citizen Dress Black Panther CA0297-52W</div>
                <h1>aaaa</h1>
              </div>
              <div className={style.card}>
                <img src={image} alt="ss" className={style.image_product} />
              </div>
              <div className={style.card}>
                <img src={image} alt="ss" className={style.image_product} />
              </div>
              <div className={style.card}>
                <img src={image} alt="ss" className={style.image_product} />
              </div>
              <div className={style.card}>
                <img src={image} alt="ss" className={style.image_product} />
              </div>
              <div className={style.card}>
                <img src={image} alt="ss" className={style.image_product} />
              </div>
              <div className={style.card}>
                <img src={image} alt="ss" className={style.image_product} />
              </div>
              <div className={style.card}>
                <img src={image} alt="ss" className={style.image_product} />
              </div>
              <div className={style.card}>
                <img src={image} alt="ss" className={style.image_product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
