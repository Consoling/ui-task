import "./App.css";
import ControlPanel from "./components/control-panel";
// import PanelComp from "./components/panel";
import ResizablePanel from "./components/resizable-panel";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="">
    <ControlPanel />
    {/* <PanelComp /> */}

    <ResizablePanel />
    
    </div>
  
  
  );
};

export default App;
