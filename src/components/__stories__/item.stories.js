import React from "react"
import Item from "src/components/item"

export default {
  title: "Item",
  component: Item,
}

const Template = (args) => <Item {...args} />

export const Online = Template.bind({})
Online.args = {
  icon: "online",
  children:
    "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
}

export const Phone = Template.bind({})
Phone.args = {
  icon: "phone",
  children:
    "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
}

export const Group = Template.bind({})
Group.args = {
  icon: "group",
  children:
    "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
}

export const Chip = Template.bind({})
Chip.args = {
  icon: "chip",
  children:
    "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
}
