import Text from '../atom/Text'
import styles from './index.module.css';

type Props = {
    children: any;
}

export const AdminTemplate = ({children}: Props) => {
    return (
        <div className={styles.adminTemplate}>
            <div className={styles.adminTopBar}>
                <div>
                    <Text type="h2">SISTEMA ADMINISTRATIVO</Text>
                    <Text type="p">ÁREA RESTRITA</Text>
                </div>
                <div className={styles.adminAvatarBox}>
                    <img className={styles.avatarImage} src="/icons/avatar.png" alt="User" />
                    <div className={styles.userInfo}>
                        <Text type="h5">Nome do Usuário</Text>
                        <Text type="p">Administrador</Text>
                    </div>
                </div>
            </div>
            <div className={styles.adminBody}>
                <div className={styles.bodyDisplay}>
                    {children}
                </div>
            </div>
        </div>
    )
}