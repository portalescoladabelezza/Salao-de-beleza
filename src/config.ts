/**
 * CONFIGURAÇÃO DO SITE BELLA STUDIO BEAUTY
 * Todas as variáveis importantes do salão organizadas para fácil edição.
 */

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  tag: string;
  imageUrl: string;
}

export interface PackageItem {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

export interface GalleryItem {
  title: string;
  category: string;
  imageUrl: string;
}

export interface BusinessHour {
  day: string;
  hours: string;
}

export const salonConfig = {
  // Informações Gerais
  salonName: "Bella Studio Beauty",
  tagline: "Cabelo • Unhas • Beleza",
  whatsappNumber: "5521969060505",
  instagramUser: "bellastudiobeauty",
  facebookUser: "bellastudiobeauty.oficial",
  
  // Localização
  address: "Rua Exemplo, 123 — Centro",
  city: "Nova Iguaçu — RJ",
  googleMapsLink: "https://maps.google.com/?q=Rua+Exemplo,+123+Centro+Nova+Iguaçu+RJ",

  // Funcionamento
  businessHours: [
    { day: "Terça a Sexta", hours: "9h às 19h" },
    { day: "Sábado", hours: "8h às 18h" },
    { day: "Domingo e Segunda", hours: "Fechado" }
  ] as BusinessHour[],

  // Serviços Oferecidos
  services: [
    {
      id: "escova-modelada",
      name: "Escova Modelada",
      description: "Finalização com movimento, brilho e acabamento profissional.",
      price: "A partir de R$ 45,00",
      tag: "Mais pedido",
      imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "corte-feminino",
      name: "Corte Feminino",
      description: "Corte moderno, alinhado ao seu estilo e formato de rosto.",
      price: "A partir de R$ 60,00",
      tag: "Destaque",
      imageUrl: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "hidratacao-capilar",
      name: "Hidratação Capilar",
      description: "Tratamento para devolver brilho, maciez e vida aos fios.",
      price: "A partir de R$ 70,00",
      tag: "Cuidado",
      imageUrl: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "manicure",
      name: "Manicure",
      description: "Cuidado completo para as unhas das mãos.",
      price: "A partir de R$ 30,00",
      tag: "Popular",
      imageUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pedicure",
      name: "Pedicure",
      description: "Cuidado especial para os pés com acabamento delicado.",
      price: "A partir de R$ 35,00",
      tag: "Popular",
      imageUrl: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "design-sobrancelhas",
      name: "Design de Sobrancelhas",
      description: "Alinhamento das sobrancelhas para valorizar o olhar.",
      price: "A partir de R$ 35,00",
      tag: "Mais pedido",
      imageUrl: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "maquiagem-social",
      name: "Maquiagem Social",
      description: "Produção elegante para eventos, festas e ocasiões especiais.",
      price: "A partir de R$ 120,00",
      tag: "Premium",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "coloracao",
      name: "Coloração",
      description: "Transformação de cor com cuidado e acabamento profissional.",
      price: "Consulte",
      tag: "Consulte",
      imageUrl: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=600&q=80"
    }
  ] as ServiceItem[],

  // Pacotes Especiais
  packages: [
    {
      id: "pacote-essencial",
      name: "Pacote Essencial",
      description: "Escova + manicure",
      price: "R$ 70,00",
      imageUrl: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pacote-beleza-completa",
      name: "Pacote Beleza Completa",
      description: "Escova + manicure + sobrancelha",
      price: "R$ 105,00",
      imageUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pacote-evento",
      name: "Pacote Evento",
      description: "Maquiagem social + escova modelada",
      price: "R$ 180,00",
      imageUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80"
    }
  ] as PackageItem[],

  // Elementos do Layout
  hero: {
    title: "Realce sua beleza com cuidado, estilo e autoestima.",
    subtitle: "Agende seu horário para cabelo, unhas, sobrancelhas, maquiagem e cuidados especiais em um ambiente acolhedor e profissional.",
    primaryImg: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
  },

  // Galeria de Fotos Realistas
  gallery: [
    {
      title: "Loiro Perfeito",
      category: "Cabelo",
      imageUrl: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Maquiagem Elegante",
      category: "Maquiagem",
      imageUrl: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Manicure Curada",
      category: "Unhas",
      imageUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Escova com Balanço",
      category: "Escova",
      imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Lavagem & Tratamento",
      category: "Hidratação",
      imageUrl: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Ambiente do Salão",
      category: "Espaço",
      imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80"
    }
  ] as GalleryItem[],

  // Como Agendar Passos
  bookingSteps: [
    {
      step: "01",
      title: "Escolha o serviço",
      text: "Veja as opções de cabelo, unhas, sobrancelhas, maquiagem e pacotes."
    },
    {
      step: "02",
      title: "Clique no WhatsApp",
      text: "Envie sua mensagem direto para o salão."
    },
    {
      step: "03",
      title: "Combine o horário",
      text: "Consulte os horários disponíveis e escolha o melhor momento."
    },
    {
      step: "04",
      title: "Venha se cuidar",
      text: "Chegue no horário combinado e aproveite seu momento de beleza."
    }
  ],

  // Sobre o Salão
  about: {
    title: "Sobre o Bella Studio Beauty",
    description: "O Bella Studio Beauty é um espaço criado para valorizar a beleza, autoestima e bem-estar de cada cliente. Trabalhamos com serviços de cabelo, unhas, sobrancelhas, maquiagem e cuidados especiais em um ambiente acolhedor, moderno e profissional.",
    differentials: [
      "Atendimento acolhedor",
      "Profissionais cuidadosas",
      "Ambiente moderno",
      "Serviços para cabelo, unhas e beleza",
      "Agendamento pelo WhatsApp",
      "Localização fácil"
    ]
  },

  // Chamada de Ação Final
  cta: {
    title: "Seu momento de beleza começa aqui.",
    text: "Fale agora pelo WhatsApp e agende seu horário no Bella Studio Beauty.",
    buttonText: "Agendar pelo WhatsApp",
    defaultMessage: "Olá! Vi o site do Bella Studio Beauty e gostaria de agendar um horário."
  },

  // Detalhes Estéticos e Cores Informativas (Empregados diretamente na estilização robusta)
  colors: {
    primaryPink: "#B2706B", // Rosa Queimado (Natural Tones)
    nude: "#FDF8F5",        // Nude (Natural Tones)
    cream: "#E6D5C7",       // Creme/Bege Claro (Natural Tones)
    gold: "#C5A059",        // Dourado Suave (Natural Tones)
    dark: "#1A1A1A"         // Preto Charcoal (Natural Tones)
  }
};

/**
 * Função utilitária para gerar link de redirecionamento automático para o WhatsApp
 */
export function getWhatsappLink(message: string): string {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${salonConfig.whatsappNumber}?text=${encodedText}`;
}
