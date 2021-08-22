import React from "react";
import { useField, ErrorMessage } from "formik";

export const TextFild = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <input
                id={field.name}
                className={`form-control shadow-non ${
                    meta.touched && meta.error && "is-invalid"
                }`}
                autoComplete="off"
                {...field}
                {...props}
            />
            <ErrorMessage
                component="div"
                name={field.name}
                className="inputerror"
            />
        </div>
    );
};
