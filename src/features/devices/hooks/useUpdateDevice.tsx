import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Device } from '../../common/types';
import { apiURL } from '../../common/utils';

export const useUpdateDevice = () => {
    const notify = (message: string) => toast(message);
    const navigate = useNavigate();
    async function updateDevice(values: Device) {
        try {
            await Axios.post(apiURL + `/update-device/${values.id}`, {
                name: values.name,
                mac_address: values.mac_address,
                serial: values.serial,
                type: values.type
            });
            notify("Dispositivo atualizado com sucesso");
            navigate(`/device`);
        } catch (error: any) {
            console.log(error)
            if (error.response) {
                console.log(error.response.data)
                notify(error.response.data.message)
            }
        }
    }

    return {
        updateDevice
    }
}