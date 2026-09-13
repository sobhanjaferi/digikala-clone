//  =============== Import Section ===============
import LoginAndSigninForm from "@/components/loginAndSigninForm";
import StartIcon from "@mui/icons-material/Start";
import Link from "next/link";

function LoginAndSignin() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <main className="w-screen h-screen lg:w-100 lg:h-100 lg:border lg:border-gray-300 lg:rounded-xl flex flex-col justify-between items-center relative">
        <div className="w-full lg:w-20 lg:absolute right-0 top-0 flex justify-end p-5">
          <Link href="/">
            <StartIcon />
          </Link>
        </div>

        <LoginAndSigninForm />
      </main>
    </main>
  );
}

export default LoginAndSignin;
