import { Mage } from "./characters/mage";
import { Warrior } from "./characters/warrior";
import { AbstractFactory } from "./interfaces/abstractFactory";
import { IPotion } from "./potions/interface/potion";
import { IWeapon } from "./weapons/interface/weapon";

function client(factory: AbstractFactory) {
  const weapon: IWeapon = factory.createWeapon();
  const potion: IPotion = factory.createPotion();

  console.log(weapon.attack());
  console.log(potion.usePotion());
}
console.log("----WARRIOR----");
client(new Warrior());
console.log("----MAGE----");
client(new Mage());
