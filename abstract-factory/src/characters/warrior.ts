import { AbstractFactory } from "../interfaces/abstractFactory";
import { HealthPotion } from "../potions/health";
import { IPotion } from "../potions/interface/potion";
import { IWeapon } from "../weapons/interface/weapon";
import { Sword } from "../weapons/sword";

class Warrior implements AbstractFactory {
  public createWeapon(): IWeapon {
    return new Sword();
  }
  public createPotion(): IPotion {
    return new HealthPotion();
  }
}

export { Warrior };
