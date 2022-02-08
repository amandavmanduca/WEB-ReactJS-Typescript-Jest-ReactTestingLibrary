import Axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Device } from '../../common/types';
import { apiURL } from '../../common/utils';

export const useGetDeviceById = () => {
    const [data, setData] = useState<Device>()
    const notify = (message: string) => toast(message);
    const navigate = useNavigate();
    async function getDevice(id: string) {
        try {
            const { data: response } = await Axios.get(apiURL + `/device/${id}`);
            setData(response)
        } catch (error: any) {
            console.error(error);
            if (error.response) {
                console.log(error.response.data)
                notify(error.response.data.message)
                navigate(`/device`);
            }
        }
    }

    return {
        getDevice,
        data
    }
}