"use client";
import loginPageProtector from "../Components/authComponents/loginPageProtector";
import { useSearchParams } from 'next/navigation'
import ResetPassword from "../Components/authComponents/ResetPassword";
const page = () => {
    const searchParams = useSearchParams()
    const email = searchParams.get('email')
    const token = searchParams.get('token')
  return (
    <div>
      <ResetPassword email={email} token={token} />
    </div>
  );
};

export default loginPageProtector(page);
