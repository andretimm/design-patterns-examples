import { IBird } from "./birdInterface";

class Seagull implements IBird {
  eat(): String {
    return "> Seagull eating";
  }
}
export { Seagull };
