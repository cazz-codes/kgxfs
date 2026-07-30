import { motion } from 'motion/react';
import {
  Search,
  Inbox,
  Star,
  Send,
  FileEdit,
  Archive,
  Trash2,
  Sparkles,
  Reply,
  Forward,
  Archive as ArchiveIcon,
  Trash2 as TrashIcon,
  MoreHorizontal,
  Paperclip,
  CheckCircle2,
  Package,
  Terminal,
  Settings2,
  ShieldCheck,
  Download,
  Cpu,
  HardDrive,
  Network,
} from 'lucide-react';

const navItems = [
  { icon: Sparkles, label: 'Bootstrap', count: 12, active: true },
  { icon: Star, label: 'Profiles', count: 3 },
  { icon: Send, label: 'Deployed' },
  { icon: FileEdit, label: 'Drafts', count: 2 },
  { icon: Archive, label: 'Archived' },
  { icon: Trash2, label: 'Trash' },
];

const labels = [
  { name: 'Workstation', color: '#00d2ff' },
  { name: 'Personal', color: '#A4F4FD' },
  { name: 'Server', color: '#f59e0b' },
  { name: 'Dev Box', color: '#10b981' },
];

const tasks = [
  {
    name: 'Chocolatey',
    subject: 'Package manager installed',
    preview: '2.4.1 · 142 packages available in your feed...',
    time: '9:41 AM',
    unread: true,
    active: true,
  },
  {
    name: 'PowerShell',
    subject: 'Profile script executed',
    preview: 'Execution policy set · modules synced from repo...',
    time: '8:12 AM',
    unread: true,
  },
  {
    name: 'Windows Update',
    subject: 'Patches applied',
    preview: 'KB5036896 installed · reboot deferred to next session...',
    time: 'Yesterday',
  },
  {
    name: 'Git',
    subject: 'SSH keys configured',
    preview: 'ed25519 key generated · added to ssh-agent...',
    time: 'Yesterday',
  },
  {
    name: 'Docker',
    subject: 'Desktop ready for dev-box',
    preview: 'Engine running · WSL2 backend healthy at localhost...',
    time: 'Mon',
  },
  {
    name: 'VS Code',
    subject: 'Settings synced',
    preview: 'Extensions restored from your gist · 18 extensions...',
    time: 'Mon',
  },
];

export function BootstrapperMockup() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl"
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/30">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-xs text-white/50">Aimguard — Console</span>
          <div className="w-12" />
        </div>

        {/* Body */}
        <div className="grid grid-cols-12 h-[520px]">
          {/* Sidebar */}
          <div className="col-span-3 border-r border-white/10 bg-black/30 p-4 flex flex-col">
            <button className="flex items-center gap-2 rounded-lg bg-white text-black text-xs font-semibold px-3 py-2 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Bootstrap with Aimguard
            </button>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between px-2 py-1.5 rounded-md text-xs cursor-pointer ${
                    item.active
                      ? 'bg-white/10 text-white'
                      : 'text-white/60 hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <item.icon className="w-3.5 h-3.5" />
                    {item.label}
                  </span>
                  {item.count && <span className="text-white/40">{item.count}</span>}
                </div>
              ))}
            </nav>
            <div className="mt-6">
              <span className="text-[10px] uppercase tracking-wider text-white/40">Profiles</span>
              <div className="mt-2 flex flex-col gap-2">
                {labels.map((l) => (
                  <div key={l.name} className="flex items-center gap-2 text-xs text-white/60">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: l.color }}
                    />
                    {l.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Task list */}
          <div className="col-span-4 border-r border-white/10 flex flex-col">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <Search className="w-3.5 h-3.5 text-white/40" />
              <span className="text-xs text-white/40">Search tasks</span>
            </div>
            <div className="flex-1 overflow-hidden">
              {tasks.map((task) => (
                <div
                  key={task.name}
                  className={`px-4 py-3 border-b border-white/5 cursor-pointer ${
                    task.active ? 'bg-white/5' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-semibold ${
                        task.unread ? 'text-white' : 'text-white/60'
                      }`}
                    >
                      {task.name}
                    </span>
                    <span className="text-[10px] text-white/40">{task.time}</span>
                  </div>
                  <div className={`text-xs mt-0.5 ${task.unread ? 'text-white/80' : 'text-white/50'}`}>
                    {task.subject}
                  </div>
                  <div className="text-[11px] text-white/40 mt-0.5 truncate">{task.preview}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Reader / detail */}
          <div className="col-span-5 flex flex-col">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-1">
                <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center">
                  <Reply className="w-3.5 h-3.5 text-white/60" />
                </button>
                <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center">
                  <Forward className="w-3.5 h-3.5 text-white/60" />
                </button>
                <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center">
                  <ArchiveIcon className="w-3.5 h-3.5 text-white/60" />
                </button>
                <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center">
                  <TrashIcon className="w-3.5 h-3.5 text-white/60" />
                </button>
              </div>
              <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center">
                <MoreHorizontal className="w-3.5 h-3.5 text-white/60" />
              </button>
            </div>

            {/* Header */}
            <div className="px-4 py-3 border-b border-white/10">
              <div className="text-sm font-semibold text-white">Package manager installed</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] flex items-center justify-center text-xs font-bold text-white">
                  C
                </div>
                <div className="flex-1">
                  <div className="text-xs text-white/80">Chocolatey</div>
                  <div className="text-[10px] text-white/40">to me · 9:41 AM</div>
                </div>
                <span className="px-2 py-0.5 rounded-full border border-white/10 text-[10px] text-white/60">
                  Workstation
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="px-4 py-4 flex-1 overflow-hidden text-xs leading-relaxed">
              <div className="liquid-glass rounded-lg p-3 mb-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5" style={{ color: '#A4F4FD' }} />
                  <span className="text-xs font-semibold text-white">Summary by Aimguard</span>
                </div>
                <p className="text-white/60 text-[11px]">
                  Your profile installed 142 packages, applied 4 system tweaks, and configured 3 dev
                  tools. Estimated time saved: 47 minutes. No action needed.
                </p>
              </div>
              <p className="text-white/80 mb-3">Hi team,</p>
              <p className="text-white/60 mb-3">
                Here is your bootstrap log for the Workstation profile. Chocolatey 2.4.1 was
                installed and 142 packages were provisioned from your private feed in a single pass.
              </p>
              <p className="text-white/60 mb-3">
                Four system tweaks were applied, three developer tools were configured, and the
                Windows Update cycle completed with zero pending patches. The environment is ready.
              </p>
              <p className="text-white/60 mb-3">
                Let me know if you would like a deeper breakdown by package or profile.
              </p>
              <p className="text-white/50">— The Aimguard agent</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/70">
                <Paperclip className="w-3 h-3" />
                bootstrap-may-6.log
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stat strip */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Package, label: 'Packages provisioned', value: '142' },
          { icon: Cpu, label: 'System tweaks applied', value: '4' },
          { icon: HardDrive, label: 'Disk space saved', value: '2.1 GB' },
          { icon: Network, label: 'Profiles synced', value: '3' },
        ].map((stat) => (
          <div key={stat.label} className="liquid-glass rounded-xl p-4 flex items-center gap-3">
            <stat.icon className="w-5 h-5 text-[#00d2ff]" />
            <div>
              <div className="text-lg font-semibold text-white">{stat.value}</div>
              <div className="text-[11px] text-white/50">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
