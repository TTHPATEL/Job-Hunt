import React from "react";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar.jsx";

const JobCards = ({ job }) => {
  const navigate = useNavigate();
  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return (
        <>
          {text.substring(0, limit)}
          <span className="text-blue-500 cursor-pointer">... More</span>
        </>
      );
    }
    return text;
  };
  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-5 rounded-md shadow-xl bg-white border border-gray-200 cursor-pointer hover:shadow-2xl shadow-blue-200 hover:p-3"
    >
      <div className="flex items-center space-x-4">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job.company.logo} />
          </Avatar>
        </Button>
        <h1 className="text-lg font-medium">{job.company.name}</h1>
      </div>
      <p className="text-sm text-gray-600">{job.location}</p>

      <div>
        <h1 className="font-bold text-lg my-2">{job.title}</h1>
        <div className="h-[60px] overflow-hidden">
          <p className="text-sm text-gray-600">
            {truncateText(job.description, 100)}
          </p>
        </div>{" "}
      </div>

      <div className="flex gap-2 items-center mt-4">
        <Badge className={"text-blue-600 font-bold"} variant="ghost">
          {job.position} Open Positions
        </Badge>

        <Badge className={"text-[#FA4F00] font-bold"} variant="ghost">
          {job.salary} LPA
        </Badge>

        <Badge className={"text-[#6B3AC2] font-bold"} variant="ghost">
          {job.location}
        </Badge>

        <Badge className={"text-black font-bold"} variant="ghost">
          Full Time
        </Badge>
      </div>
    </div>
  );
};

export default JobCards;
