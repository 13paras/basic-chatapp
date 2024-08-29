import { LogOutIcon } from "lucide-react";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { logout, loading } = useLogout();

  return (
    <div className="mt-3">
      {!loading ? (
        <LogOutIcon
          className="w-6 h-6 active:scale-100 transition-all ease-in-out text-red-500 cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
