import { ThemeColors } from "./styles/colors";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeColors {}
}
