import { IPotion } from "./interface/potion";

class ManaPotion implements IPotion {
  usePotion(): String {
    return "Restored mana";
  }
}

export { ManaPotion };
