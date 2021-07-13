import { AbstractFactory } from "../interfaces/abstractFactory";
import { IPotion } from "../potions/interface/potion";
import { ManaPotion } from "../potions/mana";
import { IWeapon } from "../weapons/interface/weapon";
import { Staff } from "../weapons/staff";

class Mage implements AbstractFactory {
  public createWeapon(): IWeapon {
    return new Staff();
  }
  public createPotion(): IPotion {
    return new ManaPotion();
  }
}

export { Mage };
