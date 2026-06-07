import { useState, useMemo, useEffect } from 'react'
import { initialEmails, scamEmail } from './data'
import TopBar from './components/TopBar'
import Sidebar from './components/Sidebar'
import EmailList from './components/EmailList'
import ReadingPane from './components/ReadingPane'
import PluginPanel from './components/PluginPanel'
import './App.css'

export default function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [selectedId, setSelectedId] = useState(null)
  const [mobilePane, setMobilePane] = useState('list')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('focused')
  const [pluginOpen, setPluginOpen] = useState(false)
  const [highlightMode, setHighlightMode] = useState(null) // null | 'scam' | 'clean'

  // Inject scam email after 1 second
  useEffect(() => {
    const t = setTimeout(() => setEmails(prev => [scamEmail, ...prev]), 1000)
    return () => clearTimeout(t)
  }, [])

  const selectedEmail = emails.find(e => e.id === selectedId) ?? null
  const unreadCount = emails.filter(e => e.unread).length

  const visibleEmails = useMemo(() => {
    if (!searchQuery.trim()) return emails
    const q = searchQuery.toLowerCase()
    return emails.filter(e =>
      e.from.toLowerCase().includes(q) ||
      e.subject.toLowerCase().includes(q) ||
      e.preview.toLowerCase().includes(q)
    )
  }, [emails, searchQuery])

  function handleSelect(id) {
    setSelectedId(id)
    setHighlightMode(null)
    setEmails(prev => prev.map(e =>
      e.id === id ? { ...e, unread: false, isNew: false } : e
    ))
    setMobilePane('reading')
    setPluginOpen(true)
  }

  function handleDelete(id) {
    setEmails(prev => prev.filter(e => e.id !== id))
    if (selectedId === id) {
      setSelectedId(null)
      setMobilePane('list')
      setPluginOpen(false)
      setHighlightMode(null)
    }
  }

  function handleFlag(id) {
    setEmails(prev => prev.map(e => e.id === id ? { ...e, flagged: !e.flagged } : e))
  }

  function handleToggleRead(id) {
    setEmails(prev => prev.map(e => e.id === id ? { ...e, unread: !e.unread } : e))
  }

  return (
    <div className="website">
      {/* Outer website nav */}
      <nav className="website-nav">
        <div className="website-brand">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect width="22" height="22" rx="5" fill="#0078d4"/>
            <path d="M6 11a5 5 0 1 0 10 0 5 5 0 0 0-10 0z" fill="white" fillOpacity=".9"/>
            <path d="M11 7v4l3 2" stroke="#0078d4" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="website-brand-name">Meridiāns Group</span>
        </div>
        <div className="website-nav-links">
          <span className="website-nav-link active">Pasts</span>
          <span className="website-nav-link">Kalendārs</span>
          <span className="website-nav-link">Projekti</span>
          <span className="website-nav-link">Dokumenti</span>
        </div>
        <div className="website-nav-user">
          <div className="website-nav-avatar">AN</div>
        </div>
      </nav>

      {/* Content area — email app embedded at 72% width */}
      <div className="website-body">
        <div className="app-embed">
          <div className="app">
            <TopBar
              sidebarOpen={sidebarOpen}
              onToggleSidebar={() => setSidebarOpen(o => !o)}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
            <div className="workspace">
              <Sidebar open={sidebarOpen} unreadCount={unreadCount} />
              <EmailList
                emails={visibleEmails}
                selectedId={selectedId}
                onSelect={handleSelect}
                onFlag={handleFlag}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                searchQuery={searchQuery}
                hidden={mobilePane === 'reading'}
              />
              <ReadingPane
                email={selectedEmail}
                onBack={() => setMobilePane('list')}
                onDelete={handleDelete}
                onFlag={handleFlag}
                onToggleRead={handleToggleRead}
                hidden={mobilePane === 'list'}
                highlightMode={highlightMode}
              />
              <PluginPanel
                email={selectedEmail}
                open={pluginOpen}
                onClose={() => setPluginOpen(false)}
                onAnalysisDone={verdict => setHighlightMode(verdict)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
