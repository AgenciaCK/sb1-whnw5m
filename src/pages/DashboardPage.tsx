import { MainLayout } from '@/components/layout/MainLayout';
import { StatsCard } from '@/components/ui/stats/StatsCard';
import { PremiumCard } from '@/components/ui/premium/PremiumCard';
import { RevenueCard } from '@/components/ui/revenue/RevenueCard';
import {
  Users,
  FolderGit2,
  CheckSquare,
  TrendingUp,
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* Métricas */}
        <div className="lg:col-span-3">
          <StatsCard
            title="Leads"
            value="158"
            status="Bom"
            icon={<Users className="h-5 w-5 text-white" />}
            trend={12}
          />
        </div>
        <div className="lg:col-span-3">
          <StatsCard
            title="Projetos Ativos"
            value="21"
            status="Excelente"
            icon={<FolderGit2 className="h-5 w-5 text-white" />}
            status="excellent"
          />
        </div>
        <div className="lg:col-span-3">
          <StatsCard
            title="Tarefas"
            value="42"
            status="Pendentes"
            icon={<CheckSquare className="h-5 w-5 text-white" />}
            status="warning"
          />
        </div>
        <div className="lg:col-span-3">
          <StatsCard
            title="Performance"
            value="89%"
            status="Ótimo"
            icon={<TrendingUp className="h-5 w-5 text-white" />}
            trend={5}
          />
        </div>

        {/* Card Premium */}
        <div className="lg:col-span-8">
          <PremiumCard />
        </div>

        {/* Card de Rendimento */}
        <div className="lg:col-span-4">
          <RevenueCard />
        </div>
      </div>
    </MainLayout>
  );
}