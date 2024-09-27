"use client";

import { authFail, getUsername } from "@/app/helper";
import { useEffect } from "react";

export default function Page() {
    const openModal = () => {
        const modal = document.getElementById(
            "my_modal_1",
        ) as HTMLDialogElement;
        modal?.showModal();
    };

    useEffect(() => {
        authFail();
    }, []);

    return (
        <div>
            <p className="text-2xl">{`Username: ${getUsername()}`}</p>
            <p>This can only be changed directly on last.fm&apos;s website</p>
            <br />
            <button className="btn btn-error" onClick={openModal}>
                Delete Account
            </button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
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
                            <button className="btn btn-primary">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}
