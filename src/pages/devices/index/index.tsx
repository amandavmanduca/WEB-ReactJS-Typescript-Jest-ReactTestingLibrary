import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../atomic/atom/Button';
import Text from '../../../atomic/atom/Text';
import { Device } from '../../../features/common/types';
import { DeviceCard } from '../../../features/devices/components/DeviceCard';
import { useDeleteDevice } from '../../../features/devices/hooks/useDeleteDevice';
import { useListDevices } from '../../../features/devices/hooks/useListDevices';
import styles from './index.module.css';


const DevicesPage = () => {
    const { listDevices, data } = useListDevices()
    const { deleteDevice } = useDeleteDevice()
    const navigate = useNavigate();

    useEffect(() => {
        listDevices()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function handleDelete(id: string) {
        if (id) {
            await deleteDevice(id)
            listDevices()
        }
    }

    return (
        <div className={styles.flexBox}>
            <div className={styles.flexBox}>
                <div>
                    <Button
                        onClick={() => navigate('/device/create')}
                    >
                        Criar dispositivo
                    </Button>
                </div>
                <Text type="h1">Listagem de dispositivos</Text>
            </div>
            {data?.length > 0 ? (
                <div data-testid="device-card-section" className={styles.deviceCardBox}>
                    {data?.map((device: Device) => (
                        <DeviceCard
                            key={device.id}
                            device={device}
                            deleteDevice={() => handleDelete(device.id)}
                        />
                    ))}
                </div>
            ) : (
                <div data-testid="empty-data" className={styles.noDataFoundBox}>
                    <Text type="h1">Nenhum dispositivo encontrado</Text>
                    <Link to="/device/create"><Text type="p">Comece a cadastrar clicando aqui.</Text></Link>
                    <img src="/icons/empty-folder.png" alt="Empty" />
                </div>
            )}
        </div>
    )
}

export default DevicesPage