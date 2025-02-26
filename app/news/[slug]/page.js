import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsDetailsPage({ params }) {
    const newsItem = DUMMY_NEWS.find(
        (newsItem) => newsItem.slug == params.slug
    );

    if (!newsItem) notFound();

    return (
        <article className="news-article">
            <div>
                <Link href={`/news/${params.slug}/image`}>
                    <img
                        src={`/images/news/${newsItem.image}`}
                        alt={newsItem.title}
                    />
                </Link>

                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </div>

            <p>{newsItem.content}</p>
        </article>
    );
}
