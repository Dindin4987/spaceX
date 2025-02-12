import React from "react";

export const MissionModal = ({ mission, onClose }) => {
  if (!mission) return null;

  const currentYear = new Date().getFullYear();
  const yearsAgo = currentYear - mission.launchYear;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold">
          {mission.name}
          <span className="ml-2 px-2 py-1 text-xs font-semibold rounded bg-red-500 text-white">
            {mission.status}
          </span>
        </h2>
        <p className="text-sm text-gray-500">{yearsAgo} years ago</p>
        <div className="flex items-center space-x-4 mt-3">
          <img
            src={mission.imageUrl}
            alt={mission.name}
            className="w-16 h-16"
          />
          <div>
            <a href={mission.article} className="text-blue-600 font-semibold">
              Article
            </a>{" "}
            |{" "}
            <a href={mission.video} className="text-blue-600 font-semibold">
              Video
            </a>
          </div>
        </div>
        <p className="text-sm mt-3">{mission.description}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={onClose}
        >
          HIDE
        </button>
      </div>
    </div>
  );
};
