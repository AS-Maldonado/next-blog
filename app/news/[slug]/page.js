import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsDetailsPage({ params }) {
    const newsItem = DUMMY_NEWS.find(
        (newsItem) => newsItem.slug == params.slug
    );

    return (
        <article className="news-article">
            <div>
                <img
                    src={`/images/news/${newsItem.image}`}
                    alt={newsItem.title}
                />
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </div>

            <p>{newsItem.content}</p>
        </article>
    );
}
