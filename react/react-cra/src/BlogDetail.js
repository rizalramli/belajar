import { useParams } from "react-router-dom";

export default function BlogDetail() {
    const urlParams = useParams();
    return (
        <>
            <h1>Detail Blog</h1>
            <p>Ini adalah halaman blog detail dari {urlParams.slug}</p>
        </>
    );
}
