"use client";

import { createList } from "./actions";
import { useFormState, useFormStatus } from "react-dom";

export default function Page() {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(createList, new FormData());

  let errors = null;
  let errorCss: any = {
    description: "",
    name: "",
  };

  // after form submission, state will be an array
  if (Array.isArray(state)) {
    let successField = state.find((formItem) => {
      return formItem[0] == "success";
    });

    if(successField) {
      // TODO: show a toast and redirect to lists page
      debugger
    }

    let errorField = state.find((formItem) => {
      return formItem[0] == "errors";
    });

    errors = JSON.parse(errorField[1]);

    Object.keys(errors).forEach((key) => {
      if (key === "description") {
        errorCss[key] = "textarea-error";
      } else {
        errorCss[key] = "input-error";
      }
    });
  }

  return (
    <div>
      <h1>Add a List</h1>
      <form action={formAction}>
        <label className="m-auto mt-6 form-control w-full max-w-s">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            name="listName"
            className={`input input-bordered w-full max-w-s ${errorCss["name"]}`}
            type="text"
          />
        </label>
        <label className="m-auto mt-6 form-control w-full max-w-s">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            name="listDescription"
            className={`textarea textarea-bordered w-full max-w-s ${errorCss["description"]}`}
          />
        </label>
        <div className="mt-6">
          {errors &&
            Object.keys(errors).map((key) => {
              return <div key={`${key}-alert`} role="alert" className="alert alert-error m-auto mt-3 max-w-s">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{errors[key]}</span>
              </div>
            })}
        </div>

        <div className="mt-6">
          <button type="submit" className="btn btn-primary">
            Add List
          </button>
        </div>
      </form>
    </div>
  );
}
