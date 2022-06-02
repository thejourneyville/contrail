import * as React from "react";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import "./App.css"
import Projection from "./components/projection";
import TopHeader from "./components/topHeader.js";
import Archive from "./components/archive.js";

export default function App() {

  
  return (
      <main className="outerBorder">
        <div className="outerContainer">
          
          <TopHeader />
          
          <Allotment defaultSizes={[1, 2]}>
            <Allotment.Pane minSize={0} maxSize={200}>
              
              <div className="archivePanel">
                
                <div className="archiveControl">
                  <button>+</button>
                  <div className="box"></div>
                </div>
                
                <Archive
                  
                />
              
              </div>
            </Allotment.Pane>
            <div className="projectionPanel">
              
              <Projection
             
              />
            
            </div>
          </Allotment>
        </div>
      </main>
  )
}
