import { Meta, StoryObj } from "@storybook/angular";
import { InputComponent } from "./input.component";

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'Atoms/Input',
  argTypes: {
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    placeholder: { control: 'text' }
  }
}


export default meta;

type Story = StoryObj<InputComponent>;

export const Default: Story = {}