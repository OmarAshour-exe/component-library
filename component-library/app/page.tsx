import { Checkbox } from "@/components/checkbox/Checkbox"
import { css } from "../styled-system/css"

export default function Home() {
  return (
    <div>
      <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>Hello 🐼!</div>
        <Checkbox name={"woooow"}></Checkbox>
    </div>
  )
}
