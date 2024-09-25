import Back from "@/app/components/back";

export default function BackTitle(props: { title: string }) {
    return (
        <div>
            <br />
            <Back />
            <p className="text-4xl ml-4 flex justify-center items-center">
                {props.title}
            </p>
        </div>
    );
}
