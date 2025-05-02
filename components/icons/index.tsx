import React from "react"

// Base icon component with accessibility features
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
  title?: string
  description?: string
}

const IconBase: React.FC<IconProps> = ({ children, size = 24, title, description, ...props }) => {
  const uniqueId = React.useId()
  const titleId = title ? `icon-title-${uniqueId}` : undefined
  const descId = description ? `icon-desc-${uniqueId}` : undefined
  const isHidden = !title

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={isHidden.toString()}
      aria-labelledby={titleId ? titleId : undefined}
      aria-describedby={descId ? descId : undefined}
      role="img"
      {...props}
    >
      {title && <title id={titleId}>{title}</title>}
      {description && <desc id={descId}>{description}</desc>}
      {children}
    </svg>
  )
}

// Portfolio Icons
export const PortfolioIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="Portfolio Overview">
    <rect x="2" y="3" width="20" height="18" rx="2" />
    <line x1="2" y1="9" x2="22" y2="9" />
    <path d="M6 14h4" />
    <path d="M6 17h8" />
    <path d="M14 14h4" />
  </IconBase>
)

export const AssetAllocationIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="Asset Allocation">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a10 10 0 0 1 0 20" />
    <path d="M12 2a10 10 0 0 0 0 20" />
    <path d="M12 2v20" />
    <path d="M2 12h20" />
  </IconBase>
)

export const PerformanceIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="Performance">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </IconBase>
)

export const InvestmentIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="Investments">
    <path d="M12 2v4" />
    <path d="M5 5l2.5 2.5" />
    <path d="M19 5l-2.5 2.5" />
    <circle cx="12" cy="11" r="5" />
    <path d="M12 16v6" />
  </IconBase>
)

// Market Analysis Icons
export const ChartLineIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="Line Chart">
    <path d="M3 3v18h18" />
    <path d="M3 12h4l3-6 4 12 3-6h4" />
  </IconBase>
)

export const ChartBarIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="Bar Chart">
    <path d="M3 3v18h18" />
    <path d="M7 16V8" />
    <path d="M11 16v-5" />
    <path d="M15 16v-8" />
    <path d="M19 16v-3" />
  </IconBase>
)

export const ChartCandlestickIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="Candlestick Chart">
    <path d="M3 3v18h18" />
    <rect x="6" y="7" width="2" height="6" />
    <line x1="7" y1="5" x2="7" y2="7" />
    <line x1="7" y1="13" x2="7" y2="15" />
    <rect x="11" y="10" width="2" height="4" />
    <line x1="12" y1="8" x2="12" y2="10" />
    <line x1="12" y1="14" x2="12" y2="16" />
    <rect x="16" y="5" width="2" height="8" />
    <line x1="17" y1="3" x2="17" y2="5" />
    <line x1="17" y1="13" x2="17" y2="17" />
  </IconBase>
)

export const MarketTrendsIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="Market Trends">
    <path d="M2 12h2l4-8 4 16 4-8h6" />
    <path d="M18 8l4 4-4 4" />
  </IconBase>
)

// User Profile Icons
export const UserProfileIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="User Profile">
    <circle cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 1 0-16 0" />
  </IconBase>
)

export const SettingsIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="Settings">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </IconBase>
)

export const SecurityIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="Security">
    <path d="M12 2s8 4 8 10v4c0 2-2 4-4 4H8c-2 0-4-2-4-4v-4c0-6 8-10 8-10z" />
    <path d="M9 16l2 2 4-4" />
  </IconBase>
)

export const NotificationsIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="Notifications">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </IconBase>
)

// Contact Icons
export const EmailIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="Email">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </IconBase>
)

export const PhoneIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="Phone">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </IconBase>
)

export const LocationIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="Location">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </IconBase>
)

export const SupportIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="Support">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </IconBase>
)

// Social Media Icons
export const FacebookIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="Facebook">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </IconBase>
)

export const TwitterIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="Twitter">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </IconBase>
)

export const LinkedInIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="LinkedIn">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </IconBase>
)

export const InstagramIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="Instagram">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </IconBase>
)

export const YoutubeIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props} title="YouTube">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </IconBase>
)

