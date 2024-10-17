export default function Card(props: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="card bg-primary w-80 text-secondary mt-10">
            <div className="card-body">
                <div className="flex justify-center">
                    <h2 className="card-title">{props.title}</h2>
                </div>
                {props.children}
            </div>
        </div>
    );
}
