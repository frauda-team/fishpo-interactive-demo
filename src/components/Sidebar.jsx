import {
  MailFilled,
  CalendarLtrRegular,
  PeopleRegular,
  TaskListLtrRegular,
  MailAddRegular,
  MailInboxRegular,
  SendRegular,
  ComposeRegular,
  DeleteRegular,
  ChevronDownRegular,
} from '@fluentui/react-icons'

const railItems = [
  { Icon: MailFilled, label: 'Mail', active: true },
  { Icon: CalendarLtrRegular, label: 'Calendar' },
  { Icon: PeopleRegular, label: 'People' },
  { Icon: TaskListLtrRegular, label: 'Tasks' },
]

const folders = [
  { Icon: MailInboxRegular, label: 'Inbox', active: true, key: 'inbox' },
  { Icon: ComposeRegular, label: 'Drafts', key: 'drafts' },
  { Icon: SendRegular, label: 'Sent Items', key: 'sent' },
  { Icon: DeleteRegular, label: 'Deleted Items', key: 'deleted' },
]

export default function Sidebar({ open, unreadCount }) {
  return (
    <div className={`sidebar${open ? '' : ' closed'}`} style={{ width: open ? 268 : 0 }}>
      {/* Icon rail */}
      <div className="sidebar-rail">
        {railItems.map(({ Icon, label, active }) => (
          <button key={label} className={`rail-btn${active ? ' active' : ''}`} title={label}>
            <Icon fontSize={22} />
          </button>
        ))}
        <div className="rail-spacer" />
      </div>

      {/* Folder pane */}
      <div className="folder-pane">
        <button className="new-mail-btn">
          <MailAddRegular fontSize={18} />
          New mail
        </button>

        <div className="folder-list">
          <div className="folder-group-label">Favorites</div>
          {folders.map(({ Icon, label, active, key }) => (
            <div key={key} className={`folder-row${active ? ' active' : ''}`}>
              <Icon fontSize={16} className="folder-row-icon" />
              <span className="folder-row-label">{label}</span>
              {active && unreadCount > 0 && (
                <span className="folder-row-badge">{unreadCount}</span>
              )}
            </div>
          ))}

          <div className="folder-group-label" style={{ marginTop: 8 }}>Folders</div>
          {folders.map(({ Icon, label, active, key }) => (
            <div key={`all-${key}`} className={`folder-row${active ? ' active' : ''}`}>
              <Icon fontSize={16} className="folder-row-icon" />
              <span className="folder-row-label">{label}</span>
              {active && unreadCount > 0 && (
                <span className="folder-row-badge">{unreadCount}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
