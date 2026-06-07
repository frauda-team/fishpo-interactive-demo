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
        {/* Outlook icon */}
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <rect width="26" height="26" rx="3.5" fill="#0078d4"/>
          <rect x="2.5" y="5" width="13" height="16" rx="1.5" fill="white" fillOpacity=".22" stroke="white" strokeWidth=".7" strokeOpacity=".45"/>
          <circle cx="9" cy="13" r="3.2" fill="white"/>
          <rect x="15.5" y="5" width="8" height="16" rx="0" fill="white" fillOpacity=".12"/>
          <line x1="15.5" y1="5" x2="15.5" y2="21" stroke="white" strokeWidth=".8" strokeOpacity=".4"/>
        </svg>
        <span className="topbar-brand-name">Outlook</span>
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
