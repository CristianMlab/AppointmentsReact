import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Appointments from './pages/Appointments';
import Contacts from './pages/Contacts';
import SharedLayout from './Components/SharedLayout';
import Error from './pages/Error';

function App() {
  const [contactsData, setContactsData] = useState([]);
  const [appointmentsData, setAppointmentsData] = useState([]);

  const addContact = (contactName, email, phone) => {
    let newContact = {
      name: contactName,
      email: email,
      phone: phone
    }
    setContactsData((prev) => [newContact, ...prev])
  }

  const addAppointment = (title, contact, date, time) => {
    let newAppointment = {
      title,
      contact,
      date,
      time
    }
    setAppointmentsData((prev) => [newAppointment, ...prev])
  }

  const onFileChange = (e) => {
    const dataFile = e.target.files[0];
    let read = new FileReader();
    read.readAsBinaryString(dataFile);
    read.onloadend = () => {
      console.log(read.result)
      const data = JSON.parse(read.result);
      setContactsData(data.contacts);
      setAppointmentsData(data.appointments);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home data={{contacts: contactsData, appointments: appointmentsData}} fileImportChange={ onFileChange }/>} />
          <Route path='/contacts' element={<Contacts data={ contactsData } addData={ addContact } />} />
          <Route path='/appointments' element={<Appointments contactsData={ contactsData } appointmentsData={ appointmentsData } addAppointment={ addAppointment} />} />
          <Route path='/AppointmentsReact' element={<Home />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
