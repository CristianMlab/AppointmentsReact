import { useState } from 'react';
import TileList from '../Components/TileList';

const Contacts = (props) => {
    const [contactName, setContactName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addData(contactName, email, phone);
        setContactName("");
        setEmail("");
        setPhone("");
    }

    const checkName = () => {
        const check = props.data.reduce(
            (acc, current) => current.name === contactName ? acc + 1 : acc,
            0
        )
        if(check === 1){
            return true;
        }
        return false;
    }

    return (
        <>
            <section>
                <h2>Add Contact {checkName() ? '- Name is duplicate' : ''}</h2> 
                <form onSubmit = {handleSubmit}>
                    <div className="inputDiv">
                        <label htmlFor="name">Name</label>
                        <input name="name" value={contactName} onChange={({target}) => setContactName(target.value)}/>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="email">Email</label>
                        <input name="email" value={email} onChange={({target}) => setEmail(target.value)} />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input name="phone-number" value={phone} onChange={({target}) => setPhone(target.value)} />
                    </div>
                    <button className="submitButton" disabled={checkName()}>
                        Submit
                    </button>
                </form>
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList data={props.data} />
            </section>
        </>
    )
}

export default Contacts;