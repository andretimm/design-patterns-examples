import { IPotion } from "./interface/potion";

class HealthPotion implements IPotion {
  usePotion(): String {
    return "Restored health";
  }
}

export { HealthPotion };
