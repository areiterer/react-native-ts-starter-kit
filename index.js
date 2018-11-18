/** @format */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import StorybookUI from "./storybook";

let ComponentToRegister = App;

if (process.env.IS_STORYBOOK) ComponentToRegister = StorybookUI;

AppRegistry.registerComponent(appName, () => ComponentToRegister);
