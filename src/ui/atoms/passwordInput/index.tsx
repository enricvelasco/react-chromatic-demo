import {Input} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

interface PasswordProps {
    placeholder: string,
    enableReader: boolean,
    onChange: () => void,
}

const PasswordInput = ({
    placeholder = '',
    enableReader = true,
    onChange = () => {},
}: PasswordProps) => {
    return (
        <Input.Password
            placeholder={placeholder}
            iconRender={visible => (visible && enableReader ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            onChange={onChange}
        />
    )
}

export default PasswordInput
