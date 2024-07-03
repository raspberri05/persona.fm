"use client";

import { useEffect, useState } from "react";

const redirClick = (uri: string) => {
  window.location.href = uri;
};

export default function Display(props: any) {
  const [data, setData] = useState(props.data); // [track1, track2, track3, ...
  return (
    <div className="">
      <table className="table">
        <tbody>
          {data.map((t: any) => (
            <tr
              key={t.uri}
              onClick={() => redirClick(t.uri)}
              className="hover:text-primary"
            >
              <td style={{ width: "100px" }}>
                <img
                  className="cropped"
                  src={t.url}
                  alt={t.name + "album image"}
                />
              </td>
              <td>
                <p className="font-bold text-lg">{t.name}</p>
                {t.album !== "" && <p>{t.artist + " - " + t.album}</p>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
