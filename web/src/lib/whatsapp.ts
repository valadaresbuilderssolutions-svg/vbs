/** Verified VBS WhatsApp number (same as House Extensions page), in wa.me format. */
export const WHATSAPP_NUMBER = '447748323194'

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hello Valadares Builders Solutions, I visited your website and would like to enquire about a building project. Could you please assist me?'

export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
