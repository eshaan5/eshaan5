import React from "react";

const Alert = ({ type, message }) => {
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
      <div className={`${message.type === "danger" ? "bg-red-500" : "bg-blue-500"} text-indigo-100 leading-none p-2 lg:rounded-full flex lg:inline-flex items-center`} role="alert">
        <p className={`${message.type === "danger" ? "bg-red-500" : "bg-blue-500"} flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}>{message.type === "danger" ? "Failed" : "Success"}</p>
        <p className="mr-2 text-left">{message.message}</p>
      </div>
    </div>
  );
};

export default Alert;
