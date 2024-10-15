export default function UserProfile() {
    return (
        <div className="card bg-primary w-80 text-secondary mt-10">
            <div className="card-body">
                <div className="flex justify-center">
                    <h2 className="card-title">Your profile</h2>
                </div>
                <p>Display name: </p>
                <p>Full Name: </p>
                <p>Email: </p>
                <p>Profile photo: </p>
            </div>
        </div>
    );
}
