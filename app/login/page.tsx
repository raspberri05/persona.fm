import { login } from "./actions";

export default function LoginPage() {
    return (
        <div className="text-center">
            <form>
                <button className="btn btn-primary" formAction={login}>
                    Sign In with Google
                </button>
            </form>
        </div>
    );
}
