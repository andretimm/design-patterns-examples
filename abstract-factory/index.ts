import { Mage } from "./src/characters/mage";
import { Warrior } from "./src/characters/warrior";
import { AbstractFactory } from "./src/interfaces/abstractFactory";
import { IPotion } from "./src/potions/interface/potion";
import { IWeapon } from "./src/weapons/interface/weapon";

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
