import React, { useState } from "react";
import Layout from "@/layout";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Number from "@/components/Number";
import Link from "next/link";
import SwiperButton from "@/components/SwiperButton/SwiperButton";
// import "swiper/scss";
// import "swiper/scss/navigation";
// import "swiper/scss/pagination";
const ProductPage: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [favorite, setFavorite] = React.useState(false);

  // Define a list of color options
  const colors = [
    { name: "Red", value: "bg-red-600" },
    { name: "Blue", value: "bg-blue-600" },
    { name: "Green", value: "bg-green-600" },
    { name: "Yellow", value: "bg-yellow-600" },
    { name: "Purple", value: "bg-purple-600" },
  ];
  const data = [
    {
      id: 1,
      product:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
      productName: "Детский рюкзак 2063.2, розовый",
      price: 149,
      favorite: false,
    },
    {
      id: 2,
      product:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
      productName: "Детский рюкзак 2063.2, розовый",
      price: 149,
      favorite: false,
    },
    {
      id: 3,
      product:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
      productName: "Детский рюкзак 2063.2, розовый",
      price: 149,
      favorite: false,
    },
    {
      id: 4,
      product:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
      productName: "Детский рюкзак 2063.2, розовый",
      price: 149,
      favorite: false,
    },
    {
      id: 5,
      product:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
      productName: "Детский рюкзак 2063.2, розовый",
      price: 149,
      favorite: false,
    },
    {
      id: 6,
      product:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
      productName: "Детский рюкзак 2063.2, розовый",
      price: 149,
      favorite: false,
    },
    {
      id: 7,
      product:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
      productName: "Детский рюкзак 2063.2, розовый",
      price: 149,
      favorite: false,
    },
    {
      id: 8,
      product:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
      productName: "Детский рюкзак 2063.2, розовый",
      price: 149,
      favorite: false,
    },
    {
      id: 9,
      product:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
      productName: "Детский рюкзак 2063.2, розовый",
      price: 149,
      favorite: false,
    },
    {
      id: 10,
      product:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmEZ9KAssmpcfcN_w6qaLF5OovHp31fl53g&usqp=CAU",
      productName: "Детский рюкзак 2063.2, розовый",
      price: 149,
      favorite: false,
    },
  ];

  // Function to handle color selection
  const handleColorSelect = (colorValue: any) => {
    setSelectedColor(colorValue);
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <Layout>
      <div className="bg-gray-100">
        <div className="w-[90%] bg-gray-100 py-10 m-auto">
          <div className="grid grid-cols-3 gap-10 border-2 border-[#E0E0E0] rounded-lg bg-[#FFFFFF] mx-auto py-5">
            <div className="mx-auto">
              <Swiper
                // style={{
                //   "--swiper-navigation-color": "#fff",
                //   "--swiper-pagination-color": "#fff",
                // }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-[380px] h-[380px] border border-[#E0E0E0] rounded-lg mb-6"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperButton />
              </Swiper>
              <Swiper
                onSwiper={() => setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-[380px] h-20 border border-[#E0E0E0] rounded-lg"
              >
                <SwiperSlide className="">
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className=" flex flex-col space-y-8 ">
              <p className="text-[#1C1C1C] text-[20px] font-bold">
                Mens short T-Shirt
              </p>
              <div className="font-bold">
                <span className="text-[18px] text-white bg-[#10c44c] rounded p-2">
                  179 TJS
                </span>
                <span className="ml-5 line-through text-gray-600">199 TJS</span>
              </div>

              <div className="">
                <span className="font-semibold">Цвет: {selectedColor}</span>
                <div className="flex space-x-4 mt-4">
                  {colors.map((color) => (
                    <div
                      className={`border-2 border-[#E0E0E0] rounded-lg bg-[#FFFFFF] cursor-pointer p-2 ${
                        selectedColor === color.name
                          ? "border-2 border-blue-600"
                          : ""
                      }`}
                      onClick={() => handleColorSelect(color.name)}
                    >
                      <button
                        key={color.name}
                        className={`w-7 h-7 border-2 border-[#E0E0E0] rounded-full ${
                          color.value
                        } ${
                          selectedColor === color.name
                            ? "border-2 border-[#E0E0E0]"
                            : ""
                        }`}
                      ></button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Number />
              </div>
              <div className="text-center">
                <div className="flex justify-between space-x-4 ">
                  <Button label="Добавить в корзину" />
                  <div
                    className="my-auto bg-[#E5F1FF] rounded-md cursor-pointer p-3"
                    onClick={handleFavorite}
                  >
                    {favorite ? (
                      <Icon name="favorite" color="blue-600" />
                    ) : (
                      <Icon name="favoriteborder" color="blue-600" />
                    )}
                  </div>
                </div>
                <p className="font-normal mt-2">Доставка завтра</p>
              </div>
            </div>
            <div className="w-[280px] h-[325px] space-y-4 border border-[#E0E0E0] rounded-lg p-5 mr-4 lg:ml-28">
              <div className="h-20 flex flex-row space-x-4 text-[#1C1C1C] text-[16px] font-normal border-b border-[#E0E0E0]">
                <img
                  className="w-[48px] h-[48px] rounded"
                  src="data:image/png;base64,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"
                  alt=""
                />
                <div>
                  <p>Магазин</p>
                  <p>Dushanbe Market</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-row space-x-4  items-center text-[#1C1C1C] text-[16px] font-normal">
                  <img
                    className="w-[21px] h-[15px]"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <div>
                    <p>Таджикистан, Душанбе</p>
                  </div>
                </div>
                <div className="flex flex-row space-x-4  items-center text-[#1C1C1C] text-[16px] font-normal">
                  <Icon name="verifieduser" />
                  <div>
                    <p>Проверенный продавец</p>
                  </div>
                </div>
                <div className="flex flex-row space-x-4  items-center text-[#1C1C1C] text-[16px] font-normal">
                  <Icon name="delivery" />
                  <div>
                    <p>Доставка: Таджикистан</p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <Button label="Профиль продавца" type="outline" />
              </div>
            </div>
          </div>
          <div className=" mb-10">
            <div className="my-10 flex flex-col">
              <div className="text-[32px] font-bold mb-4">
                Рекомендуем также
              </div>
              <div className="">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
                  autoplay
                  slidesPerView={4}
                  spaceBetween={30}
                >
                  {data.length > 0 &&
                    data.map((elem, i) => {
                      return (
                        <SwiperSlide key={i}>
                          <div className="bg-[#FFFFFF] rounded-lg border-2 border-[#E0E0E0] p-4 text-gray-500 hover:text-blue-600 hover:border-blue-600">
                            <div
                              className="float-right cursor-pointer"
                              onClick={() => handleFavorite()}
                            >
                              <Icon
                                name={
                                  elem.favorite === true
                                    ? "favorite"
                                    : "favoriteborder"
                                }
                              />
                            </div>
                            <Link href={`/product/${elem.id}`}>
                              <img
                                src={elem.product}
                                alt=""
                                className="mx-auto"
                              />
                              <div className="flex flex-col">
                                <span className="font-bold text-[#000]">
                                  {elem.price}
                                </span>
                                <span className="">{elem.productName}</span>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
            <div className="my-10 flex flex-col">
              <div className="text-[32px] font-bold mb-4">Похожие товары</div>
              <div className="">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
                  autoplay
                  slidesPerView={4}
                  spaceBetween={30}
                  // className="h-[200px]"
                >
                  {data.length > 0 &&
                    data.map((elem, i) => {
                      return (
                        <SwiperSlide key={i}>
                          <div className="bg-[#FFFFFF] rounded-lg border-2 border-[#E0E0E0] p-4 text-gray-500 hover:text-blue-600 hover:border-blue-600">
                            <div
                              className="float-right cursor-pointer"
                              onClick={() => handleFavorite()}
                            >
                              <Icon
                                name={
                                  elem.favorite === true
                                    ? "favorite"
                                    : "favoriteborder"
                                }
                              />
                            </div>
                            <Link href={`/product/${elem.id}`}>
                              <img
                                src={elem.product}
                                alt=""
                                className="mx-auto"
                              />
                              <div className="flex flex-col">
                                <span className="font-bold text-[#000]">
                                  {elem.price}
                                </span>
                                <span className="">{elem.productName}</span>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </div>

          <div>
            <div className="text-[32px] font-bold mb-4">Описание</div>
            <div className="text-gray-500 border-2 border-[#E0E0E0] rounded bg-[#FFFFFF] p-4">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam, consequatur! Saepe excepturi quam id quae error ipsa
                distinctio eum inventore magnam, obcaecati autem, blanditiis
                quaerat tempora facere repellat temporibus voluptas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
