import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string;
  status: string;
  icon: React.ReactNode;
  trend?: number;
}

export function StatsCard({ title, value, status, icon, trend }: StatsCardProps) {
  return (
    <Card className="p-6 glass-effect">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-white/10">
          {icon}
        </div>
        {trend && (
          <span className={cn(
            "text-sm font-medium",
            trend > 0 ? "text-green-400" : "text-red-400"
          )}>
            {trend > 0 ? "+" : ""}{trend}%
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-white/70">{title}</h3>
        <p className="text-2xl font-bold text-white mt-1">{value}</p>
        <p className={cn(
          "text-sm mt-2",
          status === "Excelente" && "text-green-400",
          status === "Bom" && "text-blue-400",
          status === "Pendentes" && "text-yellow-400",
          status === "Ótimo" && "text-purple-400"
        )}>
          {status}
        </p>
      </div>
    </Card>
  );
}