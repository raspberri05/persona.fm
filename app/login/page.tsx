import { login } from "@/app/api/actions/login/actions";
import Button from "@/app/components/atoms/button";

export default function LoginPage() {
    return (
        <div className="text-center">
            <form>
                <Button
                    variant="primary"
                    text="Sign In with Google"
                    formAction={login}
                />
            </form>
        </div>
    );
}
