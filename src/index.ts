const fs = require('fs');
const roadmap = require('./data/roadmap');

const entries: DataRecord[] = [
    {
        collectionName: 'roadmap',
        dataSource: roadmap
    }
];

for (const entry of entries) {
    const path = `database/${entry.collectionName}`;
    fs.writeFile(`${path}.json`, JSON.stringify(entry.dataSource, null, 2), (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
        // success case, the file was saved
        console.log(`Wrote entry '${entry.collectionName}' to '${path}.json'`);
    });
}

type DataRecord = {
    collectionName: string;
    dataSource: any;
}
