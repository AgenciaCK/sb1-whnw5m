import { useUser } from '@/hooks/use-user';
import { getGreeting } from '@/lib/utils';
import { Bell, Search } from 'lucide-react';

export function Header() {
  const { user } = useUser();

  return (
    <header className="h-16 flex items-center justify-between px-6 glass-effect">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold text-white">
          {getGreeting()}, {user?.name}!
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-64 px-4 py-2 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF423D]/50"
          />
          <Search className="h-5 w-5 text-white/50 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>

        <button className="p-2 rounded-lg hover:bg-white/10 transition-colors relative">
          <Bell className="h-5 w-5 text-white" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF423D] rounded-full" />
        </button>

        <button className="w-8 h-8 rounded-full bg-[#FF423D] text-white flex items-center justify-center">
          {user?.name?.[0].toUpperCase()}
        </button>
      </div>
    </header>
  );
}