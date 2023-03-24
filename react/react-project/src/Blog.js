import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog(){
    const [articles,setArticle] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(function(){
        document.title = 'Blog';
        async function getData(){
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
            const response = await request.json();
            setArticle(response);
            setLoading(false);
        }
        getData();
    },[]);
    return (
        <section className="section">
            <h1 className="section-title">Blog Page</h1>
            <p className="section-description">ini adalah kumpulan blog diambil dari API :</p>
            {loading && <i>Loading Data ...</i>}
            {!loading && 
                <div className="articles">
                    {articles.map(function(item){
                        return (
                            <article key={item.id} className="article">
                                <h2 className="article-title">
                                    <Link to={`/blog/${item.id}`}>
                                    {item.title}
                                    </Link>
                                </h2>
                                <time className="article-time">
                                    {new Date(item.publishedAt).toLocaleDateString()}
                                </time>
                            </article>
                        );
                    })}
                </div>
            }
        </section>
    ); 
}