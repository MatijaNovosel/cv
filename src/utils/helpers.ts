import { Screen } from "quasar";

export const smAndDown = () => {
  return ["xs", "sm"].includes(Screen.name);
};

export const mdAndUp = () => {
  return ["md", "lg", "xl"].includes(Screen.name);
};
export const randInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};