export default async function Page() {
  return (
      <div>
        <h1>Add a List</h1>
        <label className="m-auto mt-6 form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input className="input input-bordered w-full max-w-xs" type="text" />
        </label>
        <label className="m-auto mt-6 form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <input className="input input-bordered w-full max-w-xs" type="text" />
        </label>
          <div className="mt-6">
            <button className="btn btn-primary">Add</button>
          </div>
      </div>
  );
}
