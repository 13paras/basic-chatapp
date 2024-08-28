import Messagecontainer from "../../components/messages/Messagecontainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden shadow-xl ">
      <Sidebar />
      <Messagecontainer />
    </div>
  );
};

export default Home;
