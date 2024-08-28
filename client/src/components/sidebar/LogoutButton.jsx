import { LogOutIcon } from "lucide-react";

const LogoutButton = () => {
  const loading = false;

  const logout = () => {
    console.log("logout");
  };
  return (
    <div className="mt-auto">
      {!loading ? (
        <LogOutIcon
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
