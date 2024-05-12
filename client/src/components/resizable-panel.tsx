import { useState, useEffect } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import axios from "axios";



const ResizablePanel = () => {
  const BACKEND_URL = import.meta.env.BACKEND_URL;
  const [imageOne, setImageOne] = useState("");
  const [imageTwo, setImageTwo] = useState("");
  const [imageThree, setImageThree] = useState("");

  useEffect(() => {
    async function fetchImages() {
      await axios.get(`${BACKEND_URL}`).then((res) => {setImageOne(res?.data); setImageTwo(res?.data); setImageThree(res?.data);})
    }
    fetchImages();
  }, []);

  return (
    <div className="h-screen">
      <PanelGroup direction="horizontal" className=" w-full">
        <Panel className="w-full h">
          <PanelGroup direction="vertical">
            <Panel className="w-full h-96">
              <PanelGroup direction="horizontal">
                <Panel className="border w-full h-96">
                  <img
                    className="h-full w-full object-contain"
                    alt="image-1"
                    src={imageOne}
                  />
                </Panel>
                <PanelResizeHandle />
                <Panel className="border w-full h-96">
                  <img
                    className="h-full w-full object-contain"
                    alt="image-1"
                    src={imageTwo}
                  />
                </Panel>
              </PanelGroup>
            </Panel>
            <PanelResizeHandle />
            <Panel className="border">
              <img
                className="h-full w-full object-contain"
                alt="image-1"
                src={imageThree}
              />
            </Panel>
          </PanelGroup>
        </Panel>
        <PanelResizeHandle />
      </PanelGroup>
    </div>
  );
};

export default ResizablePanel;
