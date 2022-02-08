import Axios from 'axios';
import { toast } from 'react-toastify';
import { apiURL } from '../../common/utils';

export const useDeleteDevice = () => {
    const notify = (message: string) => toast(message);

    async function deleteDevice(id: string) {
        try {
            await Axios.delete(apiURL + `/delete-device/${id}`);
            notify("Dispositivo removido com sucesso");
        } catch (error: any) {
            console.log(error)
            if (error.response) {
                console.log(error.response.data)
                notify(error.response.data.message)
            }
        }
    }

    return {
        deleteDevice
    }
}