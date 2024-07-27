"use client";

import React, { useState } from "react";

export default function Page() {
    function submit() {
        window.location.href = "/api/auth";
    }

    return (
        <div className="items-center grid justify-items-center h-dvh">
            <div className="card bg-neutral text-neutral-content w-96">
                <div className="card-body items-center">
                    <h2 className="card-title">Persona.fm</h2>
                    <p>Your last.fm persona</p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-primary"
                            onClick={() => submit()}
                        >
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
