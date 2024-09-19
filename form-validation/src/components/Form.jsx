import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';

const Form = () => {
  const onSubmit = async(values, actions) => {
    await new Promise((resolve) => setTimeout(resolve,1000));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div className="container">
      <div>
        <h1>Welcome!</h1>
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="form-group">
            <div className="floating-label">
              <input
                type="text"
                placeholder=" "
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.name && formik.touched.name ? "input-error" : ""}
              />
              <label htmlFor="name">Name</label>
              {formik.errors.name && formik.touched.name && (
                <p className="error-message">{formik.errors.name}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <div className="floating-label">
              <input
                type="email"
                placeholder=" "
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.email && formik.touched.email ? "input-error" : ""}
              />
              <label htmlFor="email">Email</label>
              {formik.errors.email && formik.touched.email && (
                <p className="error-message">{formik.errors.email}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <div className="floating-label">
              <input
                type="password"
                placeholder=" "
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.password && formik.touched.password ? "input-error" : ""}
              />
              <label htmlFor="password">Password</label>
              {formik.errors.password && formik.touched.password && (
                <p className="error-message">{formik.errors.password}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <div className="floating-label">
              <input
                type="password"
                placeholder=" "
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.errors.confirmPassword && formik.touched.confirmPassword ? "input-error" : ""}
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
              {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                <p className="error-message">{formik.errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <button disabled={formik.isSubmitting || !formik.values.name || !formik.values.email || !formik.values.password || !formik.values.confirmPassword || formik.errors.name || formik.errors.email || formik.errors.password || formik.errors.confirmPassword  } type="submit"
          >
            Sign up
        </button>
        </form>
      </div>
      <div className="image-container">
        <img src="/pexels-formik.webp" alt="image" />
      </div>
    </div>
  );
};

export default Form;
