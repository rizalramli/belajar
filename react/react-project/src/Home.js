import {useEffect} from 'react';
export default function Home(){
    useEffect(function(){
        document.title = 'Home';
    },[])
    return (
        <section className="section">
            <h1 className="section-title">Home Page</h1>
            <p className="section-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, hic! Vel dolor, distinctio et quod maiores voluptatibus possimus laborum similique eius aperiam quidem autem blanditiis iusto quaerat quis corporis voluptatem magni in deserunt? Non cumque animi necessitatibus nisi? Laboriosam aperiam tempore nisi perspiciatis optio harum in cumque quod a temporibus.
            </p>
        </section>
    );
}