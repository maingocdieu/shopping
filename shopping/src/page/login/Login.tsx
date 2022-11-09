import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import style from "./login.module.css";


interface MyFormValues {
  firstName: string;
  password: string;
}
export function Login() {
  const initialValues: MyFormValues = { firstName: "", password: "" };
  const navigate = useNavigate();

  return (
    <>
      <div className={style.div}>
        <div className={style.login}>
          <h1 className={style.label}>Login Form</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              navigate('/home')
            }}
          >
            <Form className={style.formik}>
              <div>
                <label htmlFor="firstName">UserName</label>
                <br></br>
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className={style.field}
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <br></br>
                <Field
                  id="password"
                  name="password"
                  placeholder="Password"
                  className={style.field}
                />
              </div>


              <a>For got password?</a>

              <button type="submit" className={style.submit}>
                Submit
              </button>
              <span className={style.loginWith}>OR login width</span>
              <div className={style.loginOption}>
                <button type="submit" className={style.faceBook}>
                  FACEBOOK
                </button>
                <button type="submit" className={style.email}>
                  EMAIL
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
