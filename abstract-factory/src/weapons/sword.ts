import { IWeapon } from "./interface/weapon";

class Sword implements IWeapon {
  public attack(): String {
    return "Sword attack";
  }
}

export { Sword };
