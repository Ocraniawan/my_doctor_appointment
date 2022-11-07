import { SlCalender, SlLocationPin } from "react-icons/sl";
import { BsShieldFillCheck, BsPeopleFill } from "react-icons/bs";

const benefits = [
  {
    id: 1,
    title: "Make an Apppointment",
    icons: <SlCalender color="#ff0068" size={24} />,
    details: "Schedule with your favorite doctor anytime",
  },
  {
    id: 2,
    title: "Health Guarantee Forever",
    icons: <BsShieldFillCheck color="#ff0068" size={24} />,
    details: "We always provide the best warranty for you",
  },
  {
    id: 3,
    title: "Find Your Best Doctor",
    icons: <BsPeopleFill color="#ff0068" size={24} />,
    details: "You can choose your favorite doctor",
  },
  {
    id: 4,
    title: "Spread in Various Places",
    icons: <SlLocationPin color="#ff0068" size={24} />,
    details: "Now clinics are available in various places",
  },
];

export default function Benefit() {
  return (
    <div className="md:flex md:items-center bg-[#F2FBFF] p-4 md:p-[50px]">
      <div className="py-4 w-full">
        <div className="text-4xl font-bold text-[#333] text-start p-4">
          Protect Your Health And Take Care Your Health
        </div>
        {benefits &&
          benefits.map((benefit, index) => (
            <div key={index} className="inline-grid p-2 w-full md:w-1/2">
              <div className="flex text-left items-center border border-gray-200 h-[100px] rounded-2xl  p-2">
                {benefit.icons}
                <div className="pl-4">
                  <span className="font-bold text-lg">{benefit.title}</span>
                  <p className="text-[#717579]">{benefit.details}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div>
        <img src="/assets/images/doctor-check.svg" alt="doctor-check" />
      </div>
    </div>
  );
}
