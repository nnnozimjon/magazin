import Button from "@/components/Button";
import Number from "@/components/Number";
import { useAppDispatch } from "@/hooks/nextRedux";
import Layout from "@/layout";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import {
  getCartTotal,
  removeFromCart,
  increaseItem,
  deccreaseItem,
} from "../store/addCartSlice";

interface Product {
  productId: number;
  productName: string;
  description: string;
  price: number;
  stockQuantity: number;
  images: string[];
  size: string;
  color: string;
  discount: number;
}

interface Props {
  product: Product;
  products: Product[];
}

interface CartItem {
  cid: string;
  prodcuts: Array<{ id: number; qty: number }>;
}

const cartPage: React.FC<Props> = ({ product, products }: Props) => {
  const dispatch = useAppDispatch();
  // const cartData = useSelector((state: any) => state.addCart);
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state: any) => state?.addCartSlice
  );
  console.log(totalQuantity, "11");
  console.log(cart, "12");
  const handleAaddToCart = () => {};

  React.useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);
  return (
    <Layout>
      <div className="mt-24 w-[90%] mx-auto pb-24">
        <div className="mt-20 flex items-center justify-start ">
          <div className="text-[32px] font-bold">Корзина</div>
        </div>
        <div className="w-full flex justify-between space-x-10">
          <div
            className={`w-[80%] flex flex-col  ${
              cart?.length > 0 &&
              "bg-[#FFFFFF] border-2 border-gray-300 rounded-md p-4"
            } `}
          >
            {cart?.length > 0
              ? cart?.map((elem: any) => {
                  return (
                    <div className="w-full  border-b-2 border-gray-300 py-8">
                      <div className="w-full flex justify-around">
                        <div className="flex space-x-4">
                          <Image
                            src="data:image/png;base64,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"
                            height={200} // Desired size with correct aspect ratio
                            width={200} // Desired size with correct aspect ratio
                            alt="Your Name"
                          />
                          <div className="">
                            <p className="text-[#1C1C1C] text-[18px] font-bold">
                              {elem.productName}
                            </p>
                            <div className="my-4">
                              <p>size: {elem.size}</p>
                              <p>Color: {elem.color}</p>
                            </div>
                            <div className="flex space-x-2">
                              <Button
                                label="В избранное"
                                type="outline"
                                className="h-[10px]"
                              />
                              <Button
                                label="Удалить"
                                type="outline"
                                onClick={() =>
                                  dispatch(removeFromCart(elem.productId))
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <div>
                            <span className="text-[15px] font-bold mr-2 text-white bg-[#10c44c] rounded p-2">
                              179 TJS
                            </span>
                            <span className="text-[#10c44c]">с купон</span>
                          </div>
                          <div className="mt-2 text-[14px] text-gray-500">
                            <span className="">{elem.price}</span>
                            <span className="ml-5 line-through">
                              {elem.discount}
                            </span>
                          </div>
                        </div>
                        <div>
                          <Number
                            count={elem.quantity}
                            increment={() =>
                              dispatch(increaseItem(elem.productId))
                            }
                            decrement={() =>
                              dispatch(deccreaseItem(elem.productId))
                            }
                          />
                          <span className="text-[14px] text-gray-500 ье-2">
                            {elem.discount}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "not found"}
          </div>
          {cart?.length > 0 && (
            <div className="w-[280px] h-[300px] flex flex-col justify-between bg-[#FFFFFF] border-2 border-gray-300 rounded-md p-4">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="">Товары (2)</span>
                  <span>{totalQuantity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Скидка</span>
                  <span>0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[20px] font-bold">Итого:</span>
                  <span>{totalPrice}</span>
                </div>
              </div>
              <Button label="Перейти к оформлению" />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default cartPage;
