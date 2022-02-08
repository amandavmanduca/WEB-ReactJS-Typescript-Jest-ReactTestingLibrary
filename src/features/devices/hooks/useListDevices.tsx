import Axios from 'axios';
import { useState } from 'react';
import { apiURL } from '../../common/utils';

export const useListDevices = () => {
    const [data, setData] = useState([])

    async function listDevices() {
        try {
            const { data: response } = await Axios.get(apiURL + '/devices');
            setData(response)
        } catch (error: any) {
            console.error(error);
        }
    }

    return {
        listDevices,
        data
    }
}