import { Link, Outlet } from "react-router-dom";

export default function About() {
    return (
        <>
            <h1>Halaman About</h1>
            <p>Untuk detail dari about bisa klik link dibawah ini</p>
            <ul>
                <li>
                    <Link to="/about/team">Team</Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
        
}
