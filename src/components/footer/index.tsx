import Link from "next/link";
import Icon from "../Icon";

const Footer: React.FC = () => {
  return (
    <div className="w-[100%] flex justify-between bg-[#FFFFFF] px-20 my-10">
      <div className="w-[25%] flex flex-col justify-between">
        <div className="">
          <img
            className="h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqYMGK0uAWWKuEsbqGwXWfQGq8kU76j3oipdfrgX8t_ynXy5NpPzEOmaj2Zfr-yq9sdA&usqp=CAU"
            alt=""
          />
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          </p>
        </div>
        <div className="flex justify-start space-x-4 bg-red-600 p-4">
          <Icon name="facebook" />
          {/* <Icon name="instagram" />
          <Icon name="linkidin" />
          <Icon name="whatsApp" /> */}
        </div>
      </div>
      <div className=" flex flex-col justify-between text-gray-500 text-[18px]">
        <div className="text-[#000] font-bold">magazin интернет-магазин</div>
        <div className="hover:text-blue-600">
          <Link href="/">Об maga / About maga</Link>
        </div>
        <div className="hover:text-blue-600">
          <Link href="/">Стать продавцом</Link>
        </div>
        <div className="hover:text-blue-600">
          <Link href="/">Стать продавцом</Link>
        </div>
      </div>
      <div className=" flex flex-col justify-between text-gray-500 text-[18px]">
        <div className="text-[#000] font-bold">Зарабатывать с magazin</div>
        <div className="hover:text-blue-600">
          <Link href="/">Стать продавцом</Link>
        </div>
        <div className="hover:text-blue-600">
          <Link href="/">partniyot</Link>
        </div>
        <div className="hover:text-blue-600">
          <Link href="/">Стать продавцом</Link>
        </div>
      </div>

      <div className=" flex flex-col justify-between text-gray-500 text-[18px]">
        <div className="text-[#000] font-bold">Помощь</div>
        <div className="hover:text-blue-600">
          <Link href="/">Как сделать заказ</Link>
        </div>
        <div className="hover:text-blue-600">
          <Link href="/">Оплата</Link>
        </div>
        <div className="hover:text-blue-600">
          <Link href="/">Доставка</Link>
        </div>
        <div className="hover:text-blue-600">
          <Link href="/">Контакты</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
