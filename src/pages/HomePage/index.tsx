import Benefit from "../../components/HomeComponent/Benefit";
import ListDoctors from "../../components/ListDoctor";

function Home() {
  return (
    <div className="">
      <Benefit />

      {/* find doctor */}
      <div className="p-4 md:p-[50px] bg-white text-center">
        <ListDoctors />
      </div>
    </div>
  );
}

export default Home;
