import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  title: 'ui-style-lib/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Click Me",
    onClick: () => alert("Button clicked!"),
  },
};

