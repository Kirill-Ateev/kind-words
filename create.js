import fs from 'fs';
import path from 'path';
import Canvas from 'canvas';

const __dirname = path.resolve();
function fontFile(name) {
  return path.join(__dirname, '/fonts/', name);
}

export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

Canvas.registerFont(fontFile('FontOfKindness-Regular.otf'), {
  family: 'FontOfKindness',
});

const HEIGHT = 1024;
const WIDTH = 1024;

alphabet.forEach((char, index) => {
  const countLayouts = 100;
  const dir = `./dobroshrift/layers/${char.toUpperCase()}`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  for (let i = 0; i < countLayouts; i++) {
    const canvas = Canvas.createCanvas(WIDTH, HEIGHT);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'none';
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = '55pt FontOfKindness';
    ctx.translate(WIDTH / 2, HEIGHT / 2);
    let countChars = 0;
    if (randomIntFromInterval(0, 2)) countChars = randomIntFromInterval(1, 4);

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    ctx.fillStyle = `#${randomColor}`;

    for (let j = 0; j < countChars; j++) {
      ctx.rotate((randomIntFromInterval(0, 360) * Math.PI) / 180);
      const x = randomIntFromInterval(-450, 450);
      const y = randomIntFromInterval(-450, 450);
      ctx.fillText(char, x, y);
      ctx.restore();
    }

    const buffer = canvas.toBuffer('image/png', { quality: 1 });

    fs.writeFileSync(
      path.join(
        __dirname,
        `dobroshrift/layers/${char}/State ${
          i + 1
        }, color #${randomColor}, amount ${countChars}.png`
      ),
      buffer
    );

    // canvas
    //   .createPNGStream()
    //   .pipe(
    //     fs.createWriteStream(
    //       path.join(
    //         __dirname,
    //         `dobroshrift/layers/${char}/State ${
    //           i + 1
    //         }, color #${randomColor}, amount ${countChars}.png`
    //       )
    //     )
    //   );
  }
});
