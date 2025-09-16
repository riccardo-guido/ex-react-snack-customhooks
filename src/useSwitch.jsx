import { useState } from "react";

export default function useSwitch(initialValue) {
  const [isOn, setIsOn] = useState(initialValue);
  const toggle = () => setIsOn(curr => !curr);
  return { isOn, toggle };
}
