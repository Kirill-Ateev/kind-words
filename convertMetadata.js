import { readFile } from 'fs/promises';
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const json = JSON.parse(
  await readFile(
    new URL('./dobroshrift/outputOLD/metadata.json', import.meta.url)
  )
);

const newJson = json.reduce((acc, item, index) => {
  if (index < 300)
    return [
      ...acc,
      {
        name: `Composition №${index + 1}`,
        description: 'Kind Words',
        edition: index + 1,
        image: item.image,
        index,
        attributes: item.attributes,
      },
    ];
  return acc; 
}, []);

console.log(newJson);

fs.writeFileSync(
  path.join(__dirname, `metadata.json`),
  JSON.stringify(newJson, null, 2)
);

// console.log(json);
