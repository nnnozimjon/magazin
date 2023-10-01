import Link from "next/link";
import Icon from "../Icon";
import Button from "../Button";
import { useSelector } from "react-redux";

interface IProductCart {
  id: string | number;
  productImageUrl: string;
  price: number;
  productName: string;
  addFavorite: () => void;
  addCart: () => void;
}

const ProductCart: React.FC<IProductCart> = ({
  id,
  productImageUrl,
  price,
  productName,
  addFavorite,
  addCart,
}: IProductCart) => {
  const { wishlist } = useSelector((state: any) => state?.addWishlistSlice);
  return (
    <div className="bg-[#FFFFFF] rounded-lg border-2 border-[#E0E0E0] p-4 text-gray-500 hover:text-blue-600">
      <div className="float-right cursor-pointer" onClick={addFavorite}>
        {wishlist.find((el: any) => el.productId === id) ? (
          <Icon name="favorite" color="blue-600" />
        ) : (
          <Icon name="favoriteborder" />
        )}
      </div>
      <Link href={`/product/${id}`}>
        <img src={productImageUrl} alt="" />
        <div className="flex flex-col">
          <span className="font-bold text-[#000]">{price}</span>
          <span className="">{productName}</span>
        </div>
      </Link>
      <div className="mt-4">
        <Button
          label="В корзину"
          prepend={<Icon name="cart" />}
          onClick={addCart}
        />
      </div>
    </div>
  );
};

export default ProductCart;
