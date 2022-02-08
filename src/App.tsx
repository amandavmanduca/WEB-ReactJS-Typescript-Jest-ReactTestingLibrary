import RoutesSection from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AdminTemplate } from './atomic/template/AdminTemplate';

function App() {
  return (
    <AdminTemplate>
      <RoutesSection />
      <ToastContainer hideProgressBar={true} theme={'dark'} />
    </AdminTemplate>
  );
}

export default App;
