import React from "react";

export default function Archive({ entries, loadCurrentId, currentId }) {
    const entryList = entries.map((entry) => {
        //mapping out all entries as <divs>
        const currentTab =
            currentId === entry.id ? "contrailTabCurrent" : "contrailTab";
        return (
            <div
                key={entry.id}
                className={currentTab}
                id={entry.id}
                onClick={(e) => loadCurrentId(e)}
            >
                <div
                    className="archiveTimeStamp"
                    id={entry.id}
                    onClick={(e) => e.stopPropagation}
                >
                    {entry.timeStamp}
                </div>
                <div
                    className="archiveEntry"
                    id={entry.id}
                    onClick={(e) => e.stopPropagation}
                >
                    {entry.body ? entry.body.slice(0, 31).concat("...") : ""}
                </div>
            </div>
        );
    });

    return <div className="allTabs">{entryList}</div>;
}
