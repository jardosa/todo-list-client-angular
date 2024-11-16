import { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Atoms/Button',
  argTypes: {
    text: { control: 'text' },
    fullWidth: { control: 'boolean' },
    icon: { control: 'text' },
    iconPosition: {
      control: 'select',
      options: ['left', 'right']
    },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  }
}


export default meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {}