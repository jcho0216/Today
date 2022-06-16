import { atom } from "recoil";

export const MyHood = atom({
  key: "hood",
  default: "보람동",
});

export const CarousalIndex = atom({
  key: "carousal-index",
  default: 0,
});

export const TodoContents = atom({
  key: "todo",
  default: JSON.parse(localStorage.getItem("todo-contents") ?? "[]") as {
    content: string;
    isChecked: boolean;
  }[],
});
