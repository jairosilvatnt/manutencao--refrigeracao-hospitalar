import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Check, FileText, Settings, Shield } from 'lucide-react'

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Excelência Técnica e Normativa
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Nossos protocolos são desenhados para garantir total conformidade com
          a RDC 197/2002 da ANVISA e as melhores práticas internacionais de
          engenharia clínica.
        </p>
      </div>

      {/* Main Services Detail */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              Manutenção Preventiva (PM)
            </h2>
            <p className="text-slate-600 mb-4">
              A manutenção preventiva é a chave para a confiabilidade.
              Realizamos inspeções periódicas baseadas nas recomendações dos
              fabricantes e no histórico de desempenho do equipamento.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                'Limpeza de condensadores',
                'Verificação de fluidos refrigerantes',
                'Testes de vedação',
                'Análise elétrica',
                'Calibração de alarmes',
                'Lubrificação de compressores',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <Check className="h-4 w-4 text-emerald-500" /> {item}
                </li>
              ))}
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Settings className="h-6 w-6 text-primary" />
              Manutenção Corretiva & Emergencial
            </h2>
            <p className="text-slate-600 mb-4">
              Quando falhas ocorrem, o tempo é crítico. Nossa equipe móvel está
              equipada com as peças de reposição mais comuns para realizar
              reparos *in loco* na primeira visita sempre que possível.
            </p>
            <p className="text-slate-600 text-sm italic border-l-4 border-sky-500 pl-4 py-2 bg-slate-50">
              Prioridade absoluta para equipamentos contendo material biológico
              ou vacinas. Tempo de resposta contratual de até 2 horas.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Certificação e Validação
            </h2>
            <p className="text-slate-600">
              Emitimos laudos técnicos detalhados e certificados de calibração
              rastreáveis à Rede Brasileira de Calibração (RBC), essenciais para
              auditorias hospitalares e acreditações (ONA, JCI).
            </p>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <Card className="bg-sky-50 border-sky-100">
            <CardHeader>
              <CardTitle className="text-sky-900">Normas Atendidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <strong className="block text-sky-800">ANVISA RDC 197</strong>
                <span className="text-sm text-sky-700">
                  Requisitos para funcionamento dos serviços de saúde.
                </span>
              </div>
              <div>
                <strong className="block text-sky-800">ABNT NBR 14724</strong>
                <span className="text-sm text-sky-700">
                  Padrões para equipamentos de refrigeração.
                </span>
              </div>
              <div>
                <strong className="block text-sky-800">RDC 50</strong>
                <span className="text-sm text-sky-700">
                  Projetos físicos de estabelecimentos assistenciais de saúde.
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0">
              <img
                src="https://img.usecurling.com/p/400/500?q=medical%20clipboard&color=blue"
                alt="Documentation"
                className="w-full h-auto rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Process Timeline */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nosso Processo de Atendimento
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-primary">
              1. Solicitação e Triagem Inicial
            </AccordionTrigger>
            <AccordionContent className="text-slate-600">
              Ao recebermos o chamado, nossa central técnica classifica a
              urgência baseada no tipo de equipamento e risco ao material
              armazenado. Instruções de contingência (ex: transferência de
              carga) podem ser passadas imediatamente por telefone.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-primary">
              2. Diagnóstico Técnico
            </AccordionTrigger>
            <AccordionContent className="text-slate-600">
              O técnico especialista visita o local, realiza testes elétricos e
              termodinâmicos para identificar a raiz do problema, não apenas o
              sintoma.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-primary">
              3. Execução e Validação
            </AccordionTrigger>
            <AccordionContent className="text-slate-600">
              Após aprovação, o reparo é executado. O equipamento não é apenas
              "ligado", mas monitorado por um período para garantir estabilidade
              térmica antes de ser liberado para uso.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-primary">
              4. Documentação
            </AccordionTrigger>
            <AccordionContent className="text-slate-600">
              Envio digital do relatório técnico, fotos do serviço, e
              certificado de calibração (se aplicável), integrando-se ao
              histórico do equipamento no sistema do hospital.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
