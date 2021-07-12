import { IBird } from "./birdInterface";
import { BirdsType } from "./birdsType";
import { Penguin } from "./penguin";
import { Seagull } from "./seagull";

class Factory {
  public static createBird(bird: BirdsType): IBird {
    switch (bird) {
      case BirdsType.Seagull:
        return new Seagull();
      case BirdsType.Penguin:
        return new Penguin();
    }
  }
}

export { Factory };
