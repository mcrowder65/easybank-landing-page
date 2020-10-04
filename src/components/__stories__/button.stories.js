import React from "react"
import Button from "src/components/button"

export default {
  title: "Button",
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: "Example Button",
}
