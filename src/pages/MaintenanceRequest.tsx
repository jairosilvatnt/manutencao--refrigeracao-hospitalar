import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useNavigate } from 'react-router-dom'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Loader2, AlertTriangle, CheckCircle2 } from 'lucide-react'

// Schema Validation
const formSchema = z.object({
  equipmentType: z.string().min(1, 'Selecione o tipo de equipamento'),
  brandModel: z.string().min(2, 'Informe a marca e modelo'),
  serialNumber: z.string().min(1, 'Número de série é obrigatório'),
  issueDescription: z.string().min(10, 'Descreva o problema com mais detalhes'),
  urgency: z.enum(['low', 'medium', 'high', 'emergency'], {
    required_error: 'Selecione o nível de urgência',
  }),
  hospitalName: z.string().min(3, 'Nome da instituição é obrigatório'),
  sector: z.string().min(2, 'Informe o setor (ex: Banco de Sangue)'),
  contactName: z.string().min(3, 'Nome do responsável é obrigatório'),
  address: z.string().min(10, 'Endereço completo é obrigatório'),
})

export default function MaintenanceRequest() {
  const { toast } = useToast()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      equipmentType: '',
      brandModel: '',
      serialNumber: '',
      issueDescription: '',
      urgency: 'medium',
      hospitalName: '',
      sector: '',
      contactName: '',
      address: '',
    },
  })

  // Load draft from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('maintenance-draft')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        form.reset(parsed)
      } catch (e) {
        console.error('Failed to load draft', e)
      }
    }
  }, [form])

  // Save draft to localStorage on change
  useEffect(() => {
    const subscription = form.watch((value) => {
      localStorage.setItem('maintenance-draft', JSON.stringify(value))
    })
    return () => subscription.unsubscribe()
  }, [form.watch, form])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log('Form Submitted:', values)
    localStorage.removeItem('maintenance-draft')

    setIsSubmitting(false)

    toast({
      title: 'Solicitação Recebida!',
      description: `Chamado #${Math.floor(Math.random() * 10000)} criado com sucesso. Nossa equipe entrará em contato em breve.`,
      action: (
        <div className="h-8 w-8 bg-emerald-500 rounded-full flex items-center justify-center">
          <CheckCircle2 className="text-white h-5 w-5" />
        </div>
      ),
      duration: 5000,
    })

    navigate('/')
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Solicitação de Manutenção
        </h1>
        <p className="text-slate-600">
          Preencha os dados abaixo para abrir um chamado técnico.
        </p>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Urgency Selection - First for UX context */}
            <FormField
              control={form.control}
              name="urgency"
              render={({ field }) => (
                <FormItem className="space-y-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <FormLabel className="text-base font-semibold text-slate-900">
                    Nível de Urgência
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="low" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          Baixa (Preventiva Agendada)
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="medium" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          Média (Falha não crítica, equipamento vazio)
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="high" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer text-orange-600 font-semibold">
                          Alta (Risco de perda de temperatura)
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="emergency"
                            className="text-red-500 border-red-500"
                          />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer text-red-600 font-bold flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4" />
                          Emergência (Parada total com material dentro)
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-6">
              {/* Equipment Info */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-slate-800 border-b pb-2">
                  Dados do Equipamento
                </h3>

                <FormField
                  control={form.control}
                  name="equipmentType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de Equipamento</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ultra-freezer">
                            Ultra-Freezer (-86°C)
                          </SelectItem>
                          <SelectItem value="freezer">
                            Freezer Científico (-20°C)
                          </SelectItem>
                          <SelectItem value="refrigerator">
                            Refrigerador de Vacinas (2°C a 8°C)
                          </SelectItem>
                          <SelectItem value="blood-bank">
                            Câmara de Conservação de Sangue
                          </SelectItem>
                          <SelectItem value="incubator">Incubadora</SelectItem>
                          <SelectItem value="other">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="brandModel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Marca / Modelo</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex: Thermo Scientific / Forma 900"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="serialNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número de Série / Patrimônio</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: SN12345678" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Location Info */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-slate-800 border-b pb-2">
                  Localização e Contato
                </h3>

                <FormField
                  control={form.control}
                  name="hospitalName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instituição / Hospital</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome da unidade" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sector"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Setor / Departamento</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex: Laboratório Central - 3º Andar"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Responsável no Local</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Endereço Completo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Rua, Número, Bairro, Cidade - SP"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="issueDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição do Problema</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva o que está acontecendo (ex: temperatura oscilando, barulho no compressor, alarme disparado...)"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Quanto mais detalhes, mais rápido será o diagnóstico.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando Solicitação...
                  </>
                ) : (
                  'Confirmar Solicitação'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
