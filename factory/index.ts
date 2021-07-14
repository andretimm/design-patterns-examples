import { BirdsType } from "./src/birdsType";
import { Factory } from "./src/factory";
import { IBird } from "./src/birdInterface";

const pinguin: IBird = Factory.createBird(BirdsType.Penguin);
const seagull: IBird = Factory.createBird(BirdsType.Seagull);

console.log(pinguin.eat());
console.log(seagull.eat());
