import Image from "next/image";

export default function Friends(props: any) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        <tbody>
          {props.data.map((user: any, index: any) => (
            <tr
              key={index}
              className="hover:text-secondary cursor-pointer border-0"
              //onClick={() => redirect(track.url)}
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
