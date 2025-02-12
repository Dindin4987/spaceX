import React from "react";

export const MissionCard = ({ mission, onView }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-bold">
        {mission.name}
        <span className="ml-2 px-2 py-1 text-xs font-semibold rounded bg-red-500 text-white">
          {mission.status}
        </span>
      </h3>
      <button
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => onView(mission)}
      >
        VIEW
      </button>
    </div>
  );
};
