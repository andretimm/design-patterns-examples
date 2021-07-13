import { IPotion } from "../potions/interface/potion";
import { IWeapon } from "../weapons/interface/weapon";

interface AbstractFactory {
  createWeapon(): IWeapon;
  createPotion(): IPotion;
}

export { AbstractFactory };
