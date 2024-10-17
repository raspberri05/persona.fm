export default function Contact() {
    return (
        <div className="grid justify-items-center">
            <p className="text-4xl">We welcome your feedback!</p>
            <p className="text-2xl">
                Please leave any questions, comments, or concerns below
            </p>
            <br />
            <p className="text-xl">The contact box is under development</p>
            <p className="text-xl ">
                Please email me at{" "}
                <a href="mailto:naya.singhania@gmail.com">
                    naya.singhania@gmail.com
                </a>{" "}
                to leave feedback
            </p>
            <br />
            <label className="w-80  input input-bordered flex items-center gap-2">
                Email
                <input disabled className="grow" type="text" placeholder="" />
            </label>
            <textarea
                disabled
                className="textarea textarea-bordered w-80 h-32"
                placeholder="Message"
            />
        </div>
    );
}
