import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export default function driverObj(props){
  const HintBox=driver({
  ...props,
  showProgress: true
})
return HintBox.drive();
};