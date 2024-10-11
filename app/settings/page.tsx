"use client";

import { authFail, getUsername } from "@/app/helper";
import { useEffect, useState } from "react";

export default function Page() {
    const [username, setUsername] = useState<string | null>(null);

    const openModal = () => {
        const modal = document.getElementById(
            "my_modal_1",
        ) as HTMLDialogElement;
        modal?.showModal();
    };

    useEffect(() => {
        authFail();
        const username = getUsername();
        setUsername(username ?? null);
    }, []);

    return (
        <div>
            <br />
            <p className="text-2xl">{username ?? ""}</p>
            <br />
            <button className="btn btn-error" onClick={openModal}>
                Delete Account
            </button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-primary text-secondary">
                    <h3 className="font-bold text-lg">
                        Confirm Account Deletion
                    </h3>
                    <p className="py-4">
                        If your account is deleted, all your data will
                        immediately be lost ond unable to be recovered!
                    </p>
                    <div className="modal-action">
                        <button className="btn btn-error">
                            Delete My Account
                        </button>
                        <form method="dialog">
                            <button className="btn btn-secondary">
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}
