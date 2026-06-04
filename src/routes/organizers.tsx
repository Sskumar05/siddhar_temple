import { createFileRoute } from "@tanstack/react-router";
import Organizers from "../components/Organizers";

export const Route = createFileRoute("/organizers")({
  head: () => ({
    meta: [
      { title: "அறங்காவலர்கள் — கோரக்கர் சித்தர் ஜீவசமாதி பீடம்" },
      { name: "description", content: "வடக்கு பொய்கைநல்லூர் கோரக்கர் சித்தர் கோவில் அறங்காவலர்கள் மற்றும் நிர்வாகிகள்." },
    ],
  }),
  component: OrganizersPage,
});

function OrganizersPage() {
  return (
    <>
      <div className="pt-24 pb-8 bg-gradient-to-b from-orange-50/50 to-white">
        {/* Adds spacing for navbar */}
      </div>
      <Organizers />
    </>
  );
}
