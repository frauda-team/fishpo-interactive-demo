import {
  NavigationRegular,
  SearchRegular,
  QuestionCircleRegular,
  SettingsRegular,
} from '@fluentui/react-icons'

export default function TopBar({ sidebarOpen, onToggleSidebar, searchQuery, onSearchChange }) {
  return (
    <div className="topbar">
      <button className="topbar-icon-btn" onClick={onToggleSidebar} title="Toggle navigation">
        <NavigationRegular fontSize={20} />
      </button>

      <div className="topbar-brand">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <rect width="26" height="26" rx="3.5" fill="#0078d4"/>
          <rect x="4" y="7.5" width="18" height="12" rx="1.5" fill="none" stroke="white" strokeWidth="1.5"/>
          <path d="M4 10l9 5.5L22 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="topbar-brand-name">Email</span>
      </div>

      <div className="topbar-search">
        <div className="topbar-search-inner">
          <SearchRegular fontSize={16} />
          <input
            className="topbar-search-input"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <div className="topbar-right">
        <button className="topbar-icon-btn" title="Help">
          <QuestionCircleRegular fontSize={20} />
        </button>
        <button className="topbar-icon-btn" title="Settings">
          <SettingsRegular fontSize={20} />
        </button>
        <div className="topbar-avatar" title="Mykhailo N.">MN</div>
      </div>
    </div>
  )
}
