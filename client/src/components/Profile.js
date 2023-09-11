import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidation } from "../helper/validate";
import convertToBase64 from "../helper/convert";
import extend from "../styles/Profile.module.css";

const Profile = () => {
  const [file, setfile] = useState();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      address: "",
    },
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      console.log(values);
    },
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setfile(base64);
  };

  return (
    <div class="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-auto py-8 ">
        <div className={`${styles.glass} ${extend.glass}`} style={{ width: "45%" }}>
          <div className="title flex flex-col item-center">
            <h1 className="text-5xl font-bold text-center">Profile</h1>
            <span className="py-4 text-xl  text-center text-gray-500">
              You can Update the Details.
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  alt="avatar"
                  className={`${styles.profile_img} ${extend.profile_img}`}
                />
              </label>
              <input
                type="file"
                id="profile"
                name="profile"
                onChange={onUpload}
              />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
            <div className="name flex w-3/4 gap-10">
            <input
                {...formik.getFieldProps("firstname")}
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                placeholder="First Name"
              />
              <input
                {...formik.getFieldProps("lastname")}
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                placeholder="Last Name"
              />
            </div>

            <div className="name flex w-3/4 gap-10">
            <input
                {...formik.getFieldProps("mobile")}
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                placeholder="Mobile number"
              />
              <input
                {...formik.getFieldProps("email")}
                className={`${styles.textbox} ${extend.textbox}`}
                type="email"
                placeholder="E-mail"
              />
            </div>
              
              <input
                {...formik.getFieldProps("address")}
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                placeholder="Address"
              />
              <button className={styles.btn} type="submit">
                Update
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Come back later?
                <Link className="text-red-500 ml-2" to="/">
                  Logout
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
