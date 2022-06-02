import * as React from "react";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import "./App.css"
import Projection from "./components/projection";
import TopHeader from "./components/topHeader.js";
import Archive from "./components/archive.js";

export default function App() {

  const [entries, setEntries] = React.useState(
    [
      {id: createId(), body: "this is a test of your emergency broadcast system"},
      {id: createId(), body: "second entry"}
    ])

  const [currentId, setCurrentId] = React.useState(entries[0].id)

  function createId() {
    // creates random id consisting of max 8 digits and 5 random letters
    const nums = (Math.floor(Math.random() * 9999)) * (Math.floor(Math.random() * 9999))
    
    let count = 0
    let chosenLetters = ""
    while (count < 5) {
      chosenLetters += "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)]
      count++
    }
    return nums + chosenLetters
  }
  
  function loadCurrentId(event) {
    //controlled by Archive, will send selected ID from onClick handler and update currentId state
    const {id} = event.target
    console.log("clicked on ID: ",id)
    setCurrentId(id)
  }

  function updateEntry(event) {
    //controlled by Projection, will send updated body state (value) of current entry by matching its ID
    const {id, value} = event.target
    setEntries((oldEntries) => {
      return oldEntries.map((oldEntry) => {
        if (oldEntry.id === id) {
          return {...oldEntry, body: value}
        } else {
          return oldEntry
        }
      })
    })
  }


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
                entries={entries}
                loadCurrentId={loadCurrentId}
                  
                />
              
              </div>
            </Allotment.Pane>
            <div className="projectionPanel">
              
              <Projection
              entries={entries}
              currentId={currentId}
              updateEntry={updateEntry}
            
              />
            
            </div>
          </Allotment>
        </div>
      </main>
  )
}
