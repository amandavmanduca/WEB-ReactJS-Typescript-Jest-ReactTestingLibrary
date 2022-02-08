import {
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import CreateDevicePage from "./pages/devices/create";
import DevicesPage from "./pages/devices/index";
import UpdateDevicePage from "./pages/devices/update";

const RoutesSection = () => {
    return(
        <Routes>
            <Route path="/" element={<Navigate to='/device' />} />
            <Route path="/device" element={<DevicesPage />} />
            <Route path="/device/create" element={<CreateDevicePage />} />
            <Route path="/device/update/:id" element={<UpdateDevicePage />} /> 
        </Routes>
    )
}

// RoutesSection.template = FormTemplate

export default RoutesSection