// ── Clean emails ──────────────────────────────────────────────
export const initialEmails = [
  {
    id: 1,
    unread: false,
    from: 'Māris Bērziņš',
    fromEmail: 'm.berzins@balticventures.lv',
    initials: 'MB',
    avatarBg: '#0f6cbd',
    subject: 'Partnership Agreement — Ready to Move Forward',
    preview: 'Hi, I wanted to follow up on our conversations from last week. Our legal team has reviewed the terms and we are ready to proceed with the partnership.',
    time: 'Jun 5',
    date: 'Thu 05/06/2026 14:14',
    to: 'me',
    scamCheck: {
      verdict: 'clean',
      checks: [
        { id: 'sender',      label: 'Sender verified',        pass: true, detail: 'm.berzins@balticventures.lv matches a known contact. Domain is legitimate.' },
        { id: 'urgency',     label: 'No pressure tactics',    pass: true, detail: 'No urgency or pressure language detected.' },
        { id: 'attachments', label: 'No suspicious files',    pass: true, detail: 'This email contains no attachments.' },
        { id: 'language',    label: 'Natural writing style',  pass: true, detail: 'Writing style matches previous correspondence.' },
      ],
    },
    body: `
      <p>Hi,</p>
      <p>I wanted to follow up on our conversations from last week. Our legal team has reviewed the proposed terms and we are ready to move forward with the partnership.</p>
      <p>We are very excited about the opportunities here. I have asked our contracts team to prepare the formal partnership agreement document. Once it is ready I will send it over for your review — it should not take more than a couple of days.</p>
      <p>In the meantime, let me know if there is anything you would like to clarify before we reach the signing stage.</p>
      <p class="sig">
        Māris Bērziņš<br/>
        Business Development Manager · Baltic Ventures SIA<br/>
        m.berzins@balticventures.lv · +371 2611 4820
      </p>
    `,
  },
  {
    id: 2,
    unread: false,
    from: 'Māris Bērziņš',
    fromEmail: 'm.berzins@balticventures.lv',
    initials: 'MB',
    avatarBg: '#0f6cbd',
    subject: 'RE: Partnership Agreement — Document Ready',
    preview: 'Great news — our legal team finished the agreement this morning. I will send the PDF over shortly for your review and signature. The deadline for both parties is end of next week.',
    time: 'Yesterday',
    date: 'Sun 07/06/2026 11:08',
    to: 'me',
    scamCheck: {
      verdict: 'clean',
      checks: [
        { id: 'sender',      label: 'Sender verified',        pass: true, detail: 'm.berzins@balticventures.lv — matches correspondence history.' },
        { id: 'urgency',     label: 'No pressure tactics',    pass: true, detail: 'Deadline mentioned in context, not used as a pressure tactic.' },
        { id: 'attachments', label: 'No suspicious files',    pass: true, detail: 'No attachments — PDF to be sent separately.' },
        { id: 'language',    label: 'Natural writing style',  pass: true, detail: 'Tone and phrasing match previous emails from this sender.' },
      ],
    },
    body: `
      <p>Hi,</p>
      <p>Great news — our legal team finished the agreement this morning. I will send the PDF over shortly for your review.</p>
      <p>Once you have had a look, if everything seems fine we just need your signature and we can move forward. Our internal deadline for both parties to sign is <strong>end of next week</strong>, so there is no rush — plenty of time to read through it carefully.</p>
      <p>Looking forward to wrapping this up. Let me know if you have any questions before you receive the document.</p>
      <p class="sig">
        Māris Bērziņš<br/>
        Business Development Manager · Baltic Ventures SIA<br/>
        m.berzins@balticventures.lv · +371 2611 4820
      </p>
    `,
  },
  {
    id: 3,
    unread: true,
    from: 'Santa Jansone',
    fromEmail: 's.jansone@meridian-group.lv',
    initials: 'SJ',
    avatarBg: '#ca5010',
    subject: 'Q3 Strategy Review — Thursday at 2:00 PM',
    preview: 'Hi team! I want to confirm our upcoming Q3 Strategy Review session. Your participation is important as we set priorities and allocate resources for the next quarter.',
    time: '9:41',
    date: 'Mon 08/06/2026 9:41',
    to: 'Product Team',
    scamCheck: {
      verdict: 'clean',
      checks: [
        { id: 'sender',      label: 'Sender verified',        pass: true, detail: 's.jansone@meridian-group.lv is an internal address.' },
        { id: 'urgency',     label: 'No pressure tactics',    pass: true, detail: 'Meeting invite with reasonable advance notice.' },
        { id: 'attachments', label: 'No suspicious files',    pass: true, detail: 'No attachments.' },
        { id: 'language',    label: 'Natural writing style',  pass: true, detail: 'Consistent with internal communications.' },
      ],
    },
    body: `
      <p>Hi team!</p>
      <p>I want to confirm our upcoming <strong>Q3 Strategy Review</strong> session. Your participation is important — we will be aligning on priorities and resource allocation for the next quarter.</p>
      <div class="callout">
        <strong>📅 Meeting Details</strong><br/>
        Date: <strong>Thursday, June 11, 2026</strong><br/>
        Time: 2:00 PM – 3:30 PM<br/>
        Location: Conference Room B · Teams link in the calendar invite
      </div>
      <h3>Agenda</h3>
      <ul>
        <li>Q2 performance review and KPI analysis <em>(20 min)</em></li>
        <li>Q3 roadmap and resource allocation <em>(30 min)</em></li>
        <li>Budget approval <em>(20 min)</em></li>
        <li>Open discussion <em>(20 min)</em></li>
      </ul>
      <p>If you cannot attend, please let me know by <strong>end of Wednesday</strong>.</p>
      <p class="sig">
        Santa Jansone<br/>
        Head of Product Strategy · Meridian Group<br/>
        s.jansone@meridian-group.lv
      </p>
    `,
  },
  {
    id: 4,
    unread: false,
    from: 'Accounting',
    fromEmail: 'accounting@meridian-group.lv',
    initials: 'AC',
    avatarBg: '#881798',
    subject: 'Invoice #INV-2026-0847 Awaiting Your Approval',
    preview: 'An invoice has been submitted and requires your approval before the payment deadline. Total amount: €12,400.00.',
    time: 'Jun 2',
    date: 'Tue 02/06/2026 11:23',
    to: 'Finance Approvers',
    scamCheck: {
      verdict: 'clean',
      checks: [
        { id: 'sender',      label: 'Sender verified',        pass: true, detail: 'accounting@meridian-group.lv is the internal accounting address.' },
        { id: 'urgency',     label: 'No pressure tactics',    pass: true, detail: 'Standard invoice with a reasonable due date.' },
        { id: 'attachments', label: 'No suspicious files',    pass: true, detail: 'No file attachments in this notification.' },
        { id: 'language',    label: 'Natural writing style',  pass: true, detail: 'Formal invoice language, consistent with finance templates.' },
      ],
    },
    body: `
      <p>Hello,</p>
      <p>An invoice has been submitted in the system and requires your approval before the payment deadline.</p>
      <div class="callout">
        <strong>Invoice #INV-2026-0847</strong><br/>
        Vendor: CloudStack Solutions SIA<br/>
        Amount: <strong>€12,400.00</strong><br/>
        Due date: June 20, 2026
      </div>
      <h3>Line Items</h3>
      <table>
        <thead><tr><th>Description</th><th>Qty</th><th>Total</th></tr></thead>
        <tbody>
          <tr><td>Kubernetes cluster (Q2)</td><td>1</td><td>€7,800.00</td></tr>
          <tr><td>Object storage — 5 TB</td><td>5</td><td>€1,300.00</td></tr>
          <tr><td>Enterprise support plan</td><td>1</td><td>€3,300.00</td></tr>
          <tr><td colspan="2"><strong>Total</strong></td><td><strong>€12,400.00</strong></td></tr>
        </tbody>
      </table>
      <p class="sig">
        Meridian Group · Accounting<br/>
        accounting@meridian-group.lv · Ext. 4400
      </p>
    `,
  },
  {
    id: 5,
    unread: true,
    from: 'IT Support',
    fromEmail: 'it.support@meridian-group.lv',
    initials: 'IT',
    avatarBg: '#c43e1c',
    subject: '[Ticket #84721] VPN Access Request — Approved',
    preview: 'Your VPN access request has been received and assigned to the network security team. Estimated completion time: within 24 business hours.',
    time: 'Jun 4',
    date: 'Thu 04/06/2026 14:57',
    to: 'me',
    scamCheck: {
      verdict: 'clean',
      checks: [
        { id: 'sender',      label: 'Sender verified',        pass: true, detail: 'it.support@meridian-group.lv is a known internal IT address.' },
        { id: 'urgency',     label: 'No pressure tactics',    pass: true, detail: 'Standard ticket confirmation with no coercive language.' },
        { id: 'attachments', label: 'No suspicious files',    pass: true, detail: 'No attachments.' },
        { id: 'language',    label: 'Natural writing style',  pass: true, detail: 'Automated helpdesk tone, consistent with internal IT communications.' },
      ],
    },
    body: `
      <p>Hello,</p>
      <p>This email confirms that we have received your VPN access request. The ticket has been logged and assigned to the network security team.</p>
      <div class="callout">
        <strong>Ticket #84721 — VPN Access Request</strong><br/>
        Status: <strong>In Progress</strong><br/>
        Priority: Normal<br/>
        Estimated completion: within 24 business hours
      </div>
      <h3>Next Steps</h3>
      <ol>
        <li>The network team will review your requested access scope</li>
        <li>Your manager will receive an approval request</li>
        <li>Once approved, you will receive VPN credentials and setup instructions</li>
      </ol>
      <p class="sig">
        IT Support · Meridian Group<br/>
        it.support@meridian-group.lv · Ext. 9000
      </p>
    `,
  },
]

