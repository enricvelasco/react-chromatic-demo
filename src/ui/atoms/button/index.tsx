import {Button as AntButton} from "antd";

interface ButtonProps {
    type?: "link" | "text" | "ghost" | "primary" | "default" | "dashed" | undefined,
    label?: string,
    size?: string,
    block?: boolean,
    onClick?: () => void;
}

const Button = ({
    type="primary",
    label = "Button",
    size = "default",
    block = false,
    onClick = () => {},
}: ButtonProps) => {
    return (
        <AntButton
            type={type}
            block={block}
            value={size}
            onClick={onClick}
        >
            {label}
        </AntButton>
    )
}

export default Button
