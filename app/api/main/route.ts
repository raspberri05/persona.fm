import { generate } from "../lib/gemini";
import { getTrackInfo, getTracks } from "../lib/lfm";

export function GET() {
    return getTracks()
        .then((tracks) => {
            return getTrackInfo(tracks)
                .then((response) => {
                    return generate(response)
                        .then((a) => {
                            return new Response(JSON.stringify(a), {
                                headers: { "Content-Type": "application/json" },
                            });
                        })
                        .catch((error) => {
                            return new Response(error);
                        });
                })
                .catch((error) => {
                    return new Response(error);
                });
        })
        .catch((error) => {
            return new Response(error);
        });
}
