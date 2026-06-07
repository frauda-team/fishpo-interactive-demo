import {
  ArrowReplyRegular,
  ArrowReplyAllRegular,
  ArrowForwardRegular,
  DeleteRegular,
  ArchiveRegular,
  FlagRegular,
  FlagFilled,
  MailReadRegular,
  MailUnreadRegular,
  MoreHorizontalRegular,
  ChevronLeftRegular,
  PrintRegular,
  MailRegular,
} from '@fluentui/react-icons'

export default function ReadingPane({ email, onBack, onDelete, onFlag, onToggleRead, hidden, highlightMode }) {
  if (!email) {
    return (
      <div className={`reading-pane${hidden ? ' mobile-hidden' : ''}`}>
        <div className="reading-empty">
          <MailRegular fontSize={64} />
          <h3>Select an item to read</h3>
          <p>Nothing is selected</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`reading-pane${hidden ? ' mobile-hidden' : ''}`}>
      {/* Toolbar */}
      <div className="reading-toolbar">
        <button className="back-btn" onClick={onBack}>
          <ChevronLeftRegular fontSize={16} /> Back
        </button>

        <button className="toolbar-btn" title="Reply">
          <ArrowReplyRegular fontSize={16} /> Reply
        </button>
        <button className="toolbar-btn" title="Reply all">
          <ArrowReplyAllRegular fontSize={16} /> Reply all
        </button>
        <button className="toolbar-btn" title="Forward">
          <ArrowForwardRegular fontSize={16} /> Forward
        </button>

        <div className="toolbar-sep" />

        <button
          className="toolbar-btn danger"
          title="Delete"
          onClick={() => onDelete(email.id)}
        >
          <DeleteRegular fontSize={16} /> Delete
        </button>
        <button className="toolbar-btn" title="Archive">
          <ArchiveRegular fontSize={16} /> Archive
        </button>
        <button
          className={`toolbar-btn${email.flagged ? ' flagged' : ''}`}
          title={email.flagged ? 'Remove flag' : 'Flag'}
          onClick={() => onFlag(email.id)}
        >
          {email.flagged
            ? <FlagFilled fontSize={16} />
            : <FlagRegular fontSize={16} />
          }
          {email.flagged ? 'Unflag' : 'Flag'}
        </button>
        <button
          className="toolbar-btn"
          title={email.unread ? 'Mark as read' : 'Mark as unread'}
          onClick={() => onToggleRead(email.id)}
        >
          {email.unread
            ? <MailReadRegular fontSize={16} />
            : <MailUnreadRegular fontSize={16} />
          }
          {email.unread ? 'Mark read' : 'Mark unread'}
        </button>

        <div className="toolbar-sep" />

        <button className="toolbar-btn" title="Print">
          <PrintRegular fontSize={16} />
        </button>
        <button className="toolbar-btn" title="More actions">
          <MoreHorizontalRegular fontSize={16} />
        </button>
      </div>

      {/* Scrollable content — key causes re-animation on email switch */}
      <div className="reading-scroll">
        <div key={email.id} className="msg-content">
          <div className="msg-subject">{email.subject}</div>

          <div className="msg-meta">
            <div className="msg-av" style={{ background: email.avatarBg }}>
              {email.initials}
            </div>
            <div className="msg-meta-text">
              <div className="msg-from-name">
                {email.from}
                <span className={`msg-from-email${highlightMode === 'scam' ? ' sus-email' : ''}`}>
                  &lt;{email.fromEmail}&gt;
                </span>
                {highlightMode === 'scam' && (
                  <span className="sus-email-badge">⚠ Suspicious address</span>
                )}
              </div>
              <div className="msg-to-line">
                To: <span>{email.to}</span>
              </div>
            </div>
            <div className="msg-date">{email.date}</div>
          </div>

          <hr className="msg-divider" />

          <div
            className={`msg-body${highlightMode === 'scam' ? ' highlights-on' : ''}`}
            dangerouslySetInnerHTML={{ __html: email.body }}
          />

          {email.attachments && email.attachments.length > 0 && (
            <div className="msg-attachments">
              <div className="attachments-label">Attachments</div>
              {email.attachments.map((att, i) => (
                <div key={i} className={`attachment${att.malicious ? ' danger' : ''}`}>
                  <span className="attachment-name">{att.name}</span>
                  {att.malicious && highlightMode === 'scam' && (
                    <span className="attachment-danger-badge">⚠ Suspicious file</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
