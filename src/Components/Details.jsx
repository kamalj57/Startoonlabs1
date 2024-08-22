import React from "react";
import {
  ArrowLeft,
  Phone,
  Mail,
  Eclipse,
  PersonStanding,
  BriefcaseMedical,
} from "lucide-react";
import { FaFileMedicalAlt } from "react-icons/fa";
import Avatar from "../assets/avatar.svg";
import { SemiCircleProgressWithIndicator } from "react-progressbars-with-indicator";

const Details = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col p-4 border shadow-md rounded-md">
        <div className="flex flex-row gap-1">
          <ArrowLeft  color="#002647"/>
          <p className="text-blue-950 font-medium">View Patient</p>
        </div>
        <div className="w-full mt-1 border "></div>
        <div className="mt-4 flex flex-row justify-between  items-center">
          <div>
            <p className="text-blue-950 font-medium">S. Meena, F/23</p>
            <p className="text-blue-950 font-medium">Patient ID: 87 20200727153457</p>
          </div>
          <div className="mt-4 w-20 h-20">
            <img src={Avatar} alt="" />
          </div>
        </div>
        <div className="w-full mt-1 border "></div>
        <div className="mt-4 p-3 rounded-lg  shadow-md bg-blue-950 border h-1/2 ">
        
          <p className="text-white font-medium flex justify-center">
            Goal reached
          </p>
          <div className="flex flex-row gap-2 items-center">
            <SemiCircleProgressWithIndicator
              percentage={40}
              indicatorPercentage={40}
              strokeWidth={10}
              strokeColor="yellow"
              indicatorColor="#fffffff"
              includeText
              fontStyle={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "white",
              }}
            />
            <div className="flex flex-col gap-3">
            <div>
              <div className="inline-flex gap-3 rounded bg-white p-1 text-green-600">
                <span className="text-lg font-medium"> EMG </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </div>
            <div className="inline-flex gap-3 rounded bg-white p-1 text-red-600">
            <span className="text-lg font-medium"> ROM</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                />
              </svg>

              
            
            </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-3 p-2">
          <div className="">
            <div className="flex justify-between">
              <p className="text-gray-400">Phone no.</p>
              <div className="flex flex-row gap-2 items-center">
                <Phone size={16} />
                <p>8022334455</p>
              </div>
            </div>
            <div className="flex mt-2 justify-between">
              <p className="text-gray-400">Mail ID</p>
              <div className="flex flex-row gap-2 items-center">
                <Mail size={16} />
                <p>meenarabinsachin2@gmail.com</p>
              </div>
            </div>
            <div className="flex mt-2 justify-between">
              <p className="text-gray-400">Affected Side</p>
              <div className="flex flex-row gap-2 items-center">
                <PersonStanding color="red" size={20} />
                <p>Billateral</p>
              </div>
            </div>
            <div className="flex mt-2 justify-between">
              <p className="text-gray-400">Condition</p>
              <div className="flex flex-row gap-2 items-center">
                <Eclipse size={16} />
                <p>Ortho</p>
              </div>
            </div>
            <div className="flex mt-2 justify-between">
              <p className="text-gray-400">Speciality</p>
              <div className="flex flex-row gap-2 items-center">
                <BriefcaseMedical size={16} />
                <p>Osteoarthritis</p>
              </div>
            </div>
            <div className="w-full mt-1 border "></div>
            <div className="flex mt-2 justify-between">
              <div className="flex flex-row gap-2 items-center">
                <FaFileMedicalAlt />
                <p className="text-blue-950">Medical History</p>
              </div>
              <p>Hypertension,DM,Hypothyrodism</p>
            </div>
            <div className="w-full mt-1 border "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
