import { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Plus, FileText, Clock, BarChart2, 
  Briefcase, Users, Calendar,
  MessageCircle, Bell, Settings, ChevronLeft 
} from 'lucide-react';

const menuItems = [
  { icon: Plus, label: 'Novo Projeto' },
  { icon: Briefcase, label: 'Projetos' },
  { icon: Users, label: 'Leads' },
  { icon: Calendar, label: 'Agenda' },
  { icon: Clock, label: 'Timeline' },
  { icon: BarChart2, label: 'Analytics' },
  { icon: FileText, label: 'Documentos' },
];

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className={cn(
        'h-screen fixed left-0 top-0 z-40 flex flex-col glass-effect transition-all duration-300',
        expanded ? 'w-64' : 'w-16'
      )}
    >
      <div className="flex items-center justify-between p-4">
        <h2 className={cn('text-2xl font-bold text-white', !expanded && 'hidden')}>
          <span className="text-[#FF423D]">ck</span>
        </h2>
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className={cn(
            'h-5 w-5 text-white transition-transform',
            !expanded && 'rotate-180'
          )} />
        </button>
      </div>

      <nav className="flex-1 px-2 py-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                className={cn(
                  'w-full flex items-center px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors',
                  'focus:outline-none focus:ring-2 focus:ring-white/20'
                )}
              >
                <item.icon className="h-5 w-5" />
                {expanded && <span className="ml-3">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}