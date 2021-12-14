import React from 'react';
import 'antd/dist/antd.css'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from "../../../ui/atoms/textInput";
import PasswordInput from "../../../ui/atoms/passwordInput";

export default {
    title: 'Atoms/Input',
    component: TextInput,
} as ComponentMeta<typeof TextInput>;

// @ts-ignore
const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

// @ts-ignore
const TemplatePassword: ComponentStory<typeof PasswordInput> = (args) => <PasswordInput {...args} />;

// @ts-ignore
export const Text = Template.bind({});
Text.args = {
    placeholder: 'write...'
};

// @ts-ignore
export const Password = TemplatePassword.bind({});
Password.args = {
    placeholder: 'password...'
};