// ── Scam email — injected after 1 s ──────────────────────────
export const scamEmail = {
  id: 6,
  unread: true,
  isNew: true,
  from: 'Māris Bērziņš',
  fromEmail: 'mb.beerzins@balticventures.lv',   // ← typo: "beerzins" not "berzins"
  initials: 'MB',
  avatarBg: '#0f6cbd',
  subject: 'RE: Partnership Agreement — Please Sign PDF by Tomorrow',
  preview: 'Please find the attached final agreement PDF. We need your signature by end of business tomorrow — the deadline cannot be moved. This is urgent.',
  time: 'Just now',
  date: 'Mon 08/06/2026 10:03',
  to: 'me',
  attachments: [
    { name: 'Partnership_Agreement_Final_v3.pdf', malicious: true },
  ],
  scamCheck: {
    verdict: 'scam',
    checks: [
      {
        id: 'sender',
        label: 'Suspicious sender address',
        pass: false,
        detail: '"mb.beerzins@balticventures.lv" — double "e" in "beerzins". Likely impersonating m.berzins@balticventures.lv.',
      },
      {
        id: 'urgency',
        label: 'High-pressure language',
        pass: false,
        detail: 'Detected phrases: "by end of business tomorrow", "deadline cannot be moved", "this is urgent" — classic phishing pressure tactics.',
      },
      {
        id: 'attachments',
        label: 'Malicious attachment',
        pass: false,
        detail: 'Partnership_Agreement_Final_v3.pdf contains embedded JavaScript and obfuscated executable code. Do not open.',
      },
      {
        id: 'language',
        label: 'Natural writing style',
        pass: true,
        detail: 'Writing style partially mimics the legitimate contact but is more urgent and pressuring than previous messages.',
      },
    ],
  },
  body: `
    <p>Hi,</p>
    <p>Please find attached the final partnership agreement PDF in this email.</p>
    <p>We need your signature by <span class="sus-mark sus-urgency">end of business tomorrow</span> — our legal team has confirmed that <span class="sus-mark sus-urgency">the deadline cannot be moved</span>. <span class="sus-mark sus-urgency">This is urgent.</span></p>
    <p>Simply sign page 7 and send the document back, or use the DocuSign link on the last page.</p>
    <p>Please treat this as a priority — <span class="sus-mark sus-urgency">the deal cannot proceed without your signed copy.</span></p>
    <p class="sig">
      Māris Bērziņš<br/>
      Business Development Manager · Baltic Ventures SIA<br/>
      mb.beerzins@balticventures.lv
    </p>
  `,
}
