import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import JetButton from './JetButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Jet UI/Button',
  component: JetButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'md', 'lg'] },
    theme: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'default'] },
  },
  args: {
    size: 'md',
    theme: 'primary',
    text: 'Button text',
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
} satisfies Meta<typeof JetButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    size: 'md',
    theme: 'primary',
    text: 'Primary button',
  },
};

export const Secondary: Story = {
  args: {
    size: 'md',
    theme: 'secondary',
    text: 'Secondary button',
  },
};

export const Success: Story = {
  args: {
    size: 'md',
    theme: 'success',
    text: 'Success button',
  },
};

export const Warning: Story = {
  args: {
    size: 'md',
    theme: 'warning',
    text: 'Warning button',
  },
};
export const Danger: Story = {
  args: {
    size: 'md',
    theme: 'danger',
    text: 'Danger button',
  },
};
export const Default: Story = {
  args: {
    size: 'md',
    theme: 'default',
    text: 'Default button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    theme: 'primary',
    text: 'Primary button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    theme: 'primary',
    text: 'Primary button',
  },
};
