"use client";
import Image from "next/image";
import ReverseButton from "./button";
import { useState } from "react";

const AvatarBox = () => {
  return (
    <div className="relative">
      <Image src="/avatar.png" alt="avatar" width={72} height={72} />
      <div className="absolute bottom-0 left-12 flex flex-row">
        <Image
          src="/star.png"
          alt="star"
          width={24}
          height={24}
          className=" border-white border-2 rounded-full"
        />
        <span className="mx-1 text-sm self-end font-bold bg-gradient-to-r from-violet-500 to-indigo-800 text-transparent bg-clip-text">
          4881
        </span>
      </div>
    </div>
  );
};

const NotificationText = () => {
  const username = "Anna Effective";
  return (
    <div className="flex flex-col mx-3">
      <div className="flex flex-row">
        <p className="font-bold text-lg">{username}</p>
        <Image
          src="/verified.png"
          alt="verified"
          width={72}
          height={72}
          className="mx-2 w-6"
        />
      </div>
      <p>Double your income with me!</p>
    </div>
  );
};

const MenuButton = () => {
  return (
    <div className="flex items-center justify-center mx-4">
      <Image
        src="/menu.png"
        alt="menu"
        width={22}
        height={22}
        className="w-full"
      />
    </div>
  );
};

const Notification = () => {
  const [parts, setParts] = useState([AvatarBox, NotificationText, MenuButton]);
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
      <div className="flex">
        {parts.map((Part, index) => (
          <Part key={index} />
        ))}
      </div>
      <ReverseButton setParts={setParts} />
    </div>
  );
};

export default Notification;
