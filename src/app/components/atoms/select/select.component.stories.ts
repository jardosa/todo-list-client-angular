import { Meta, StoryObj } from "@storybook/angular";
import { SelectComponent } from "./select.component";

const meta: Meta<SelectComponent> = {
  component: SelectComponent,
  title: 'Atoms/Select',
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of options for the dropdown'
    },
    value: {
      control: 'text',
      description: 'Currently selected value'
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, makes the select full width'
    },
    error: {
      control: 'boolean',
      description: 'If true, adds an error style to the dropdown'
    },
    className: {
      control: 'text',
      description: 'Additional custom CSS classes for styling'
    },
  },
}


export default meta;

type Story = StoryObj<SelectComponent>;

export const Default: Story = {
  args: {
    options: [
      { name: 'Option 1', value: '1' },
      { name: 'Option 2', value: '2' },
      { name: 'Option 3', value: '3' },
    ],
    value: '1',
    fullWidth: false,
    error: false,
    className: '',
  }
}