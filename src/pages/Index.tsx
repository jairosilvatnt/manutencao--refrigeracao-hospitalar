import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  ArrowRight,
  ThermometerSnowflake,
  Wrench,
  Activity,
  ClipboardCheck,
  Clock,
  CheckCircle2,
  PhoneCall,
  Award,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.usecurling.com/p/1920/1080?q=medical%20laboratory%20freezer&color=blue"
            alt="Hospital Laboratory Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 py-20 flex flex-col justify-center h-full">
          <div className="max-w-3xl space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Plantão Técnico 24 horas
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight text-shadow-lg">
              Manutenção Especializada em{' '}
              <span className="text-primary-foreground text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-200">
                Refrigeração Hospitalar
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
              Protegendo o que é essencial. Garantimos a integridade de vacinas,
              bancos de sangue e amostras biológicas com manutenção preventiva e
              corretiva de alta precisão.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="h-14 px-8 text-base shadow-lg shadow-black/10 font-semibold transition-all hover:-translate-y-0.5"
                asChild
              >
                <Link to="/agendar">
                  Solicitar Orçamento
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base border-white/40 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm transition-all"
                asChild
              >
                <Link to="/servicos">Ver Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Experiência', value: '+10 Anos', icon: AwardIcon },
              { label: 'Atendimento', value: '24/7', icon: Clock },
              { label: 'Equipe', value: 'Certificada', icon: CheckCircle2 },
              { label: 'Resposta', value: '~2 Horas', icon: Activity },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-4 justify-center md:justify-start"
              >
                <div className="p-3 rounded-full bg-sky-50">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Oferecemos um ciclo completo de cuidados para seus equipamentos,
              desde a prevenção até a certificação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={ThermometerSnowflake}
              title="Manutenção Preventiva"
              description="Inspeções programadas para evitar falhas e prolongar a vida útil dos equipamentos."
            />
            <ServiceCard
              icon={Wrench}
              title="Manutenção Corretiva"
              description="Reparos emergenciais com peças originais e restabelecimento rápido da operação."
            />
            <ServiceCard
              icon={Activity}
              title="Calibração de Sensores"
              description="Ajuste preciso de controladores e sensores com padrões rastreáveis RBC."
            />
            <ServiceCard
              icon={ClipboardCheck}
              title="Mapeamento Térmico"
              description="Validação de uniformidade de temperatura conforme normas da ANVISA."
            />
          </div>
        </div>
      </section>

      {/* Specialized Equipment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Equipamentos Especializados
              </h2>
              <p className="text-slate-600">
                Dominamos a tecnologia das principais marcas do mercado.
              </p>
            </div>
            <Button
              variant="ghost"
              className="text-primary font-semibold hover:bg-primary/10 hover:text-primary transition-colors"
              asChild
            >
              <Link to="/servicos">
                Ver todos os equipamentos
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Ultra-Freezers -86°C',
                query: 'laboratory ultra freezer',
              },
              { name: 'Câmaras de Vacina', query: 'vaccine refrigerator' },
              { name: 'Bancos de Sangue', query: 'blood bank fridge' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={`https://img.usecurling.com/p/400/300?q=${encodeURIComponent(item.query)}`}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-white font-semibold text-lg">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            A Escolha de Grandes Instituições
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="A resposta rápida da RefriHosp salvou nosso banco de amostras durante uma falha crítica no fim de semana."
              author="Dr. Roberto Silva"
              role="Diretor Clínico, Hospital Santa Vida"
            />
            <TestimonialCard
              quote="Técnicos extremamente capacitados e relatórios de calibração que atendem perfeitamente às auditorias."
              author="Mariana Santos"
              role="Gerente de Laboratório, LabMed"
            />
            <TestimonialCard
              quote="A manutenção preventiva reduziu nossas paradas não programadas em 90%. Parceiros essenciais."
              author="Eng. Carlos Ferreira"
              role="Engenharia Clínica, Hospital Central"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-sky-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Precisa de assistência técnica agora?
          </h2>
          <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
            Nossa equipe de plantão está pronta para atender sua solicitação.
            Não arrisque seus insumos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="font-bold text-sky-900 hover:text-sky-950 hover:bg-white shadow-lg transition-all"
              asChild
            >
              <Link to="/agendar">Abrir Chamado Técnico</Link>
            </Button>
            <Button
              size="lg"
              variant="destructive"
              className="animate-pulse-red font-bold shadow-lg transition-all"
            >
              <PhoneCall />
              Ligar para Emergência
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any
  title: string
  description: string
}) {
  return (
    <Card className="hover:shadow-elevation transition-shadow duration-300 border-slate-100 group">
      <CardContent className="p-6">
        <div className="h-12 w-12 rounded-lg bg-sky-50 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        <Link
          to="/servicos"
          className="inline-flex items-center text-primary text-sm font-medium mt-4 hover:underline"
        >
          Saiba Mais{' '}
          <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string
  author: string
  role: string
}) {
  return (
    <div className="bg-slate-800 p-8 rounded-2xl relative">
      <div className="text-4xl text-sky-500 absolute top-4 left-6 opacity-30">
        "
      </div>
      <p className="text-slate-300 mb-6 italic relative z-10 leading-relaxed">
        {quote}
      </p>
      <div>
        <p className="text-white font-bold">{author}</p>
        <p className="text-sky-400 text-sm">{role}</p>
      </div>
    </div>
  )
}

function AwardIcon(props: any) {
  return <Award className={props.className} />
}
