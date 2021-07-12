import { BirdsType } from "./birdsType";
import { Factory } from "./factory";
import { IBird } from "./birdInterface";

const pinguin: IBird = Factory.createBird(BirdsType.Penguin);
const seagull: IBird = Factory.createBird(BirdsType.Seagull);

console.log(pinguin.eat());
console.log(seagull.eat());
