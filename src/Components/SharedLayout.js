import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <section className='content'>
                <Outlet />
            </section>
        </>
    )
}

export default SharedLayout;
