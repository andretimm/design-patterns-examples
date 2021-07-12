import { IBird } from "./birdInterface";

class Penguin implements IBird {
  eat(): String {
    return "> Penguin eating";
  }
}
export { Penguin };
