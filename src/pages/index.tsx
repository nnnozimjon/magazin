import Dropdown from "@/components/Dropdown";
import Navbar from "@/components/Navbar";
import Layout from "@/layout";
import { Inter } from "next/font/google";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Link from "next/link";
import Icon from "@/components/Icon";
import SwiperButton from "@/components/SwiperButton/SwiperButton";
import { Axios } from "@/axios";
import Button from "@/components/Button";
import { useAppDispatch } from "@/hooks/nextRedux";
import { useSelector } from "react-redux";
import { addToCart, getCartTotal } from "./cart/store/addCartSlice";
import { addToWishlist } from "./wishlist/store/addWishlistSlice";
import ProductCart from "@/components/ProductCart/ProductCart";
export const data = [
  {
    productId: 1,
    product:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
    productName: "Детский рюкзак 2063.2, розовый",
    size: "39",
    color: "red",
    price: 149,
    discount: "99",
    favorite: false,
  },
  {
    productId: 2,
    product:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
    productName: "Детский рюкзак 2063.2, розовый",
    size: "39",
    color: "red",
    price: 149,
    discount: "99",
    favorite: false,
  },
  {
    productId: 3,
    product:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
    productName: "Детский рюкзак 2063.2, розовый",
    size: "39",
    color: "red",
    price: 149,
    discount: "99",
    favorite: false,
  },
  {
    productId: 4,
    product:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
    productName: "Детский рюкзак 2063.2, розовый",
    size: "39",
    color: "red",
    price: 149,
    discount: "99",
    favorite: false,
  },
  {
    productId: 5,
    product:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
    productName: "Детский рюкзак 2063.2, розовый",
    size: "39",
    color: "red",
    price: 149,
    discount: "99",
    favorite: false,
  },
  {
    productId: 6,
    product:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
    productName: "Детский рюкзак 2063.2, розовый",
    size: "39",
    color: "red",
    price: 149,
    discount: "99",
    favorite: false,
  },
  {
    productId: 7,
    product:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
    productName: "Детский рюкзак 2063.2, розовый",
    size: "39",
    color: "red",
    price: 149,
    discount: "99",
    favorite: false,
  },
  {
    productId: 8,
    product:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
    productName: "Детский рюкзак 2063.2, розовый",
    size: "39",
    color: "red",
    price: 149,
    discount: "99",
    favorite: false,
  },
  {
    productId: 9,
    product:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
    productName: "Детский рюкзак 2063.2, розовый",
    size: "39",
    color: "red",
    price: 149,
    discount: "99",
    favorite: false,
  },
  {
    productId: 10,
    product:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
    productName: "Детский рюкзак 2063.2, розовый",
    size: "39",
    color: "red",
    price: 149,
    discount: "99",
    favorite: false,
  },
  {
    productId: 11,
    product:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
    productName: "Детский рюкзак 2063.2, розовый",
    size: "39",
    color: "red",
    price: 149,
    discount: "99",
    favorite: false,
  },
  {
    productId: 12,
    product:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
    productName: "Детский рюкзак 2063.2, розовый",
    size: "39",
    color: "red",
    price: 149,
    discount: "99",
    favorite: false,
  },
  {
    productId: 13,
    product:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
    productName: "Детский рюкзак 2063.2, розовый",
    size: "39",
    color: "red",
    price: 149,
    discount: "99",
    favorite: false,
  },
  {
    productId: 14,
    product:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
    productName: "Детский рюкзак 2063.2, розовый",
    size: "39",
    color: "red",
    price: 149,
    discount: "99",
    favorite: false,
  },
  {
    productId: 15,
    product:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
    productName: "Детский рюкзак 2063.2, розовый",
    size: "39",
    color: "red",
    price: 149,
    discount: "99",
    favorite: false,
  },
];
const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
  const dispatch = useAppDispatch();
  const { cart } = useSelector((state: any) => state?.addCartSlice);
  const { wishlist, items, isFavorite } = useSelector(
    (state: any) => state?.addWishlistSlice
  );
  console.log("whsis", wishlist);
  const [size, setSize] = React.useState<number>(10);
  const [productDatas, setProductDatas] = React.useState([]);

  const [chacked, setChacked] = React.useState<boolean>(false);
  const [controlledSwiper, setControlledSwiper] = React.useState(null);
  const [like, setLike] = React.useState([]);
  const [datas, setDatas] = React.useState(data);

  // const handleAddCart = (e: any) => {
  //   dispatch(addToCart(e));

  //   console.log("salom");
  // };

  useEffect(() => {
    setProductDatas(props?.payload);
  }, []);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <Layout>
      <div className="pt-24">
        <div className="w-[90%] p-[10px] mx-auto">
          <div className=" h-[400px] rounded-2xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
              autoplay
            >
              <SwiperSlide>
                <img
                  className="w-full h-[400px] rounded-2xl"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdR_T_5dSmKdBtUuwpCbVhGM7Qxr7VklN_Yw&usqp=CAU"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[400px] rounded-2xl"
                  src="https://img.freepik.com/free-photo/happy-man-with-handbags-dancing-after-shopping-spree_482257-18132.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[400px] rounded-2xl"
                  src="https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_1280.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[400px] rounded-2xl"
                  src="https://assets.ajio.com/cms/AJIO/MOBILE/18082023-UHP-M-Main-P2-dillingerTeamspirit-flat60.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperButton />
            </Swiper>
          </div>

          <div className="mt-20 flex justify-between w-[50%]">
            <div className="text-[32px] font-bold self-end">
              Deals and offers
            </div>
            <div className="w-[45%] flex justify-between">
              <div className="">
                <p className="">Days</p>
                <p className="text-[32px] font-bold">03</p>
              </div>
              <div className="mt-[22px] text-[32px] font-bold">:</div>
              <div>
                <p>Hours</p>
                <p className="text-[32px] font-bold">23</p>
              </div>
              <div className="mt-[22px] text-[32px] font-bold">:</div>
              <div>
                <p>Minutes</p>
                <p className="text-[32px] font-bold">19</p>
              </div>
              <div className="mt-[22px] text-[32px] font-bold">:</div>
              <div>
                <p>Seconds</p>
                <p className="text-[32px] font-bold">56</p>
              </div>
            </div>
          </div>
          <div className="mt-10 rounded-2xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
              autoplay
              slidesPerView={4}
              spaceBetween={30}
            >
              <SwiperSlide>
                <img
                  className="w-full rounded-2xl"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdR_T_5dSmKdBtUuwpCbVhGM7Qxr7VklN_Yw&usqp=CAU"
                  alt=""
                />
                <div className="flex justify-between mt-2">
                  <span>Smart watches</span>
                  <span className="rounded-3xl bg-[#FFE3E3] text-[#EB001B] py-1 px-2">
                    -25%
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full rounded-2xl"
                  src="https://img.freepik.com/free-photo/happy-man-with-handbags-dancing-after-shopping-spree_482257-18132.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full  rounded-2xl"
                  src="https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_1280.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full  rounded-2xl"
                  src="https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_1280.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full  rounded-2xl"
                  src="https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_1280.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full  rounded-2xl"
                  src="https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_1280.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="mt-10 flex flex-col">
            <div className="text-[32px] font-bold mb-5">
              Популярные категории
            </div>
            <div className=" grid grid-cols-6 gap-10">
              <div className="hover:text-blue-600">
                <Link href="/">
                  <img
                    className="h-[150px] rounded-xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdR_T_5dSmKdBtUuwpCbVhGM7Qxr7VklN_Yw&usqp=CAU"
                    alt=""
                  />
                  <div className="text-[20px] text-center">Скидки</div>
                </Link>
              </div>
              <div className="hover:text-blue-600">
                <Link href="/">
                  <img
                    className="h-[150px] rounded-xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdR_T_5dSmKdBtUuwpCbVhGM7Qxr7VklN_Yw&usqp=CAU"
                    alt=""
                  />
                  <div className="text-[20px] text-center">
                    Смартфоны и планшеты
                  </div>
                </Link>
              </div>
              <div className="hover:text-blue-600">
                <Link href="/">
                  <img
                    className="h-[150px] rounded-xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdR_T_5dSmKdBtUuwpCbVhGM7Qxr7VklN_Yw&usqp=CAU"
                    alt=""
                  />
                  <div className="text-[20px] text-center">Кондиционеры</div>
                </Link>
              </div>
              <div className="hover:text-blue-600">
                <Link href="/">
                  <img
                    className="h-[150px] rounded-xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdR_T_5dSmKdBtUuwpCbVhGM7Qxr7VklN_Yw&usqp=CAU"
                    alt=""
                  />
                  <div className="text-[20px] text-center">Сумки и рюкзаки</div>
                </Link>
              </div>
              <div className="hover:text-blue-600">
                <Link href="/">
                  <img
                    className="h-[150px] rounded-xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdR_T_5dSmKdBtUuwpCbVhGM7Qxr7VklN_Yw&usqp=CAU"
                    alt=""
                  />
                  <div className="text-[20px] text-center">Наушники</div>
                </Link>
              </div>
              <div className="hover:text-blue-600">
                <Link href="/">
                  <img
                    className="h-[150px] rounded-xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdR_T_5dSmKdBtUuwpCbVhGM7Qxr7VklN_Yw&usqp=CAU"
                    alt=""
                  />
                  <div className="text-[20px] text-center">Телевизоры</div>
                </Link>
              </div>
              <div className="hover:text-blue-600">
                <Link href="/">
                  <img
                    className="h-[150px] rounded-xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdR_T_5dSmKdBtUuwpCbVhGM7Qxr7VklN_Yw&usqp=CAU"
                    alt=""
                  />
                  <div className="text-[20px] text-center">Ноутбуки</div>
                </Link>
              </div>
              <div className="hover:text-blue-600">
                <Link href="/">
                  <img
                    className="h-[150px] rounded-xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdR_T_5dSmKdBtUuwpCbVhGM7Qxr7VklN_Yw&usqp=CAU"
                    alt=""
                  />
                  <div className="text-[20px] text-center">Книги</div>
                </Link>
              </div>
              <div className="hover:text-blue-600">
                <Link href="/">
                  <img
                    className="h-[150px] rounded-xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdR_T_5dSmKdBtUuwpCbVhGM7Qxr7VklN_Yw&usqp=CAU"
                    alt=""
                  />
                  <div className="text-[20px] text-center">Бытовая техника</div>
                </Link>
              </div>
              <div className="hover:text-blue-600">
                <Link href="/">
                  <img
                    className="h-[150px] rounded-xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdR_T_5dSmKdBtUuwpCbVhGM7Qxr7VklN_Yw&usqp=CAU"
                    alt=""
                  />
                  <div className="text-[20px] text-center">
                    Мелкая бытовая техника
                  </div>
                </Link>
              </div>
              <div className="hover:text-blue-600">
                <Link href="/">
                  <img
                    className="h-[150px] rounded-xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdR_T_5dSmKdBtUuwpCbVhGM7Qxr7VklN_Yw&usqp=CAU"
                    alt=""
                  />
                  <div className="text-[20px] text-center">
                    Строительство и ремонт
                  </div>
                </Link>
              </div>
              <div className="hover:text-blue-600">
                <Link href="/">
                  <img
                    className="h-[150px] rounded-xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdR_T_5dSmKdBtUuwpCbVhGM7Qxr7VklN_Yw&usqp=CAU"
                    alt=""
                  />
                  <div className="text-[20px] text-center">
                    Товары для красоты
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="my-10 flex flex-col">
            <div className="text-[32px] font-bold mb-10">ТОВАРЫ ПРОДАВЦА</div>
            <div className=" grid grid-cols-5 gap-10">
              {datas.length > 0 &&
                datas.map((elem: any) => {
                  return (
                    <ProductCart
                      id={elem.productId}
                      productImageUrl={elem.product}
                      price={elem.price}
                      productName={elem.productName}
                      addCart={() => dispatch(addToCart(elem))}
                      addFavorite={() => dispatch(addToWishlist(elem))}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <div>
          {productDatas.map((elem: any) => (
            <div>{elem.productId}</div>
          ))}
        </div>
      </div>
    </Layout>
    // <ProductPage />
  );
}

export async function getServerSideProps() {
  const productData = await Axios.get(`market/products/get-all-products`);
  return {
    props: productData,
  };
}
