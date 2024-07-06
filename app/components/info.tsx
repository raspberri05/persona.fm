export default function Info(props:any) {
 return (
    <div className="grid justify-center">
    <p className="text-center">
      Scrobbles
      <br />
      {props?.userInfo?.playcount}
    </p>
  </div>
 )
}