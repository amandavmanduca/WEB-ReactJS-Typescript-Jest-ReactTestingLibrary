import Axios from 'axios';
import { toast } from 'react-toastify';
import { Device } from '../../common/types';
import { useNavigate } from 'react-router-dom';
import { apiURL } from '../../common/utils';

export const useCreateDevice = () => {
    const notify = (message: string) => toast(message);
    const navigate = useNavigate();

    async function createDevice(values: Device) {
        try {
            await Axios.post(apiURL + '/create-device', values)
            notify("Dispositivo criado com sucesso");
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
        createDevice
    }
}