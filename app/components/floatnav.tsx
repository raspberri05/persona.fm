import JoinBtn from "@/app/components/joinbtn";

export default function FloatNav() {
    return (
        <div className="join flex justify-center">
            <JoinBtn text="settings" />
            <JoinBtn text="about" />
            <JoinBtn text="logout" />
        </div>
    );
}
