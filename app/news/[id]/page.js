export default function NewsDetailsPage({ params }) {
    return (
        <>
            <h1>News Detais Page</h1>
            <p>News: {params.id}</p>
        </>
    );
}
