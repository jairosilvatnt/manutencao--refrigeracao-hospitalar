import { Link } from 'react-router-dom'
import {
  Snowflake,
  MapPin,
  Phone,
  Mail,
  Award,
  ShieldCheck,
} from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Snowflake className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">RefriHosp</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Especialistas em manutenção de cadeia de frio hospitalar.
              Garantindo a segurança de insumos críticos com precisão técnica e
              rapidez.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Award className="h-6 w-6 text-yellow-500" />
              <ShieldCheck className="h-6 w-6 text-emerald-500" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="hover:text-primary transition-colors"
                >
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/agendar"
                  className="hover:text-primary transition-colors"
                >
                  Agendar Manutenção
                </Link>
              </li>
              <li>
                <span className="cursor-not-allowed opacity-50">
                  Sobre Nós (Em breve)
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>
                  Av. Paulista, 1000 - Bela Vista
                  <br />
                  São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>(11) 3000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>contato@refrihosp.com.br</span>
              </li>
            </ul>
          </div>

          {/* Legal / Certifications */}
          <div>
            <h3 className="text-white font-semibold mb-4">Conformidade</h3>
            <p className="text-xs text-slate-500 mb-4">
              Seguimos rigorosamente as normas da ANVISA (RDC 197/2002) e
              padrões ABNT para refrigeração clínica.
            </p>
            <div className="text-xs text-slate-600">
              &copy; {new Date().getFullYear()} RefriHosp.
              <br />
              Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
