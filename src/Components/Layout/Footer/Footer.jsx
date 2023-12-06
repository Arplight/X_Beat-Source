import { footMenu, footSocial } from "../../../data/footerData";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import FormField from "../../Forms/Form_Field/FormField";
import { subscriptionSchema } from "../../Forms/Validation_Schema/ValidationSchema";

export default function Footer() {
  return (
    <footer className="footer bg-black">
      <div className="container m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-12 py-6 ">
        <div className="flex flex-col">
          <div className=" mr-auto mb-4">
            <Link to={"/"} className="text-main logo">
              X-Beat
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-small text-muted ">
              Subscribe to our Email alerts to receive early discount offers,
              and new products info.
            </p>
            <Formik
              initialValues={{
                subscription_mail: "",
              }}
              validationSchema={subscriptionSchema}
              onSubmit={(values, { resetForm }) => {
                resetForm();
                console.log(values);
                alert(
                  "Thankyou, you are subscribed to receive our daily newsletter"
                );
              }}
            >
              <Form className="flex flex-col gap-6">
                <FormField
                  fieldType={"email"}
                  fieldName={"subscription_mail"}
                  fieldLabel={"Email address"}
                  labelClass={"subscribe-Label"}
                />
                <button type="submit" className="single-button w-max">
                  Subscribe
                </button>
              </Form>
            </Formik>
          </div>
        </div>
        {footMenu.map((item) => (
          <div key={item.id} className="lg:m-auto">
            <h4 className="text-main mb-6">{item.title}</h4>
            <ul className="flex flex-col gap-3">
              {item.menu.map((subItem, index) => (
                <li key={index}>
                  <Link
                    to={subItem.path}
                    className="text-large text-muted link-hover"
                  >
                    {subItem.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex  border-t-[1px] border-[#ffffff30] py-6 ">
        <div className="container m-auto flex flex-col lg:flex-row lg:items-center gap-y-5 flex-col-reverse">
          <span className="flex flex-col sm:flex-row mr-auto">
            <p className="text-large text-muted break-words">
              2023 | XBeat. All Rights Reserved. Built by |&nbsp;
            </p>
            <a
              className="text-large text-muted link-hover"
              href="https://www.linkedin.com/in/muhammad96osama/"
            >
              Muhammad Osama
            </a>
          </span>
          <span>
            <ul className="flex gap-6">
              {footSocial.map((item) => (
                <li key={item.id}>
                  <a
                    className="text-muted text-[20px] link-hover"
                    href={item.path}
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
              <li className="w-[50px] h-[10px] lg:block"> </li>
            </ul>
          </span>
        </div>
      </div>
    </footer>
  );
}
