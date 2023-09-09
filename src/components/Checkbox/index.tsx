const Checkbox: React.FC<ICheckbox.props> = ({ type, label, chacked }) => {
  if (type === "checkbox") {
    return (
      <div className=" flex  items-center text-[18px]">
        <input
          type="checkbox"
          checked={chacked}
          className="w-[18px] h-[18px] border-2 rounded-full accent-blue-600"
        />
        <span className="mb-[2px] ml-[10px]">{label}</span>
      </div>
    );
  } else if (type === "radio") {
    return (
      <div className=" flex justify- items-center text-[18px]">
        <input
          type="radio"
          checked={chacked}
          className="w-[18px] h-[18px] border-2 rounded-full accent-blue-600"
        />
        <span className="mb-[2px] ml-[10px]">{label}</span>
      </div>
    );
  }
};

export default Checkbox;
