import {Input} from "antd";

interface TextInputProps {
    placeholder: string,
    defaultValue: string,
    onChange: () => void,
}

const TextInput = ({
    placeholder = '',
    defaultValue = '',
    onChange = () => {},
}: TextInputProps) => {
    return (
        <Input placeholder={placeholder} onChange={onChange} defaultValue={defaultValue} />
    )
}

export default TextInput
