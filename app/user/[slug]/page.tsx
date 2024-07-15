export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div>
            <br />
            <br />
            <h1 className="text-6xl">{`Welcome, ${params.slug}`}</h1>
        </div>
    );
}
