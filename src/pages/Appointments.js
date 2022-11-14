import { useState } from 'react';
import TileList from '../Components/TileList'

const Appointments = (props) => {
    const [title, setTitle] = useState("")
    const [contact, setContact] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addAppointment(title, contact, date, time);
        setTitle("");
        setContact("");
        setDate("");
        setTime("");
    }

    return (
        <>
            <section>
                <h2>Add Appointment</h2> 
                <form onSubmit = {handleSubmit}>
                    <div className="inputDiv">
                        <label htmlFor="title">Title</label>
                        <input name="title" value={title} onChange={({target}) => setTitle(target.value)}/>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="contact">Contact Name</label>
                        <select id="contact-select" name="contact" value={contact} onChange={({target}) => {console.log(target.options);setContact(target.options[target.selectedIndex].innerHTML)}} >
                            <option value={""}>
                                No contact
                            </option>
                            {props.contactsData.map((cont) => (
                                <option value={cont.name} key={cont}>
                                    {cont.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="date">Date</label>
                        <input name="date" value={date} onChange={({target}) => setDate(target.value)} />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="time">Time</label>
                        <input name="time" value={time} onChange={({target}) => setTime(target.value)} />
                    </div>
                    <button className="submitButton" disabled={title==='' || date==='' || time===''}>
                        Submit
                    </button>
                </form>
            </section>
            <hr />
            <section>
                <h2>Appointments</h2>
                <TileList data={props.appointmentsData} />
            </section>
        </>
    );
}

export default Appointments;