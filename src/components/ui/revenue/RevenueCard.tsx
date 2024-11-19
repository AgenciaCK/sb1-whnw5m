import { Card } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';
import { TrendingUp } from 'lucide-react';

export function RevenueCard() {
  const revenue = 256489;
  const expenses = 98756;
  const growth = 28.4;

  return (
    <Card className="p-6 glass-effect gradient-card">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-white">Rendimento</h3>
          <div className="flex items-center space-x-1 text-green-400">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">+{growth}%</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-white/70">Receita Total</p>
            <p className="text-2xl font-bold text-white">{formatCurrency(revenue)}</p>
          </div>
          
          <div>
            <p className="text-sm text-white/70">Despesas</p>
            <p className="text-xl font-semibold text-white/90">{formatCurrency(expenses)}</p>
          </div>
        </div>

        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#FF423D] via-[#FFD600] to-[#00FFE0]"
            style={{ width: `${(revenue - expenses) / revenue * 100}%` }}
          />
        </div>
      </div>
    </Card>
  );
}