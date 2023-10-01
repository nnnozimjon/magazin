import React, { useEffect } from "react";
import { useAppDispatch } from "@/hooks/nextRedux";
import Layout from "@/layout";
import { useSelector } from "react-redux";
import { addToCart } from "@/pages/cart/store/addCartSlice";
import ProductCart from "@/components/ProductCart/ProductCart";
import { addToWishlist } from "../store/addWishlistSlice";

const wishlistPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { wishlist } = useSelector((state: any) => state?.addWishlistSlice);

  console.log("whisilist", wishlist);
  useEffect(() => {
    // dispatch()
  }, [dispatch]);
  return (
    <Layout>
      <div className="mt-24 w-[90%] mx-auto pb-24">
        <div className="mt-20 flex items-center justify-start ">
          <div className="text-[32px] font-bold my-4">WishList</div>
        </div>
        <div className=" grid grid-cols-5 gap-10">
          {wishlist.length > 0 &&
            wishlist.map((elem: any) => {
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
    </Layout>
  );
};

export default wishlistPage;
