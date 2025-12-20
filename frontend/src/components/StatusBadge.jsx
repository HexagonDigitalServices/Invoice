const StatusIcons = {
  paid: ({ className = "w-3 h-3" }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  unpaid: ({ className = "w-3 h-3" }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
  overdue: ({ className = "w-3 h-3" }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  draft: ({ className = "w-3 h-3" }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
};


  const statusConfig = {
    paid: {
      bg: "bg-emerald-50/80 backdrop-blur-sm",
      text: "text-emerald-700",
      border: "border-emerald-200",
      icon: "paid",
      gradient: "from-emerald-400 to-green-500",
    },
    unpaid: {
      bg: "bg-amber-50/80 backdrop-blur-sm",
      text: "text-amber-700",
      border: "border-amber-200",
      icon: "unpaid",
      gradient: "from-amber-400 to-orange-500",
    },
    overdue: {
      bg: "bg-rose-50/80 backdrop-blur-sm",
      text: "text-rose-700",
      border: "border-rose-200",
      icon: "overdue",
      gradient: "from-rose-400 to-red-500",
    },
    draft: {
      bg: "bg-gray-50/80 backdrop-blur-sm",
      text: "text-gray-700",
      border: "border-gray-200",
      icon: "draft",
      gradient: "from-gray-400 to-gray-500",
    },
    default: {
      bg: "bg-gray-50/80 backdrop-blur-sm",
      text: "text-gray-700",
      border: "border-gray-200",
      icon: "draft",
      gradient: "from-gray-400 to-gray-500",
    },
  };

  const sizeClasses = {
    small: "px-2 py-1 text-xs gap-1.5",
    default: "px-3 py-1.5 text-sm gap-2",
    large: "px-4 py-2 text-base gap-2.5",
  };
