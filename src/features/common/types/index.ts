
export enum DeviceType {
    CAMERA = 'CAMERA',
    SENSOR = 'SENSOR',
    REMOTE_CONTROL = 'REMOTE_CONTROL',
}

export const DeviceEnumLabel = {
    CAMERA: 'Câmera',
    SENSOR: 'Sensor',
    REMOTE_CONTROL: 'Controle Remoto',
}

export type Device = {
    id: string;
    name: string;
    serial: string;
    mac_address: string;
    type: DeviceType;
}