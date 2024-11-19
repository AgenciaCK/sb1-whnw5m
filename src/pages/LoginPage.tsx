import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff } from 'lucide-react';
import { useUser } from '@/hooks/use-user';

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  remember: z.boolean().optional(),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUser();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    if (data.email === 'daniel@ckcompany.com.br' && data.password === '@Daniel01') {
      setUser({
        id: '1',
        name: 'Daniel',
        email: data.email,
      });
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
         style={{ backgroundImage: 'url(https://cdn.midjourney.com/1528ada9-e63c-413c-a404-564ebc467d17/0_0.png)' }}>
      <div className="w-full max-w-md p-8 space-y-6 backdrop-blur-xl bg-black/30 rounded-2xl border border-white/10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            <span className="text-[#FF423D]">ck</span> company
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register('email')}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF423D]/50"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-[#FF423D]">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <input
              {...register('password')}
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF423D]/50"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (
              <p className="mt-1 text-sm text-[#FF423D]">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-sm text-white/70">
              <input
                {...register('remember')}
                type="checkbox"
                className="rounded border-white/20 bg-white/10 text-[#FF423D]"
              />
              <span>Lembrar</span>
            </label>
            <a href="#" className="text-sm text-white/70 hover:text-white">
              Esqueceu a senha?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#FF423D] text-white rounded-lg hover:bg-[#FF423D]/90 transition-colors"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-sm text-white/70">
          Não tem uma conta?{' '}
          <a href="#" className="text-[#FF423D] hover:underline">
            Registre-se
          </a>
        </p>
      </div>
    </div>
  );
}