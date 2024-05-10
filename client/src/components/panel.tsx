import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";



const PanelComp = () => {
  return (
    <PanelGroup direction="vertical" className="gap-2">
    <PanelGroup direction="horizontal" className="gap-3">
     <Panel className="h-96 rounded-md border-2">
       1
     </Panel>
     <PanelResizeHandle />
     <Panel className="h-96 rounded-md border-2">
       1
     </Panel>
     <PanelResizeHandle />
   </PanelGroup>
   <PanelResizeHandle />
   <PanelGroup direction="horizontal">
     <Panel className="h-52 border-2 rounded-md">
       1
     </Panel>
     <PanelResizeHandle />
   </PanelGroup>
     <PanelResizeHandle />
  </PanelGroup>
  )
}

export default PanelComp