import axios from "axios";
import { utimesSync } from "fs";
import { useEffect, useState } from "react";

export default function Previous() {
    const [data, setData] = useState<any>([]);
    const [expandedRow, setExpandedRow] = useState<number | null>(null);

    useEffect(() => {
        axios
            .get("/api/persona")
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const formatDate = (timestamp: string) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };

    const handleRowClick = (index: number) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    return (
        <div>
            <br />
            <p className="text-2xl">Previous Personas</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {data
                        .slice()
                        .reverse()
                        .map((item: any, index: number) => (
                            <tr key={index}>
                                <td>
                                    <div className="collapse bg-base-200">
                                        <input
                                            type="checkbox"
                                            checked={expandedRow === index}
                                            onChange={() =>
                                                handleRowClick(index)
                                            }
                                        />
                                        <div className="collapse-title text-xl font-medium">
                                            {formatDate(item.timestamp)}
                                        </div>
                                        <div className="collapse-content">
                                            <p className="text-xl">
                                                {item.vibe}
                                            </p>
                                            <br />
                                            <p>
                                                {item.mainstream.split("#")[0]}%
                                                mainstream:{" "}
                                                {item.mainstream.split("#")[1]}
                                            </p>
                                            <br />
                                            <p>
                                                {item.mainstream.split("#")[0]}%
                                                energetic:{" "}
                                                {item.energetic.split("#")[1]}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                </table>
            </div>
        </div>
    );
}
