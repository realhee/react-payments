import { Story } from "@storybook/react";

import CardSecurityCodeInput, { Props } from "./CardSecurityCodeInput";

export default {
  title: "Components/CardSecurityCodeInput",
  component: CardSecurityCodeInput,
};

const Template: Story<Props> = (args) => <CardSecurityCodeInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: (code: string) => console.log(code),
};