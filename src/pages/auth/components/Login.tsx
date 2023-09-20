import Modal from "@/components/Modal";
import * as Yup from "yup";
import { Formik } from "formik";
import InputGroup from "@/components/InputGroup";
import Link from "next/link";
import Input from "@/components/Input/Input";
import Icon from "@/components/Icon";
import React from "react";
import Register from "./Ragister";

interface ILogin {
  isOpen: boolean;
  onClose: () => void;
}

const Login: React.FC<ILogin> = ({ isOpen, onClose }: ILogin) => {
  const [selected, setSelected] = React.useState<"login" | "register">("login");
  const handleLoginUser = () => {
    console.log("hello");
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} className="w-[30%]">
        {selected === "login" && (
          <div>
            <div className="bg-white bg-opacity-80 shadow-2xl rounded-lg text-center p-10">
              <h1 className="text-[30px] font-bold ">Dushanbe Market</h1>
              <hr className="border border-blue-600 my-3" />
              <Formik
                validateOnChange={false}
                initialValues={{
                  email: "",
                  phoneNumber: "",
                  username: "",
                  password: "",
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .min(8, "Минимум 8 символов")
                    .required("Некорректный адрес электронной почты"),
                  password: Yup.string()
                    .min(8, "Минимум 8 символов")
                    .required("Поле не должно быть пустым"),
                  // profileImage: Yup.mixed()
                  //   .required("Заполни это поле")
                  //   .test(
                  //     "FILE_SIZE",
                  //     "Загружаемый файл не должен превышать 2 мб",
                  //     (value) => {
                  //       if (!value.length) return true; // attachment is optional
                  //       return value[0].size <= 2000000;
                  //     }
                  //   ),
                  // .test(
                  //   "FILE TYPE",
                  //   "aaaa",
                  //   (value) =>
                  //     value && ["image/png", "image/jpeg"].includes(value.type)
                  // ),
                })}
                onSubmit={handleLoginUser}
              >
                {({
                  setFieldValue,
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Input
                      name="email"
                      append={<Icon name="email" />}
                      placeholder="Info@gmail.com"
                      label="E-mail"
                      onChange={(e) => setFieldValue("email", e.target.value)}
                      value={values.email}
                      error={errors.email}
                    />
                    <Input
                      name="password"
                      type="password"
                      placeholder="********"
                      label="Пароль"
                      onChange={(e) =>
                        setFieldValue("password", e.target.value)
                      }
                      value={values.password}
                      error={errors.password}
                    />
                    {/* <div className="w-[400px]">
                  <InputGroup
                    label="E-mail"
                    type="email"
                    placeholder="dushanbemarket@gmail.com"
                    append={<Icon name="email" />}
                    onChange={(e) => setFieldValue("email", e.target.value)}
                    value={values.email}
                    error={errors.email}
                  />
                  <Input
                    label="Пароль"
                    type="password"
                    placeholder="******"
                    onChange={(e) =>
                      setFieldValue("password", e.target.value)
                    }
                    value={values.password}
                    error={errors.password}
                  />
                </div> */}
                    <div className="text-right mt-2">
                      <Link
                        href="/forgotpassword"
                        className="text-[#005bff] font-bold"
                      >
                        Forgot?
                      </Link>
                    </div>
                    {/* {errors.password && touched.password && errors.password} */}
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-blue-600 text-white mt-5 p-2"
                    >
                      Вход
                    </button>
                  </form>
                )}
              </Formik>
              <div className="mt-5" onClick={() => setSelected("register")}>
                <Link href={"/"} className="text-[#005bff] font-bold mt-10">
                  Зарегистрироваться?
                </Link>
              </div>
            </div>
          </div>
        )}

        {selected === "register" && (
          <Register
            isOpen={isOpen}
            onClose={onClose}
            switchState={setSelected}
          />
        )}
      </Modal>
    </div>
  );
};

export default Login;
