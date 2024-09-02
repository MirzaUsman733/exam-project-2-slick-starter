import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();
    let loginResponse;

    if (typeof window !== "undefined") {
      loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    }

    useEffect(() => {
      if (!loginResponse?.is_logged_in) {
        router.push("/login");
      }
    }, [loginResponse?.is_logged_in, router]);

    return loginResponse ? <Component {...props} /> : null;
  };
}
