import { IWeapon } from "./interface/weapon";

class Staff implements IWeapon {
  public attack(): String {
    return "Staff attack fireball";
  }
}

export { Staff };
