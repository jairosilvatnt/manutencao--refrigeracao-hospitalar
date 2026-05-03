import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const WhatsAppFAB = () => {
  const handleClick = () => {
    // In a real app, this would be the actual WhatsApp number
    window.open('https://wa.me/5511999999999', '_blank')
  }

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <Button
        onClick={handleClick}
        size="icon"
        className="h-14 w-14 rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] shadow-elevation hover:shadow-xl transition-all hover:scale-110 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 animate-fade-in-up group [&_svg]:size-7"
        aria-label="Atendimento via WhatsApp"
      >
        <MessageCircle className="text-white group-hover:scale-110 transition-transform" />
      </Button>
    </div>
  )
}
