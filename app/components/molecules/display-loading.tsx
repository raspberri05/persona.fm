import Loading from "@/app/components/atoms/loading";

export default function DisplayLoading() {
    return (
        <div className="text-center items-center">
            <p className="text-3xl font-bold">
                Analyzing your listening habits{" "}
            </p>
            <p className="text-lg">(this will take 30-60 seconds)</p>
            <Loading />
        </div>
    );
}
