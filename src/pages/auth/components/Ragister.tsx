import Modal from "@/components/Modal";
import * as Yup from "yup";
import { Formik } from "formik";
import InputGroup from "@/components/InputGroup";
import Link from "next/link";
import Input from "@/components/Input/Input";
import Icon from "@/components/Icon";

interface ILogin {
  switchState: React.SetStateAction<any>;
  isOpen: boolean;
  onClose: () => void;
}

const Register: React.FC<ILogin> = ({
  switchState,
  isOpen,
  onClose,
}: ILogin) => {
  const handleLoginUser = () => {
    console.log("hello");
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} className="w-[30%]">
        <div>
          <div className="bg-white bg-opacity-80 shadow-2xl rounded-lg text-center p-10">
            <h1 className="text-[30px] font-bold ">Dushanbe</h1>
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
                phoneNumber: Yup.number()
                  .min(9, "Минимум 8 символов")
                  .required("Некорректный адрес электронной почты"),
                username: Yup.string()
                  .min(4, "Минимум 8 символов")
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
                    name="username"
                    append={<Icon name="person" />}
                    placeholder="muhammad"
                    label="Имя"
                    value={values.username}
                    error={errors.username}
                  />
                  <Input
                    name="phoneNumber"
                    append={<Icon name="call" />}
                    placeholder="+992 xx xxx xx xx"
                    label="Телефон"
                    value={values.phoneNumber}
                    error={errors.phoneNumber}
                  />
                  <Input
                    name="email"
                    append={<Icon name="email" />}
                    placeholder="Info@gmail.com"
                    label="E-mail"
                    value={values.email}
                    error={errors.email}
                  />
                  <Input
                    name="password"
                    type="password"
                    placeholder="********"
                    label="Пароль"
                    value={values.password}
                    error={errors.password}
                  />

                  {/* {errors.password && touched.password && errors.password} */}
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 text-white mt-5 p-2"
                  >
                    Зарегистрироваться?
                  </button>
                </form>
              )}
            </Formik>
            <div className="mt-5">
              <Link
                href="/"
                onClick={() => switchState && switchState("login")}
                className="text-[#005bff] font-bold mt-10"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Register;
