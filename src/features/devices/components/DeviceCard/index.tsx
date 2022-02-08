import { useNavigate } from 'react-router-dom';
import Text from '../../../../atomic/atom/Text';
import { Device, DeviceEnumLabel } from '../../../common/types';
import { formatMacAddress } from '../../../common/utils';
import styles from './device-card.module.css';

type DeviceCardProps = {
    device: Device
    deleteDevice(): void
}

export const DeviceCard = ({ device, deleteDevice }: DeviceCardProps) => {
    const navigate = useNavigate();
    return (
            <div data-testid="device-card" className={styles.deviceCard}>
                <div className={styles.topCard}>
                    <Text type="h2">{device.name}</Text>
                    <div className={styles.iconBox}>
                        <img
                            className={styles.icon}
                            onClick={() => navigate(`/device/update/${device.id}`)}
                            src="/icons/edit.svg"
                            alt="Editar"
                        />
                        <img
                            className={styles.icon}
                            onClick={deleteDevice}
                            src="/icons/delete.svg"
                            alt="Remover"
                        />
                    </div>
                </div>
                <div className={styles.details}>
                    <Text type="h3">MAC Address:</Text>
                    <Text type="p">{formatMacAddress(device.mac_address)}</Text>
                </div>
                <div className={styles.details}>
                    <Text type="h3">Serial:</Text>
                    <Text type="p">{device.serial}</Text>
                </div>
                <div className={styles.details}>
                    <Text type="h3">Tipo:</Text>
                    <Text type="p">{DeviceEnumLabel[device.type]}</Text>
                </div>
            </div>
    )
}