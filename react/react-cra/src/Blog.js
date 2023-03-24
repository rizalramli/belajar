import { Link } from "react-router-dom";

export default function Blog() {
    return (
        <>
            <h1>Halaman Blog</h1>
            <ul>
                <li><Link to="/blog/artikel-1">Artikel 1</Link></li>
                <li><Link to="/blog/artikel-2">Artikel 2</Link></li>
                <li><Link to="/blog/artikel-2">Artikel 2</Link></li>
            </ul>
        </>
    );
}
