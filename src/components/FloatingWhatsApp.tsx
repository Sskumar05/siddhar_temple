import { useState, useEffect } from "react";

// ─── TypeScript Interfaces ───────────────────────────────────────────────────

interface FloatingWhatsAppProps {
  /** WhatsApp phone number in international format without + or spaces, e.g. "8248978136" */
  phoneNumber?: string;
  /** Pre-filled message when opening WhatsApp */
  prefilledMessage?: string;
  /** Name shown in the chat popup header */
  accountName?: string;
  /** Avatar image URL for the popup */
  avatar?: string;
  /** Status text shown below the account name */
  statusMessage?: string;
  /** Welcome message body */
  chatMessage?: string;
  /** Show/hide the notification badge */
  showNotification?: boolean;
  /** Badge count */
  notificationCount?: number;
  /** Tooltip label shown near the button */
  tooltip?: string;
  /** Delay (ms) before the popup auto-opens on first visit */
  autoOpenDelay?: number;
}

interface ChatPopupProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string;
  prefilledMessage: string;
  accountName: string;
  avatar?: string;
  statusMessage: string;
  chatMessage: string;
}

// ─── WhatsApp SVG Icon ────────────────────────────────────────────────────────

const WhatsAppIcon = ({ size = 28, color = "white" }: { size?: number; color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 175.216 175.552"
    width={size}
    height={size}
    fill={color}
    aria-hidden="true"
  >
    <path d="M87.6 0C39.3 0 0 39.4 0 87.7c0 15.5 4.1 30.1 11.2 42.7L0 175.6l46.6-11c12.2 6.5 26.1 10.3 40.9 10.3 48.3 0 87.6-39.3 87.6-87.6C175.2 39.4 135.9 0 87.6 0zm0 160.2c-13.5 0-26.1-3.7-36.8-10l-2.6-1.6-27.7 7.3 7.4-27.1-1.7-2.7C19.1 115 15 101.8 15 87.7 15 47.6 47.6 15 87.6 15c39.9 0 72.6 32.7 72.6 72.7 0 40-32.6 72.5-72.6 72.5zm39.8-54.3c-2.2-1.1-12.9-6.3-14.9-7.1-2-.7-3.4-1.1-4.8 1.1-1.4 2.2-5.5 7.1-6.7 8.5-1.2 1.4-2.5 1.6-4.7.5-2.2-1.1-9.2-3.4-17.5-10.8-6.5-5.8-10.8-12.9-12.1-15.1-1.2-2.2-.1-3.4 1-4.5 1-1 2.2-2.5 3.3-3.8 1.1-1.3 1.4-2.2 2.2-3.7.7-1.5.4-2.8-.2-3.9-.6-1.1-4.8-11.6-6.6-15.9-1.7-4.2-3.5-3.6-4.8-3.7-1.2-.1-2.6-.1-4-.1s-3.7.5-5.6 2.7c-1.9 2.2-7.4 7.2-7.4 17.6s7.6 20.4 8.6 21.8c1.1 1.4 14.9 22.7 36.1 31.9 5 2.2 8.9 3.5 12 4.5 5 1.6 9.6 1.4 13.2.8 4-.6 12.3-5 14-9.9 1.7-4.8 1.7-8.9 1.2-9.8-.5-.8-1.9-1.3-4.1-2.4z" />
  </svg>
);

// ─── Chat Popup ───────────────────────────────────────────────────────────────

const ChatPopup = ({
  isOpen,
  onClose,
  phoneNumber,
  prefilledMessage,
  accountName,
  avatar,
  statusMessage,
  chatMessage,
}: ChatPopupProps) => {
  const handleStartChat = () => {
    const encoded = encodeURIComponent(prefilledMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="WhatsApp chat popup"
      className={`
        fixed bottom-24 right-4 sm:right-6 z-[9998]
        w-[calc(100vw-2rem)] max-w-[340px]
        transition-all duration-300 ease-out
        ${isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
          : "opacity-0 translate-y-4 pointer-events-none scale-95"
        }
      `}
    >
      {/* Card */}
      <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">

        {/* Header – WhatsApp green */}
        <div className="bg-[#25D366] px-4 py-3 flex items-center gap-3 relative">
          {/* Avatar */}
          <div className="relative shrink-0">
            {avatar ? (
              <img
                src={avatar}
                alt={accountName}
                className="w-11 h-11 rounded-full object-cover border-2 border-white/50"
              />
            ) : (
              <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                {accountName.charAt(0).toUpperCase()}
              </div>
            )}
            {/* Online dot */}
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-full border-2 border-[#25D366]" />
          </div>

          {/* Name + status */}
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm leading-tight truncate">{accountName}</p>
            <p className="text-white/80 text-xs mt-0.5 truncate">{statusMessage}</p>
          </div>

          {/* Close button */}
          <button
            id="whatsapp-popup-close"
            onClick={onClose}
            aria-label="Close WhatsApp chat popup"
            className="
              w-7 h-7 rounded-full bg-white/20 hover:bg-white/30
              flex items-center justify-center text-white
              transition-colors duration-150 shrink-0
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
              width={14} height={14} aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Chat area – WhatsApp wallpaper-ish background */}
        <div
          className="px-4 py-5 min-h-[100px] flex items-start"
          style={{
            background: "linear-gradient(135deg, #e5ddd5 0%, #ddd6cc 100%)",
          }}
        >
          {/* Message bubble */}
          <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[90%] relative">
            {/* Tail */}
            <span
              className="absolute -left-2 top-0 w-3 h-3 bg-white"
              style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
            />
            <h3 className="font-semibold text-gray-800 text-sm mb-1">Chat with us on WhatsApp</h3>
            <p className="text-gray-600 text-xs leading-relaxed">{chatMessage}</p>
            <span className="block text-right text-[10px] text-gray-400 mt-2">
              {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              <span className="ml-1 inline-flex">
                {/* Double tick */}
                <svg viewBox="0 0 16 11" width={14} height={10} fill="#53bdeb" aria-hidden="true">
                  <path d="M11.071.653a.75.75 0 0 0-1.06 1.061l1.06-1.06zm-9.01 5.803L1.5 6.91l1.06 1.06 1.06-1.06-1.56-1.514zm4.81 4.81L5.31 10.207 4.25 9.147l1.561 1.12zm.75.53a.75.75 0 0 0 1.06 0l-1.06 0zm5.44-9.082-6.5 6.5 1.06 1.06 6.5-6.5-1.06-1.06zm-6.5 6.5-1.5-1.5-1.06 1.06 1.5 1.5 1.06-1.06z" />
                </svg>
              </span>
            </span>
          </div>
        </div>

        {/* Start Chat button */}
        <div className="px-4 py-4 bg-white">
          <button
            id="whatsapp-start-chat"
            onClick={handleStartChat}
            className="
              w-full flex items-center justify-center gap-2
              bg-[#25D366] hover:bg-[#1ebe5d]
              text-white font-semibold text-sm
              rounded-full py-3 px-6
              transition-all duration-200 hover:shadow-lg hover:shadow-[#25D366]/30
              active:scale-95
            "
          >
            <WhatsAppIcon size={18} color="white" />
            Start Chat
          </button>
          <p className="text-center text-[10px] text-gray-400 mt-2">
            Typically replies within minutes
          </p>
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

export const FloatingWhatsApp = ({
  phoneNumber = "8248978136",
  prefilledMessage = "வணக்கம்! உங்கள் திருக்கோயில் பற்றி மேலும் அறிய விரும்புகிறேன்.",
  accountName = "கோரக்கர் சித்தர் பீடம்",
  avatar,
  statusMessage = "Online · Usually replies instantly",
  chatMessage = "வணக்கம்! 🙏 கோரக்கர் சித்தர் ஜீவசமாதி பீடத்திற்கு வரவேற்கிறோம். எங்களிடம் நேரடியாக WhatsApp-ல் தொடர்பு கொள்ளுங்கள்.",
  showNotification = true,
  notificationCount = 1,
  tooltip = "Chat with us",
  autoOpenDelay = 0,
}: FloatingWhatsAppProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Auto-open after delay (optional)
  useEffect(() => {
    if (autoOpenDelay > 0 && !hasInteracted) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasInteracted(true);
      }, autoOpenDelay);
      return () => clearTimeout(timer);
    }
  }, [autoOpenDelay, hasInteracted]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    setHasInteracted(true);
    setShowTooltip(false);
  };

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Popup */}
      <ChatPopup
        isOpen={isOpen}
        onClose={handleClose}
        phoneNumber={phoneNumber}
        prefilledMessage={prefilledMessage}
        accountName={accountName}
        avatar={avatar}
        statusMessage={statusMessage}
        chatMessage={chatMessage}
      />

      {/* FAB wrapper */}
      <div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-end gap-2"
        aria-label="WhatsApp floating action button"
      >
        {/* Tooltip */}
        {showTooltip && !isOpen && (
          <div
            role="tooltip"
            className="
              bg-gray-900 text-white text-xs font-medium
              px-3 py-1.5 rounded-full shadow-lg
              animate-fade-in whitespace-nowrap
            "
          >
            {tooltip}
          </div>
        )}

        {/* FAB button */}
        <button
          id="whatsapp-fab"
          onClick={handleToggle}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
          aria-expanded={isOpen}
          className="
            relative w-14 h-14 sm:w-16 sm:h-16
            bg-[#25D366] hover:bg-[#1ebe5d]
            rounded-full shadow-xl
            flex items-center justify-center
            transition-all duration-300
            hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/40
            active:scale-95
            focus:outline-none focus:ring-4 focus:ring-[#25D366]/40
          "
        >
          {/* Ripple ring animation */}
          <span
            className="
              absolute inset-0 rounded-full
              bg-[#25D366]/40
              animate-ping
            "
            aria-hidden="true"
          />

          {/* Icon – toggle between WhatsApp & X */}
          <span
            className={`
              absolute transition-all duration-300
              ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}
            `}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
              width={24} height={24} aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </span>

          <span
            className={`
              absolute transition-all duration-300
              ${isOpen ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}
            `}
          >
            <WhatsAppIcon size={28} color="white" />
          </span>

          {/* Notification badge */}
          {showNotification && !isOpen && !hasInteracted && (
            <span
              className="
                absolute -top-1 -right-1
                min-w-[20px] h-5 px-1
                bg-red-500 text-white
                text-[10px] font-bold
                rounded-full flex items-center justify-center
                shadow-md animate-bounce
              "
              aria-label={`${notificationCount} new message`}
            >
              {notificationCount}
            </span>
          )}
        </button>
      </div>
    </>
  );
};

export default FloatingWhatsApp;
