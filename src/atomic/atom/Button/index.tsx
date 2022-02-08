import Text from "../Text"
import styles from '../index.module.css'


type Props = {
    children: any
    onClick: any
    disabled?: boolean
    type?: string
}

const buttonType: any = {
    primary: '#fc8eac',
    secondary: 'white'
}

export const Button = ({
    children,
    onClick,
    disabled = false,
    type = 'primary',
}: Props) => {
    return (
        <button
            style={{ backgroundColor: buttonType[type] }}
            onClick={onClick}
            disabled={disabled}
            className={styles.button}
            data-testid="button"
        >
            <Text type={type === 'primary' ? 'buttonText' : 'secondaryButtonText'}>{children}</Text>
        </button>
    )
}