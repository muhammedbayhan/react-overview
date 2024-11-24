//ESModules

export const username = "John Doe";
export const age = 30;
export function name(params) {
  console.log(params);
}

const username2 = "Jane Doe";
const age2 = 25;
function name2(params) {
  console.log;
}

export { username2, age2, name2 };

export default function display() {
  console.log("Hello World");
}

//OTHER FILE
import {
  username as Nickname,
  age,
  name,
  username2,
  age2,
  name2,
} from "./es_modules.js";
import display from "./es_modules.js";
