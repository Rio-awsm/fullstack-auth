import React from "react";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";

const Recovery = () => {
  return (
    <div class="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col item-center">
            <h1 className="text-5xl font-bold text-center">Recovery</h1>
            <span className="py-4 text-xl  text-center text-gray-500">
              Enter OTP to recover Password
            </span>
          </div>

          <form className="pt-20">
            <div className="textbox flex flex-col items-center gap-6">
              <div className="input text-center">
                <span className="py-4 text-sm text-left text-gray-500">
                  Enter 6 digit OTP sent to your Email address
                </span>
                <input
                  className={styles.textbox}
                  type="password"
                  placeholder="Enter OTP"
                />
              </div>

              <button className={styles.btn} type="submit">
                Recover
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Can't get OTP??
                <button className="text-red-500 ml-2">Resend</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
