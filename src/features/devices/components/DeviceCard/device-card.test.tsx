import { render, screen, cleanup } from '@testing-library/react';
import { DeviceCard } from './index';
import renderer from 'react-test-renderer';
import { Device, DeviceType } from '../../../common/types';

afterEach(() => cleanup())

const mockDevice: Device = {
    id: "1",
    name: 'Name',
    mac_address: "123123123123",
    serial: "12312",
    type: DeviceType.REMOTE_CONTROL
}

test('Should render device card component', async () => {
  // const handleDelete = jest.fn()
  // render(<DeviceCard deleteDevice={handleDelete} device={mockDevice} />)
  // expect(screen.getByTestId('device-card')).toBeInTheDocument()
});


test('Device card component should matches snapshot', async () => {
    // const handleDelete = jest.fn()
    // const tree = renderer.create(<DeviceCard deleteDevice={handleDelete} device={mockDevice} />).toJSON()
    // expect(tree).toMatchSnapshot()
})
