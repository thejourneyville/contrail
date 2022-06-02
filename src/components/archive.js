import React from 'react'

export default function Archive({entries, loadCurrentId}) {

  const entryList = entries.map((entry) => {
    //mapping out all entries as <divs>
    return (
    <div key={entry.id} className="contrailTab" id={entry.id} onClick={(event) => loadCurrentId(event)}>
      {entry.body.slice(0,15)}
    </div>
    )
  })

  return (
    <div className="allTabs">
      {entryList}
    </div>
  )
}