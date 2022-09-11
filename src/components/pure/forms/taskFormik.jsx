import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const TaskForm = ({ add, length }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Your name is required")
        .min(2, "Too Short!")
        .max(50, "Too Long!"),
      description: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
      add(values);
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit} className="formulario">
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          autoFocus={true}
          placeholder="Add a name to task"
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description task"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.errors.description ? (
          <div>{formik.errors.description}</div>
        ) : null}
        <button type="submit">
          {length > 0 ? "Add New Task" : "Create New Task"}
        </button>
        <button type="button" onClick={formik.resetForm}>Limpiar</button>
      </form>
    </div>
  );
};

// export default TaskForm;
