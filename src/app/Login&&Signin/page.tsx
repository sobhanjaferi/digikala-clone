"use client";

import StartIcon from "@mui/icons-material/Start";
import Link from "next/link";
import { useEffect, useState } from "react";

function LoginAndSignin() {
  const [isFcous, setIsFcous] = useState<boolean>(false);

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <main className="w-screen h-screen lg:w-100 lg:h-100 lg:border lg:border-gray-300 lg:rounded-xl flex flex-col justify-between items-center relative">
        <div className="w-full lg:w-20 lg:absolute right-0 top-0 flex justify-end p-5">
          <Link href="/">
            <StartIcon />
          </Link>
        </div>

        <section className="w-full h-full flex flex-col justify-center items-center">
          <img
            src="./images/digikala-header.png"
            alt="digikala-Logo"
            className="w-40"
          />

          <form
            action=""
            method="post"
            className="w-full flex flex-col justify-start items-end p-5 mt-5"
          >
            <h1 className="my-5 font-bold">ورود یا ثبت‌نام در دیجی‌کالا</h1>

            <label
              htmlFor="numberOrEmail"
              className="text-gray-500 text-[12px] mb-5"
            >
              لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </label>

            <div className="w-full relative">
              <input
                type="text"
                id="numberOrEmail"
                onClick={() => setIsFcous(!isFcous)}
                className="w-full text-right border border-gray-400 rounded-lg p-3 focus:outline-black focus:outline-1"
              />

              <label
                htmlFor="numberOrEmail"
                className={`text-sm absolute w-46.5 text-center transition-all duration-200 ${isFcous ? "-translate-y-3 text-black" : "translate-y-3.5 text-gray-500"} right-3 cursor-text bg-white`}
              >
                شماره موبایل یا پست الکترونیک
              </label>
            </div>

            <button className="p-3 rounded-lg bg-red-500/90 w-full my-5 text-white cursor-pointer">
              ورود به دیجی کالا
            </button>

            <p className="text-gray-500 text-[11px]">
              ورود شما به معنای پذیرش{" "}
              <span className="text-blue-500 cursor-pointer">
                شرایط دیجی کالا
              </span>{" "}
              و{" "}
              <span className="text-blue-500 cursor-pointer">
                قوانین حریم خصوصی
              </span>{" "}
              است
            </p>
          </form>
        </section>
      </main>
    </main>
  );
}

export default LoginAndSignin;
