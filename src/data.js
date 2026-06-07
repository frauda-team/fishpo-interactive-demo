export const initialEmails = [
  {
    id: 1,
    unread: true,
    from: 'Sarah Johnson',
    fromEmail: 'sarah.johnson@meridiangroup.com',
    initials: 'SJ',
    avatarBg: '#ca5010',
    subject: 'Q3 Strategy Review — Thursday at 2:00 PM',
    preview: "Hi team, I'm writing to confirm our Q3 strategy review session. Your attendance is important as we'll be setting priorities for the next quarter.",
    time: '9:41 AM',
    date: 'Mon 6/8/2026 9:41 AM',
    to: 'Product Team',
    body: `
      <p>Hi team,</p>
      <p>I'm writing to confirm our upcoming <strong>Q3 Strategy Review</strong> session. Your attendance is important — we'll be aligning on priorities and resource allocation for the next quarter.</p>
      <div class="callout">
        <strong>📅 Meeting Details</strong><br/>
        Date: <strong>Thursday, June 11, 2026</strong><br/>
        Time: 2:00 PM – 3:30 PM (ET)<br/>
        Location: Conference Room B &nbsp;·&nbsp; Teams link in calendar invite
      </div>
      <h3>Agenda</h3>
      <ul>
        <li>Q2 performance recap and KPI review <em>(20 min)</em></li>
        <li>Q3 roadmap priorities and resource allocation <em>(30 min)</em></li>
        <li>Budget approval for upcoming initiatives <em>(20 min)</em></li>
        <li>Open discussion and team questions <em>(20 min)</em></li>
      </ul>
      <p>Please come prepared with your department updates and any blockers to raise. I've shared the preliminary slide deck in the Teams channel — review it before Thursday.</p>
      <p>If you cannot attend, let me know by <strong>Wednesday EOD</strong> so we can arrange a recording or a catch-up.</p>
      <p class="sig">
        Sarah Johnson<br/>
        Head of Product Strategy · Meridian Group<br/>
        sarah.johnson@meridiangroup.com · +1 (415) 555-0192
      </p>
    `,
  },
  {
    id: 2,
    unread: true,
    from: 'Marcus Chen',
    fromEmail: 'm.chen@meridiangroup.com',
    initials: 'MC',
    avatarBg: '#107c41',
    subject: 'Atlas Platform — Sprint 24 Status Update',
    preview: "Sprint 24 wrapped up yesterday. Here's a summary of what the team delivered and what's moving into Sprint 25.",
    time: 'Yesterday',
    date: 'Sun 6/7/2026 4:15 PM',
    to: 'Engineering All',
    body: `
      <p>Hi all,</p>
      <p>Sprint 24 closed out yesterday. Here's the summary of what shipped and what's rolling into Sprint 25.</p>
      <h3>Completed This Sprint</h3>
      <ul>
        <li>✅ User authentication migrated to OAuth 2.0 — deployed to staging</li>
        <li>✅ Bulk CSV/XLSX export for the analytics dashboard</li>
        <li>✅ Search indexer performance improvements — avg query time down <strong>38%</strong></li>
        <li>✅ Critical bug fix in invoice PDF generation <em>(issue #1847)</em></li>
        <li>✅ API rate limiting updated to 500 req/min per token</li>
      </ul>
      <h3>Rolled Over to Sprint 25</h3>
      <ul>
        <li>🔄 Mobile notification redesign — 60% complete, blocked on design approval</li>
        <li>🔄 Webhook retry logic — scoping in progress</li>
      </ul>
      <h3>Sprint 24 Metrics</h3>
      <table>
        <thead><tr><th>Metric</th><th>Target</th><th>Actual</th></tr></thead>
        <tbody>
          <tr><td>Story Points</td><td>62</td><td>58</td></tr>
          <tr><td>Bug Fix Rate</td><td>90%</td><td>94%</td></tr>
          <tr><td>Deployment Success</td><td>100%</td><td>100%</td></tr>
        </tbody>
      </table>
      <p>Sprint 25 planning is scheduled for <strong>Tuesday at 10:00 AM</strong>. Please have your tickets estimated by Monday EOD.</p>
      <p class="sig">
        Marcus Chen<br/>
        Engineering Lead, Atlas Platform · Meridian Group
      </p>
    `,
  },
  {
    id: 3,
    unread: false,
    from: 'Billing',
    fromEmail: 'billing@meridiangroup.com',
    initials: 'BI',
    avatarBg: '#881798',
    subject: 'Invoice #INV-2026-0847 Awaiting Your Approval',
    preview: 'A new invoice has been submitted and requires your review before the payment deadline. Invoice total: $14,750.00.',
    time: 'Mon',
    date: 'Mon 6/2/2026 11:23 AM',
    to: 'Finance Approvers',
    body: `
      <p>Hello,</p>
      <p>An invoice has been submitted through the billing system and requires your approval before the payment deadline.</p>
      <div class="callout">
        <strong>Invoice #INV-2026-0847</strong><br/>
        Vendor: CloudStack Solutions Ltd.<br/>
        Amount: <strong>$14,750.00 USD</strong><br/>
        Due Date: June 20, 2026<br/>
        Category: Infrastructure / Cloud Services
      </div>
      <h3>Line Items</h3>
      <table>
        <thead><tr><th>Description</th><th>Qty</th><th>Unit Price</th><th>Total</th></tr></thead>
        <tbody>
          <tr><td>Managed Kubernetes Cluster (Q2)</td><td>1</td><td>$9,500.00</td><td>$9,500.00</td></tr>
          <tr><td>Object Storage — 5 TB</td><td>5</td><td>$320.00</td><td>$1,600.00</td></tr>
          <tr><td>CDN Bandwidth Overage</td><td>1</td><td>$650.00</td><td>$650.00</td></tr>
          <tr><td>Enterprise Support Plan</td><td>1</td><td>$3,000.00</td><td>$3,000.00</td></tr>
          <tr><td colspan="3"><strong>Total</strong></td><td><strong>$14,750.00</strong></td></tr>
        </tbody>
      </table>
      <p>Please log in to the <strong>Finance Portal</strong> to approve or flag this invoice. Approvals submitted after <strong>June 18</strong> may incur a late payment fee per vendor contract terms.</p>
      <p>Reply to this email or contact the billing team if you have any questions.</p>
      <p class="sig">
        Meridian Group · Billing &amp; Finance<br/>
        billing@meridiangroup.com · Ext. 4400
      </p>
    `,
  },
  {
    id: 4,
    unread: false,
    from: 'HR Team',
    fromEmail: 'hr@meridiangroup.com',
    initials: 'HR',
    avatarBg: '#0078d4',
    subject: 'Welcome to Meridian Group — Your First Day Overview',
    preview: "We're thrilled to welcome you to Meridian Group! Here's everything you need to know before your first day on Monday, June 9.",
    time: 'Jun 5',
    date: 'Fri 6/5/2026 8:00 AM',
    to: 'New Joiners',
    body: `
      <p>Dear Team Member,</p>
      <p>We're absolutely thrilled to welcome you to <strong>Meridian Group</strong>! Your first day is on <strong>Monday, June 9</strong>, and we want to make sure you're set up for a smooth start.</p>
      <h3>Before Your First Day</h3>
      <ul>
        <li>Complete digital onboarding forms in the HR portal (link sent separately)</li>
        <li>Set up your company email and enable two-factor authentication</li>
        <li>Review the Employee Handbook (attached)</li>
        <li>Download <strong>Microsoft Teams</strong> and <strong>Slack</strong> on your devices</li>
      </ul>
      <h3>Your First Day Schedule</h3>
      <table>
        <thead><tr><th>Time</th><th>Activity</th><th>Location</th></tr></thead>
        <tbody>
          <tr><td>9:00 AM</td><td>Welcome &amp; badge pickup</td><td>Main reception</td></tr>
          <tr><td>9:30 AM</td><td>HR orientation</td><td>Room 2A</td></tr>
          <tr><td>11:00 AM</td><td>IT setup &amp; equipment handover</td><td>IT Desk, Floor 3</td></tr>
          <tr><td>12:30 PM</td><td>Team lunch</td><td>Cafeteria</td></tr>
          <tr><td>2:00 PM</td><td>Meet your manager &amp; team intro</td><td>Your team floor</td></tr>
        </tbody>
      </table>
      <p>Your onboarding buddy for the first two weeks is <strong>David Park</strong> — reach out to him at <em>david.park@meridiangroup.com</em> with any questions before Monday.</p>
      <p>We're excited to have you with us. See you Monday!</p>
      <p class="sig">
        The HR Team · Meridian Group<br/>
        hr@meridiangroup.com · +1 (415) 555-0100
      </p>
    `,
  },
  {
    id: 5,
    unread: true,
    from: 'IT Helpdesk',
    fromEmail: 'helpdesk@meridiangroup.com',
    initials: 'IT',
    avatarBg: '#c43e1c',
    subject: '[Ticket #84721] VPN Access Request — Confirmed',
    preview: 'Your VPN access request has been received and assigned to the network security team. Estimated resolution: within 24 business hours.',
    time: 'Jun 4',
    date: 'Thu 6/4/2026 2:57 PM',
    to: 'me',
    body: `
      <p>Hello,</p>
      <p>This email confirms we have received your VPN access request. Your ticket has been logged and assigned to the network security team.</p>
      <div class="callout">
        <strong>Ticket #84721 — VPN Access Request</strong><br/>
        Status: <strong>In Progress</strong><br/>
        Priority: Normal<br/>
        Submitted: June 4, 2026 at 2:50 PM<br/>
        Estimated Resolution: Within 24 business hours
      </div>
      <h3>What Happens Next</h3>
      <ol>
        <li>The network team will review your access scope and requirements</li>
        <li>Your manager will receive an approval request by email</li>
        <li>Once approved, you'll receive VPN credentials and setup instructions</li>
        <li>A follow-up call may be scheduled if additional verification is needed</li>
      </ol>
      <h3>Need Urgent Access?</h3>
      <p>If you need remote access before this ticket resolves, contact your line manager or call the IT emergency line at <strong>Ext. 9000</strong>.</p>
      <p>You can track this ticket at any time via the <strong>IT Self-Service Portal</strong>. Please do not reply directly to this email — use the portal or call us for updates.</p>
      <p class="sig">
        IT Helpdesk · Meridian Group<br/>
        helpdesk@meridiangroup.com · Ext. 9000<br/>
        Hours: Mon–Fri, 8:00 AM – 6:00 PM
      </p>
    `,
  },
]
