import { FormTemplate } from "../../atomic/template/FormTemplate"
import { Device } from "../../features/common/types"
import { DeviceForm } from "../../features/devices/components/DeviceForm"
import { useCreateDevice } from "../../features/devices/hooks/useCreateDevice"
import { useNavigate } from 'react-router-dom';

const CreateDevicePage = () => {
    const { createDevice } = useCreateDevice()
    const navigate = useNavigate();

    const onSubmit = async (values: Device) => {
        if (values) {
            await createDevice(values)
        }
    }
    return (
        <DeviceForm
            onSubmit={onSubmit}
            onCancel={() => navigate(`/device`)}
        />
    )
}

CreateDevicePage.template = FormTemplate

export default CreateDevicePage