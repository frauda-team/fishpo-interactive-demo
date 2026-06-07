import { FlagRegular, FlagFilled, FilterRegular, ChevronDownRegular, MailRegular } from '@fluentui/react-icons'

export default function EmailList({ emails, selectedId, onSelect, onFlag, activeTab, onTabChange, searchQuery, hidden }) {
  const unreadCount = emails.filter(e => e.unread).length

  return (
    <div className={`email-list-col${hidden ? ' mobile-hidden' : ''}`}>
      <div className="list-header">
        <h2>{searchQuery ? `Search: "${searchQuery}"` : 'Inbox'}</h2>
      </div>

      {!searchQuery && (
        <div className="list-tabs">
          <button
            className={`list-tab${activeTab === 'focused' ? ' active' : ''}`}
            onClick={() => onTabChange('focused')}
          >
            Focused
            {unreadCount > 0 && <span className="list-tab-count">{unreadCount}</span>}
          </button>
          <button
            className={`list-tab${activeTab === 'other' ? ' active' : ''}`}
            onClick={() => onTabChange('other')}
          >
            Other
          </button>
        </div>
      )}

      <div className="list-filter-bar">
        <button className="list-filter-btn">
          <FilterRegular fontSize={14} />
          Filter
        </button>
        <button className="list-filter-btn">
          By date
          <ChevronDownRegular fontSize={12} />
        </button>
      </div>

      <div className="email-rows">
        {activeTab === 'other' && !searchQuery ? (
          <div className="list-empty">
            <MailRegular fontSize={48} />
            <p>No messages in Other</p>
          </div>
        ) : emails.length === 0 ? (
          <div className="list-empty">
            <MailRegular fontSize={48} />
            <p>No results found</p>
          </div>
        ) : (
          emails.map(email => (
            <EmailRow
              key={email.id}
              email={email}
              selected={selectedId === email.id}
              onSelect={onSelect}
              onFlag={onFlag}
            />
          ))
        )}
      </div>
    </div>
  )
}

function EmailRow({ email, selected, onSelect, onFlag }) {
  return (
    <div
      className={`email-row${email.unread ? ' unread' : ''}${selected ? ' selected' : ''}`}
      onClick={() => onSelect(email.id)}
    >
      {email.unread && <span className="unread-dot" />}

      <div className="row-avatar" style={{ background: email.avatarBg }}>
        {email.initials}
      </div>

      <div className="row-body">
        <div className="row-line1">
          <span className="row-from">{email.from}</span>
          <span className="row-time">{email.time}</span>
        </div>
        <div className="row-subject">{email.subject}</div>
        <div className="row-preview">{email.preview}</div>
      </div>

      <div className="row-flags">
        <button
          className={`row-flag-btn${email.flagged ? ' flagged' : ''}`}
          onClick={e => { e.stopPropagation(); onFlag(email.id) }}
          title={email.flagged ? 'Remove flag' : 'Flag this email'}
        >
          {email.flagged
            ? <FlagFilled fontSize={14} />
            : <FlagRegular fontSize={14} />
          }
        </button>
      </div>
    </div>
  )
}
