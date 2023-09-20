import React from "react";
import Icon from "../Icon";
import Modal from "../Modal";
import Dropdown from "../Dropdown";
import Link from "next/link";
import { useRouter } from "next/router";
import Search from "../Search";
import Button from "../Button";
import Login from "@/pages/auth/components/Login";

const Navbar: React.FC = () => {
  const router = useRouter();
  //   const [show, setShow] = React.useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [isOpenRegisterModal, setIsOpenRegidterModal] =
    React.useState<boolean>(false);

  const data = [
    { name: "hama", icon: "compWithPhone" },
    { name: "hama", icon: "clear" },
    { name: "hama", icon: "clear" },
  ];

  const openCategory = () => {
    setShowMenu(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleShow = () => {
    setIsModalOpen(false);
    setShowMenu(false);
  };

  return (
    <div>
      <div className="hidden lg:flex fixed top-0 left-0 right-0 bg-[#FFFFFF] z-10 border-b-2 border-gray-400 p-2">
        <Login
          isOpen={isOpenRegisterModal}
          onClose={() => setIsOpenRegidterModal(false)}
        />

        <div className="w-[90%] mx-auto">
          <div className="flex justify-between h-14 items-center">
            <img
              className="h-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqYMGK0uAWWKuEsbqGwXWfQGq8kU76j3oipdfrgX8t_ynXy5NpPzEOmaj2Zfr-yq9sdA&usqp=CAU"
              alt=""
            />
            <div>
              <button
                className="transition duration-150 hover:ease-in flex justify-between space-x-3 bg-blue-600 text-white text-[18px] font-bold rounded-lg px-6 py-[8px]"
                onClick={openCategory}
              >
                <Icon name={showMenu ? "menu" : "clear"} size={27} />
                <span className="">Katalog</span>
              </button>
            </div>
            <div className="w-[55%] flex items-center border-2 border-blue-600 rounded-lg">
              <input className="w-[85%] outline-none px-3" type="text" />
              <div
                className="flex text-gray-600 bg-gray-200 rounded-lg cursor-pointer py-1 px-3 mx-2"
                onClick={handleShow}
              >
                <span>Везде</span>
                <span className="mt-[2px]">
                  {isModalOpen ? (
                    <Icon name="expandless" />
                  ) : (
                    <Icon name="expandmore" />
                  )}
                </span>
              </div>
              <button className="bg-blue-600 text-white rounded-r-lg mr-[-2px] px-4 py-[5px]">
                <Icon name="search" size={30} />
              </button>
            </div>
            <div className="w-[20%] flex justify-between">
              <div
                onClick={() => setIsOpenRegidterModal(true)}
                className="flex flex-col justify-center items-center hover:text-blue-600 cursor-pointer"
              >
                <Icon name="accountcircle" size={25} />
                <p className="mt-[-5px]">register</p>
              </div>
              <div className="flex flex-col justify-center items-center hover:text-blue-600 cursor-pointer">
                <Icon name="shoppingcart" size={25} />
                <p className="mt-[-5px]"> Корзина</p>
              </div>
              <div className="flex flex-col justify-center items-center hover:text-blue-600 cursor-pointer">
                <Icon name="favoriteborder" size={25} />
                <p className="mt-[-5px]">Избранное</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <ul className="flex justify-between">
              <li>Home</li>
              <li>Стать продавцом</li>
              <li>partniyor</li>
            </ul>
          </div>
        </div>

        {
          <div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <h2>Modal Content</h2>
              <p>This is the content of the modal.</p>
            </Modal>
          </div>
        }
        {/* {!showMenu && !isModalOpen && (
          <div className="w-full px-16 absolute left-0 top-20 bg-white p-[10px] mx-au">
            <Dropdown type="category" options={data} />
          </div>
        )} */}
      </div>
      {/* <div className="w-full border-b border-gray-400"> */}
      <div className="lg:hidden flex justify-center fixed top-0 left-0 right-0 bg-[#FFFFFF] z-10 border-b-2 border-gray-400 p-2 mb-10">
        <div className="w-[90%] flex justify-between">
          <div className="w-full mr-[30px] ">
            <Search append type="primary" />
          </div>
          <div className="rounded-md text-white bg-blue-600 cursor-pointer px-2">
            <Icon name="menu" size={35} />
          </div>
        </div>
      </div>
      {/* </div> */}
      <nav className="lg:hidden fixed z-50 bottom-0 left-0 right-0 p-4 border-t-2 border-gray-200 text-gray-500 shadow-2xl bg-white flex justify-around">
        <Link
          href="/"
          className={`flex flex-col  items-center ${
            router.pathname === "/" ? "text-blue-600" : ""
          }`}
        >
          <div>
            <Icon name="home" />
          </div>
          <p className=""> Home</p>
        </Link>
        {/* Add more links for your navigation items */}
        <Link
          href="/category"
          className={`flex flex-col  items-center ${
            router.pathname === "/category" ? "text-blue-600" : ""
          }`}
        >
          <div>
            <Icon name="categorybottom" />
          </div>
          category
        </Link>
        <Link
          href="/cart"
          className={`flex flex-col  items-center ${
            router.pathname === "/cart" ? "text-blue-600" : ""
          }`}
        >
          <div>
            <Icon name="shoppingcart" />
          </div>
          <p>Корзина</p>
        </Link>
        <Link
          href="/favorites"
          className={`flex flex-col  items-center ${
            router.pathname === "/favorites" ? "text-blue-600" : ""
          }`}
        >
          <div>
            <Icon name="favoriteborder" />
          </div>
          <p>Избранное</p>
        </Link>
        <Link
          href="/"
          className={`flex flex-col  items-center ${
            router.pathname === "/profile" ? "text-blue-600" : ""
          }`}
          onClick={() => setIsOpenRegidterModal(true)}
        >
          <div onClick={() => setIsOpenRegidterModal(true)}>
            <Icon name="accountcircle" />
          </div>
          <p>Profile</p>
        </Link>
      </nav>
    </div>
    // <nav className="fixed top-0 left-0 right-0 bg-gray-600 text-white p-4 z-10">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <a href="/" className="text-2xl font-bold">
    //       Your Logo
    //     </a>
    //     <ul className="flex space-x-6">
    //       <li>
    //         <a href="/" className="hover:text-blue-500">
    //           Home
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/about" className="hover:text-blue-500">
    //           About
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/services" className="hover:text-blue-500">
    //           Services
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/contact" className="hover:text-blue-500">
    //           Contact
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Navbar;
