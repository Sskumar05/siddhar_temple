import React from "react";
import { motion, Variants } from "framer-motion";
import jeeva_nandham from "../assets/jeeva_nandham.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

// ─── TypeScript Interfaces ───────────────────────────────────────────────────

export interface OrganizerSocials {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

export interface Organizer {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
  socials?: OrganizerSocials;
  isMainLeader?: boolean;
}

// ─── Dummy Data ───────────────────────────────────────────────────────────────

const MAIN_LEADER: Organizer = {
  id: "leader-1",
  name: "இரா. ஜீவானந்தம்",
  role: "B.A.",
  imageUrl: jeeva_nandham,
  // bio: "Leading the foundation with over 20 years of spiritual service and dedication to the community.",
  socials: {
    facebook: "",
    linkedin: "",
    twitter: "",
  },
  isMainLeader: true,
};

const TEAM_MEMBERS: Organizer[] = [
  {
    id: "member-1",
    name: "வே. அ. கிருஷ்ணன்",
    role: "M.A., B.Ed.",
    imageUrl: "",
    // bio: "Managing daily temple administration and special events coordination.",
    socials: { facebook: "", instagram: "" },
  },
  {
    id: "member-2",
    name: "E.R. காசிநாதன்",
    role: "",
    imageUrl: "",
    // bio: "Overseeing financial planning, donations, and charity fund distribution.",
    socials: { linkedin: "", twitter: "" },
  },
  {
    id: "member-3",
    name: "வை. இரா. ஜெயச்சந்திரன்",
    role: "",
    imageUrl: "",
    // bio: "Organizing poojas, festivals, and annadhanam activities seamlessly.",
    socials: { facebook: "", instagram: "" },
  },
  {
    id: "member-4",
    name: "வே. வி. திருநாவுக்கரசு",
    role: "",
    imageUrl: "",
    // bio: "Connecting with devotees and handling media communications.",
    socials: { instagram: "", linkedin: "", twitter: "" },
  },
];

// ─── Social Icons Component ───────────────────────────────────────────────────

const SocialLinks = ({ socials }: { socials?: OrganizerSocials }) => {
  if (!socials) return null;
  return (
    <div className="flex items-center justify-center gap-3 mt-4">
      {socials.facebook && (
        <a href={socials.facebook} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
          <Facebook size={18} />
        </a>
      )}
      {socials.instagram && (
        <a href={socials.instagram} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
          <Instagram size={18} />
        </a>
      )}
      {socials.twitter && (
        <a href={socials.twitter} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
          <Twitter size={18} />
        </a>
      )}
      {socials.linkedin && (
        <a href={socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors">
          <Linkedin size={18} />
        </a>
      )}
    </div>
  );
};

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

// ─── Main Component ───────────────────────────────────────────────────────────

export const Organizers = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-orange-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif mb-4">
            நிர்வாக அறங்காவலர்கள்
          </h2>
          {/* <p className="text-orange-600 font-medium text-lg tracking-wide uppercase">
            Event Organizers
          </p> */}
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Main Leader Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-20"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-orange-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 max-w-sm w-full text-center group border border-orange-100 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative inline-block mb-6">
              <div className="w-[200px] h-[235px] rounded-xl p-1 bg-gradient-to-tr from-orange-400 to-yellow-300">
                <img
                  src={MAIN_LEADER.imageUrl}
                  alt={MAIN_LEADER.name}
                  className="w-full h-full object-cover rounded-xl border-4 border-white"
                />
              </div>
              {/* <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-md">
                <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center">
                  ✨
                </div>
              </div> */}
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 font-serif mb-1 group-hover:text-orange-600 transition-colors">
              {MAIN_LEADER.name}
            </h3>
            <p className="text-orange-500 font-medium text-sm tracking-wider uppercase mb-4">
              {MAIN_LEADER.role}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {MAIN_LEADER.bio}
            </p>
            
            <SocialLinks socials={MAIN_LEADER.socials} />
          </div>
        </motion.div>


        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif mb-4">
            அறங்காவலர்கள்
          </h2>
          {/* <p className="text-orange-600 font-medium text-lg tracking-wide uppercase">
            Event Organizers
          </p> */}
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group border border-gray-100 flex flex-col items-center"
            >
              <div className="w-[100px] h-[100px] rounded-lg p-1 bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300 mb-5">
                <img
                  src={member.imageUrl || undefined}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-lg border-2 border-white shadow-sm"
                />
              </div>
              
              <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                {member.name}
              </h4>
              <p className="text-orange-500 font-medium text-xs tracking-wider uppercase mb-3">
                {member.role}
              </p>
              <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-grow">
                {member.bio}
              </p>
              
              <div className="mt-auto w-full pt-4 border-t border-gray-100">
                <SocialLinks socials={member.socials} />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Organizers;
