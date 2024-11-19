import { Card } from '@/components/ui/card';
import { Crown } from 'lucide-react';

export function PremiumCard() {
  return (
    <Card className="p-6 glass-effect overflow-hidden relative">
      <div className="flex items-start justify-between">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Crown className="h-6 w-6 text-[#FFD700]" />
            <h3 className="text-xl font-bold text-white">Contratos Premium</h3>
          </div>
          <p className="text-white/70 max-w-md">
            Desbloqueie recursos exclusivos e aumente sua produtividade com nossos planos premium.
            Acesso a ferramentas avançadas de análise e suporte prioritário.
          </p>
          <button className="px-6 py-2 bg-[#FF423D] text-white rounded-lg hover:bg-[#FF423D]/90 transition-colors">
            Saiba mais
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500"
          alt="Premium Features"
          className="w-64 h-40 object-cover rounded-lg"
        />
      </div>
    </Card>
  );
}