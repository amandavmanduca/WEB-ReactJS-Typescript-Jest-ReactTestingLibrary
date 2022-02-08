import { FormTemplate } from "../../atomic/template/FormTemplate"
import { DeviceForm } from "../../features/devices/components/DeviceForm"
import { useGetDeviceById } from "../../features/devices/hooks/useGetDeviceById"
import { useUpdateDevice } from "../../features/devices/hooks/useUpdateDevice"
import { useParams } from "react-router-dom"
import { useMemo } from "react"
import { Device } from "../../features/common/types"
import { useNavigate } from 'react-router-dom';

const UpdateDevicePage = () => {
    const { getDevice, data } = useGetDeviceById()
    const { updateDevice } = useUpdateDevice()
    const { id } = useParams()
    const navigate = useNavigate();

    useMemo(() => {
        if (id) {
            getDevice(id)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const onSubmit = async (values: Device) => {
        if (values) {
            await updateDevice(values)
        }
    }

    return (
        <DeviceForm
            onSubmit={onSubmit}
            initialValues={data}
            onCancel={() => navigate(`/device`)}
        />
    )
}

UpdateDevicePage.template = FormTemplate

export default UpdateDevicePage