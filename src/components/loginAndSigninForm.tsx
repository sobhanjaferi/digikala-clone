"use client";

//  =============== Import Section ===============
import usePostLoginAndSigninFormData from "@/service/Login-and-signin/hook";
import { TloginAndSignin } from "@/service/Login-and-signin/types";
import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { useAppContext } from "@/context/appContext";
import Image from "next/image";

function LoginAndSigninForm(): ReactElement {
  const [isFcous, setIsFcous] = useState<boolean>(false);

  // =============== checking user is login or signin ===============
  // =============== set user ipt type ===============
  const {
    isUserAxist,
    setIsUserAxist,
    userIptType,
    setUserIptType,
    isUserNumber,
  } = useAppContext();

  // =============== get user data ===============
  const [userIpt, setUserIpt] = useState<TloginAndSignin>({
    emailOrNumber: "",
  });

  const { mutate } = usePostLoginAndSigninFormData();

  const splitUserIpt = userIpt.emailOrNumber.split("");

  const [firstNumbers] = useState<string[]>([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);

  // =============== user timer vars ===============

  const [randomCode, setRandomCode] = useState<number | null>(null);
  const [second, setSecond] = useState<number>(59);
  const [minet, setMinet] = useState<number>(2);

  // =============== timer for user enter the code ===============
  const intervalTimer = useEffect(() => {
    const timer = setInterval((): void => {
      setSecond((prev: number): number => (prev -= 1));

      if (second == 0 && minet > 0) {
        setSecond(59);

        setMinet((prev: number): number => (prev -= 1));
      } else if (second == 0 && minet == 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  const HandleSubmit = () => {
    // =============== checked ipt type ===============

    firstNumbers.forEach((number) => {
      if (splitUserIpt[0] === number) {
        setUserIptType("number");

        // =============== post data to API ===============
        mutate(userIpt);
      }
      intervalTimer;
    });
  };

  // =============== saved user number in localStorage ===============
  useEffect(() => {
    if (userIptType == "number") {
      localStorage.setItem("userNumber", JSON.stringify(userIpt.emailOrNumber));
    }
  }, [userIptType, userIpt]);

  // =============== return timer for enter new secr code ===============
  const HandleReturnTimer = () => {
    setSecond((): number => 59);
    setMinet((): number => 2);

    intervalTimer;
  };

  // =============== user secr code ===============
  useEffect(() => {
    if (userIptType == "number") {
      const code: number = Math.floor(Math.random() * 100000);

      setTimeout(() => {
        setRandomCode(code);
      }, 5000);
    }
  }, [userIptType]);

  useEffect(() => {
    if (randomCode != null) {
      alert(`کد ورود شما: ${randomCode}`);
    }
  }, [randomCode]);

  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      <Image
        src="/images/digikala-header.png"
        alt="digikala-Logo"
        className={`w-40`}
        width={0}
        height={0}
      />

      <form
        method="post"
        className={`w-full flex flex-col justify-start items-end p-5 ${userIptType == "number" && "-mb-6"} mt-5`}
      >
        <h1 className="my-5 font-bold">
          {userIptType == "number"
            ? "کد تایید را وارد کنید"
            : "ورود یا ثبت‌نام در دیجی‌کالا"}
        </h1>

        <label
          htmlFor="numberOrEmail"
          className="text-gray-500 text-[12px] mb-5 text-right"
        >
          {userIptType == "number" &&
            `کد تایید برای شماره ${isUserNumber} پیامک شده`}

          {userIptType == null && "لطفا شماره موبایل یا ایمیل خود را وارد کنید"}

          {userIptType == "email" &&
            "حساب کاربری با مشخصات وارد شده وجود ندارد. لطفا از شماره تلفن همراه برای ساخت حساب کاربری استفاده نمایید"}
        </label>

        <div className="w-full relative">
          <input
            type="text"
            id="numberOrEmail"
            onClick={() => setIsFcous(true)}
            onChange={(e) => {
              if (e.target.value != "") {
                setIsFcous(true);
              } else {
                setIsFcous(false);
              }

              if (randomCode != null) {
                if (randomCode === parseInt(e.target.value)) {
                  setIsUserAxist(true);
                }
              }

              setUserIpt((prev) => {
                return {
                  ...prev,
                  emailOrNumber: e.target.value,
                };
              });
            }}
            className={`w-full text-right border border-gray-400 rounded-lg p-3 focus:outline-black focus:outline-1 ${userIptType == "number" && "focus:outline-cyan-300"}`}
          />

          <label
            htmlFor="numberOrEmail"
            className={`text-sm absolute w-46.5 text-center transition-all duration-200 
            ${isFcous ? "-translate-y-3 text-black bg-white" : "translate-y-3.5 text-gray-500"}
            right-3 cursor-text ${userIptType == "number" && "hidden"}`}
          >
            شماره موبایل یا پست الکترونیک
          </label>
        </div>

        {userIptType == "number" &&
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

        {isUserAxist ? (
          <Link href="/" className="w-full">
            <button
              type="reset"
              className="p-3 rounded-lg bg-red-500/90 w-full my-5 text-white cursor-pointer"
              onClick={HandleSubmit}
            >
              {userIptType == "number" ? "تایید" : "ورود به دیجی کالا"}
            </button>
          </Link>
        ) : (
          <button
            type="reset"
            className="p-3 rounded-lg bg-red-500/90 w-full my-5 text-white cursor-pointer"
            onClick={HandleSubmit}
          >
            {userIptType == "number" ? "تایید" : "ورود به دیجی کالا"}
          </button>
        )}

        {userIptType == "number" && (
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
