import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const WhatsAppFAB = () => {
  const handleClick = () => {
    // In a real app, this would be the actual WhatsApp number
    window.open('https://wa.me/5511999999999', '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleClick}
        size="icon"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg transition-transform hover:scale-110 animate-fade-in-up"
        aria-label="Atendimento via WhatsApp"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </Button>
    </div>
  )
}
