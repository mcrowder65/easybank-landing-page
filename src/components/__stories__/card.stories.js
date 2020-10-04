import React from "react"
import Card from "src/components/card"
export default {
  title: "Card",
  component: Card,
}

const Template = (args) => <Card {...args} />

export const Currency = Template.bind({})
Currency.args = {
  image: "currency",
  review:
    "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  author: "Claire Robinson",
}
