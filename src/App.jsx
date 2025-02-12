import React, { useState } from "react";
import { MissionModal } from "./MissionModal.jsx";
import { MissionCard } from "./MissionCard.jsx";
import { missionsData } from "./missionsData.js";

const App = () => {
  const [search, setSearch] = useState("");
  const [selectedMission, setSelectedMission] = useState(null);

  const filteredMissions = missionsData.filter((mission) =>
    mission.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border rounded mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="space-y-4">
        {filteredMissions.length > 0 ? (
          filteredMissions.map((mission) => (
            <MissionCard
              key={mission.id}
              mission={mission}
              onView={setSelectedMission}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No results found.</p>
        )}
      </div>
      <MissionModal
        mission={selectedMission}
        onClose={() => setSelectedMission(null)}
      />
      <p className="text-center mt-4">End of list.</p>
    </div>
  );
};

export default App;
