import { useState, useMemo } from 'react'
import { initialEmails } from './data'
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

  const selectedEmail = emails.find(e => e.id === selectedId) ?? null
  const unreadCount = emails.filter(e => e.unread).length

  const visibleEmails = useMemo(() => {
    let list = emails
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter(e =>
        e.from.toLowerCase().includes(q) ||
        e.subject.toLowerCase().includes(q) ||
        e.preview.toLowerCase().includes(q)
      )
    }
    return list
  }, [emails, searchQuery])

  function handleSelect(id) {
    setSelectedId(id)
    setEmails(prev => prev.map(e => e.id === id ? { ...e, unread: false } : e))
    setMobilePane('reading')
    setPluginOpen(true)
  }

  function handleDelete(id) {
    setEmails(prev => prev.filter(e => e.id !== id))
    if (selectedId === id) {
      setSelectedId(null)
      setMobilePane('list')
      setPluginOpen(false)
    }
  }

  function handleFlag(id) {
    setEmails(prev => prev.map(e => e.id === id ? { ...e, flagged: !e.flagged } : e))
  }

  function handleToggleRead(id) {
    setEmails(prev => prev.map(e => e.id === id ? { ...e, unread: !e.unread } : e))
  }

  function handleBack() {
    setMobilePane('list')
  }

  return (
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
          onBack={handleBack}
          onDelete={handleDelete}
          onFlag={handleFlag}
          onToggleRead={handleToggleRead}
          hidden={mobilePane === 'list'}
        />
        <PluginPanel open={pluginOpen} onClose={() => setPluginOpen(false)} />
      </div>
    </div>
  )
}
