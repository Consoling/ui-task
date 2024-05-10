type Props = {};

const ControlPanel = (props: Props) => {
  return (
    <div className="w-full flex flex-row justify-around items-center text-white h-28 border-[1px] rounded-lg shadow-lg mb-10 bg-black shadow-white">
        <button className="border-2 w-16 h-10 rounded-tr-md rounded-bl-md shadow-inner">Add</button>
        <button className="border-2 w-20 h-10 rounded-tr-md rounded-bl-md shadow-inner">Update</button>
        
        <span className="flex items-center text-2xl font-semibold justify-center">Counter: <p className="text-base">0</p></span>
    </div>
  );
};

export default ControlPanel;
