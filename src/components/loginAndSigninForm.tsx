"use client";

import usePostLoginAndSigninFormData from "@/service/Login-and-signin/hook";
import { TloginAndSignin } from "@/service/Login-and-signin/types";
import { useEffect, useState } from "react";

function LoginAndSigninForm() {
  const [isFcous, setIsFcous] = useState<boolean>(false);

  const [isUserIptNumber, setIsUserIptNumber] = useState<boolean>(false);
  const [userIpt, setUserIpt] = useState<TloginAndSignin>({
    emailOrNumber: "",
  });

  const { mutate } = usePostLoginAndSigninFormData();
  let splitUserIpt = userIpt.emailOrNumber.split("");

  let [second, setSecond] = useState<number>(4);
  let [minet, setMinet] = useState<number>(0);

  const HandleSubmit = () => {
    mutate(userIpt);

    if (splitUserIpt[0] == "0") {
      setIsUserIptNumber(true);
      localStorage.setItem("userNumber", JSON.stringify(userIpt.emailOrNumber));
    }

    const timer = setInterval(() => {
      setSecond((second -= 1));

      if (second == 0 && minet > 0) {
        setSecond((second = 59));
        setMinet((minet -= 1));
      }
      if (second == 0 && minet == 0) {
        clearInterval(timer);
      }
    }, 1000);
  };

  const HandleReturnTimer = () => {
    setSecond((second = 40));
    setMinet((minet = 2));

    const timer = setInterval(() => {
      setSecond((second -= 1));

      if (second == 0 && minet > 0) {
        setSecond((second = 59));
        setMinet((minet -= 1));
      }
      if (second == 0 && minet == 0) {
        clearInterval(timer);
      }
    }, 1000);
  };

  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      <img
        src="./images/digikala-header.png"
        alt="digikala-Logo"
        className={`w-40`}
      />

      <form
        action=""
        method="post"
        className={`w-full flex flex-col justify-start items-end p-5 ${isUserIptNumber && "-mb-6"} mt-5`}
      >
        <h1 className="my-5 font-bold">
          {isUserIptNumber
            ? "کد تایید را وارد کنید"
            : "ورود یا ثبت‌نام در دیجی‌کالا"}
        </h1>

        <label
          htmlFor="numberOrEmail"
          className="text-gray-500 text-[12px] mb-5"
        >
          {isUserIptNumber
            ? `کد تایید برای شماره ${localStorage.getItem("userNumber")} پیامک شده`
            : "لطفا شماره موبایل یا ایمیل خود را وارد کنید"}
        </label>

        <div className="w-full relative">
          <input
            type={splitUserIpt[0] == "0" ? "number" : "email"}
            id="numberOrEmail"
            onClick={() => setIsFcous(true)}
            onChange={(e) => {
              e.target.value != "" ? setIsFcous(true) : setIsFcous(false);

              setUserIpt((prev) => {
                return {
                  ...prev,
                  emailOrNumber: e.target.value,
                };
              });
            }}
            className={`w-full text-right border border-gray-400 rounded-lg p-3 focus:outline-black focus:outline-1 ${isUserIptNumber && "focus:outline-cyan-300"}`}
          />

          <label
            htmlFor="numberOrEmail"
            className={`text-sm absolute w-46.5 text-center transition-all duration-200 
            ${isFcous ? "-translate-y-3 text-black bg-white" : "translate-y-3.5 text-gray-500"}
            right-3 cursor-text ${isUserIptNumber && "hidden"}`}
          >
            شماره موبایل یا پست الکترونیک
          </label>
        </div>

        {isUserIptNumber &&
          (second > 0 || minet > 0 ? (
            <p className="text-center mx-auto mt-5 flex gap-2 text-gray-700">
              ثانیه مانده تا دریافت مجدد کد
              <span>
                {minet}:{second}
              </span>
            </p>
          ) : (
            <p
              className="text-center mx-auto mt-5 flex gap-2 text-blue-500 cursor-pointer"
              onClick={HandleReturnTimer}
            >
              دریافت مجدد
            </p>
          ))}

        <button
          type="reset"
          className="p-3 rounded-lg bg-red-500/90 w-full my-5 text-white cursor-pointer"
          onClick={HandleSubmit}
        >
          {isUserIptNumber ? "تایید" : "ورود به دیجی کالا"}
        </button>

        {!isUserIptNumber && (
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
        )}
      </form>
    </section>
  );
}

export default LoginAndSigninForm;
