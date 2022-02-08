import { MaskInput } from "../../../../atomic/atom/MaskInput"
import { SelectInput } from "../../../../atomic/atom/SelectInput"
import Text from "../../../../atomic/atom/Text"
import { TextInput } from "../../../../atomic/atom/TextInput"
import { FormTemplate } from "../../../../atomic/template/FormTemplate"
import { Device, DeviceEnumLabel, DeviceType } from "../../../common/types"
import { macAddressMask } from "../../../common/utils"

type DeviceFormProps = {
    initialValues?: Device | null;
    onSubmit?: any;
    onCancel(): void;
}

type DeviceTypeOptionsType = {
  value: DeviceType;
  label: string;
}

export const DeviceForm = ({ initialValues, onSubmit, onCancel }: DeviceFormProps) => {
  const deviceTypeOptions = [
    {
      value: DeviceType.CAMERA,
      label: DeviceEnumLabel[DeviceType.CAMERA],
    },
    {
      value: DeviceType.REMOTE_CONTROL,
      label: DeviceEnumLabel[DeviceType.REMOTE_CONTROL],
    },
    {
      value: DeviceType.SENSOR,
      label: DeviceEnumLabel[DeviceType.SENSOR],
    }
  ]

  return (
    <FormTemplate
      buttonLabel={initialValues ? 'Salvar' : 'Cadastrar'}
      onCancel={onCancel}
      formProps={{
        onSubmit,
        initialValues: initialValues ? initialValues : {},
        destroyOnUnregister: true,
      }}
    >
      <>
        <Text type="h1">
          Formulário de Dispositivo
        </Text>
        <div>
          <TextInput
            validate="string"
            name="name"
            label="Nome"
          />
          <TextInput
            validate="string"
            name="serial"
            label="Serial"
          />
          <MaskInput
            mask={/^[0-9A-Fa-f]{0,12}$/}
            maskedFunction={macAddressMask}
            validate="string|length:12"
            name="mac_address"
            label="MAC Address"
          />
          <SelectInput
            validate="string"
            name="type"
            label="Tipo"
            options={deviceTypeOptions}
          />
        </div>
      </>
    </FormTemplate>
  )
}
