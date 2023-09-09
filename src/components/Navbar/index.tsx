import React from "react";
import Icon from "../Icon";
import Modal from "../Modal";
import Dropdown from "../Dropdown";

const Navbar: React.FC = () => {
  //   const [show, setShow] = React.useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const data = [
    { name: "hama", icon: "compWithPhone" },
    { name: "hama", icon: "clear" },
    { name: "hama", icon: "clear" },
  ];

  const openCategory = () => {
    setShowMenu(!showMenu);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleShow = () => {
    setIsModalOpen(true);
    setShowMenu(false);
  };
  return (
    <div className="border-b-2 border-gray-400 p-2">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between h-20 items-center">
          <img
            className="h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqYMGK0uAWWKuEsbqGwXWfQGq8kU76j3oipdfrgX8t_ynXy5NpPzEOmaj2Zfr-yq9sdA&usqp=CAU"
            alt=""
          />
          <div>
            <button
              className="transition duration-150 hover:ease-in flex justify-between space-x-3 bg-blue-600 text-white text-[18px] font-bold rounded-lg px-6 py-[12px]"
              onClick={openCategory}
            >
              <Icon name={showMenu ? "menu" : "clear"} size={27} />
              <span className="">Katalog</span>
            </button>
          </div>
          <div className="w-[55%] flex items-center border-2 border-blue-600 rounded-lg">
            <input className="w-[85%] outline-none px-3" type="text" />
            <div
              className="flex text-gray-600 bg-gray-200 rounded-lg cursor-pointer py-2 px-3 mx-2"
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
            <button className="bg-blue-600 text-white rounded-r-lg mr-[-2px] px-4 py-[10px]">
              <Icon name="search" size={30} />
            </button>
          </div>
          <div className="w-[20%] flex justify-between">
            <div className="flex flex-col items-center hover:text-blue-600 cursor-pointer">
              <Icon name="accountcircle" size={30} />
              register
            </div>
            <div className="flex flex-col items-center hover:text-blue-600 cursor-pointer">
              <Icon name="shoppingcart" size={30} />
              Корзина
            </div>
            <div className="flex flex-col items-center hover:text-blue-600 cursor-pointer">
              <Icon name="favoriteborder" size={30} />
              Избранное
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
      {!showMenu && !isModalOpen && (
        <div className="w-full px-16 absolute left-0 top-20 bg-white p-[10px] mx-au">
          <Dropdown type="category" options={data} />
        </div>
      )}
      {/* {!showMenu && !isModalOpen && (
        <div className="px-16 absolute left-0 top-20 p-[10px] mx-au">
          <Categories />
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
