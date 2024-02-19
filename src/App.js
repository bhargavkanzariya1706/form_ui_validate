import './App.css';
import RegistrationForm from './components/registration-form'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="container">
        <RegistrationForm />
      </div>
    </LocalizationProvider>
  );
}

export default App;
