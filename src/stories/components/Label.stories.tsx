import { ComponentMeta, ComponentStory } from '@storybook/react'
import Label from '../../components/Label'

export default {
  title: 'UI/Label',
  component: Label,
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    fontColor: { control: 'color' }
  }
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = args => <Label {...args} />

export const Default = Template.bind({})

export const AllCaps = Template.bind({})
AllCaps.args = { allCaps: true }

export const Secondary = Template.bind({})
Secondary.args = { color: 'secondary' }

export const Tertiary = Template.bind({})
Tertiary.args = { color: 'tertiary' }

export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
  fontColor: '#09f'
}
