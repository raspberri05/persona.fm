import Image from "next/image";
import { useEffect, useState } from "react";
import { getFriends } from "../api/lib/lastfm/user";

export default function Friends(props: any) {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    getFriends(
      props.username,
      process.env.NEXT_PUBLIC_API_KEY || "",
      50,
      1,
    ).then((response) => {
      setFriends(response.user);
    });
  }, []);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        <tbody>
          {friends.map((user: any) => (
            <tr
              key={user.name}
              className="hover:text-secondary cursor-pointer border-0"
            >
              <td style={{ width: "0" }} className="px-0 py-2">
                <div className="avatar">
                  <div className="w-12">
                    <Image
                      unoptimized
                      alt="album cover"
                      src={
                        user.image[3]["#text"]
                          ? user.image[3]["#text"]
                          : "/images/image.png"
                      }
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
              </td>
              <td>
                <p className="font-bold text-md">{user.name}</p>
                <p>{user.realname}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
