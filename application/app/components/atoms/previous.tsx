import axios from "axios";
import { useEffect, useState } from "react";
import { Prev } from "@/utils/types";
import Loading from "./loading";

export default function Previous() {
    const [data, setData] = useState<Prev[]>([]);
    const [expandedRow, setExpandedRow] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("/api/persona")
            .then((response) => {
                setData(response.data);
                setLoading(false);
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
            <p className="text-2xl ml-4 fade-in">Previous Personas</p>
            {!loading &&
                data
                    .slice()
                    .reverse()
                    .map((item: Prev, index: number) => (
                        <div
                            key={item.timestamp}
                            className="collapse bg-primary my-4 fade-in"
                        >
                            <input
                                type="checkbox"
                                checked={expandedRow === index}
                                onChange={() => handleRowClick(index)}
                            />
                            <div className="collapse-title text-xl text-secondary font-medium">
                                {formatDate(item.timestamp)}
                            </div>
                            <div className="collapse-content text-secondary">
                                <p className="text-xl">{item.vibe}</p>
                                <br />
                                <p>
                                    {item.mainstream.split("#")[0]}% mainstream:{" "}
                                    {item.mainstream.split("#")[1]}
                                </p>
                                <br />
                                <p>
                                    {item.energetic.split("#")[0]}% energetic:{" "}
                                    {item.energetic.split("#")[1]}
                                </p>
                            </div>
                        </div>
                    ))}
        </div>
    );
}
