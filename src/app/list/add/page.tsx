"use client";

import { createList } from "@/app/actions";
import { useFormState, useFormStatus } from 'react-dom';

export default function Page() {
  const { pending } = useFormStatus()
  const [state, formAction] = useFormState(createList, new FormData())

  const userId = "1234";
  let errors = null

  if(Array.isArray(state)) {
    let errorField = state.find((formItem) => {
      return formItem[0] == 'errors'
    })

    errors = JSON.parse(errorField[1])
    debugger
  }

  return (
    <div>
      <h1>Add a List</h1>
      <form action={formAction}>
        <label className="m-auto mt-6 form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            name="listName"
            className="input input-bordered w-full max-w-xs"
            type="text"
          />
        </label>
        <label className="m-auto mt-6 form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <input
            name="listDescription"
            className="input input-bordered w-full max-w-xs"
            type="text"
          />
        </label>
        <div className="mt-6">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
