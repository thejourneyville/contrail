import { saveAs } from "file-saver";

export const handleSave = (entries, currentId, size) => {
    if (size === 1) {
        const current = entries.find((entry) => entry.id === currentId);
        const currentEntry = current.body;

        const newVersionConfirmation = current.hasOwnProperty("timeStamp");

        const currentTimeStamp = newVersionConfirmation
            ? current.timeStamp.replaceAll(" ", "")
            : "invalidTimeStamp";
        // const currentTimeStamp = current.timeStamp.replaceAll(" ", "");

        let blob = new Blob([currentEntry], {
            type: "text/plain;charset=utf-8",
        });
        saveAs(blob, `${currentTimeStamp}.txt`);
    } else if (size > 1) {
        const allEntries = entries
            .map((entry) => {
                return "ENTRY\n".concat(entry.body).concat("\n\n");
            })
            .reverse();
        let blob = new Blob([allEntries], {
            type: "text/plain;charset=utf-8",
        });

        const newVersionConfirmation =
            entries[allEntries.length - 1].hasOwnProperty("timeStamp") &&
            entries[0].hasOwnProperty("timeStamp");

        const earliestEntry = newVersionConfirmation
            ? entries[allEntries.length - 1].timeStamp
            : "invalidTimeStamp";

        // const earliestEntry = entries[
        //     allEntries.length - 1
        // ].timeStamp

        const latestEntry = newVersionConfirmation
            ? entries[0].timeStamp
            : "invalidTimeStamp";

        const earliestEntryFormat = earliestEntry.replaceAll(" ", "");
        const latestEntryFormat = latestEntry.replaceAll(" ", "");
        console.log(earliestEntryFormat, latestEntryFormat);

        saveAs(blob, `${earliestEntryFormat}-${latestEntryFormat}.txt`);
    }
};
