import { Meta, StoryObj } from "@storybook/react"
import {Checkbox} from "../../components/checkbox/Checkbox";

const addButtonMother = {
  label: "change",
}

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ["autodocs"],

}

export default meta
type Story = StoryObj<typeof Checkbox>

export const StandardAddButton: Story = {
  args: {
    ...addButtonMother,
  },
}
