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
const color = 'white';

const canvas = Canvas.createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext('2d');

ctx.fillStyle = color;
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas
  .createPNGStream()
  .pipe(
    fs.createWriteStream(
      path.join(__dirname, `dobroshrift/layers/background/${color}.png`)
    )
  );
