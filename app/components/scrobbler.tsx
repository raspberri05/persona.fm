export default function Scrobbler() {
  return (
    <div>
      <label className="input input-bordered flex items-center gap-2">
        Artist
        <input type="text" className="grow" placeholder="required" />
      </label>
      <br />
      <label className="input input-bordered flex items-center gap-2">
        Track
        <input type="text" className="grow" placeholder="required" />
      </label>
      <br />
      <label className="input input-bordered flex items-center gap-2">
        Album
        <input type="text" className="grow" placeholder="" />
      </label>
      <br />
      <label className="input input-bordered flex items-center gap-2">
        Album Artist
        <input type="text" className="grow" placeholder="" />
      </label>
      <br />
      <button className="btn btn-block btn-error">Scrobble</button>
    </div>
  );
}
