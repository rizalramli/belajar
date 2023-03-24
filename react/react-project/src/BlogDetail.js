import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail(){
    const params = useParams();
    const [article,setArticle] = useState({});
    const [loading,setLoading] = useState(true);
    const [notFound,setNotFound] = useState(false);

    useEffect(function(){
        document.title = 'Blog Detail';
        async function getArticle()
        {
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/blogs/${params.id}`);
            if(!request.ok){
                setNotFound(true);
            }
            const response = await request.json();
            setArticle(response);
            setLoading(false);
        }
        getArticle();
    },[params]);

    if(notFound){
        return <h1>Artikel tidak ditemukan :(</h1>
    }

    return (
        <section className="section">
            {loading ? 
            <i>Loading Data ...</i> : 
                <article className="articles">
                    <h2 className="article-title">{article.title}</h2>
                    <time className="article-time">
                        {new Date(article.publishedAt).toLocaleDateString()}
                    </time>
                    <img className="article-image" src={article.imageUrl} alt={article.title}></img>
                    <p className="article-summary">
                        {article.summary}
                    </p>
                </article>
            }
        </section>
    );
}