"use client";

export default function Back() {
    function goBack() {
        window.location.href = "/home";
    }
    return (
        <button className="btn" onClick={goBack}>
            Back
        </button>
    );
}
