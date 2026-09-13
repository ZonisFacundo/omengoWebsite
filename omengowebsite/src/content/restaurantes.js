// Todo el contenido de la landing de restaurantes vive en este único
// archivo: copys, dolores, pasos, beneficios, comparativa, FAQ y el demo
// de chat del Hero. La idea es que para editar "todo sobre restaurantes"
// alcance con este archivo, sin tener que buscar entre componentes.
//
// Ver src/content/clinicas.js para la otra vertical — ambas alimentan los
// mismos componentes (src/components/*), solo cambia el contenido.
export const restaurantesContent = {
  vertical: 'restaurantes',
  navLabel: 'Restaurantes',

  hero: {
    eyebrow: 'Para restaurantes en Argentina',
    h1: 'Atendé a tus clientes por WhatsApp, las 24 horas, sin perder ni un pedido',
    paragraph:
      'Omengo es un asistente con inteligencia artificial armado a medida para tu restaurante: conversa con tus clientes como lo haría tu mejor vendedor, toma pedidos y resuelve lo que necesiten — sin sonar a bot. Cuando una conversación lo requiere, la deriva a vos o a tu equipo.',
    ctaLabel: 'Quiero mi bot para mi restaurante',
    ctaMessage: '¡Hola! Quiero saber más sobre Omengo para mi restaurante.',
    secondaryLabel: 'Ver cómo funciona',
    secondaryHref: '#como-funciona',
    note: 'Implementación a medida — cada restaurante se configura con su propio menú y sus propias reglas.',
    chat: {
      headerName: 'Tu restaurante',
      headerAvatar: '🍝',
      ariaLabel:
        'Ejemplo de conversación de un cliente con Omengo por WhatsApp: pregunta el precio de un plato, arma un pedido de delivery y Omengo lo confirma con el total',
      messages: [
        { from: 'client', text: 'Hola! Está abierto el local?' },
        {
          from: 'bot',
          text: 'Hola 👋 Sí, estamos abiertos. ¿Querés hacer un pedido para delivery o para retirar?',
        },
        { from: 'client', text: 'Delivery. Cuánto sale la pizza napolitana?' },
        { from: 'bot', text: 'La napolitana sale $8.500 🍕 ¿Te la agrego al pedido?' },
        { from: 'client', text: 'Dale, y sumale una coca de litro' },
        {
          from: 'bot',
          text: 'Perfecto: 1 pizza napolitana + 1 Coca-Cola 1L. Total $10.200. ¿Confirmamos el pedido?',
        },
      ],
    },
  },

  problem: {
    title: '¿Te suena familiar?',
    intro:
      'Atender WhatsApp a mano funciona hasta que el restaurante crece — y ahí es cuando empiezan a perderse pedidos y horas de trabajo.',
    items: [
      {
        id: 'madrugada',
        icon: 'clock',
        text: 'Clientes que escriben a la madrugada o en pleno rush y nadie llega a contestar.',
      },
      {
        id: 'repetir',
        icon: 'menu',
        text: 'Repetir el mismo menú, los mismos precios y las mismas promos, mensaje tras mensaje.',
      },
      {
        id: 'perdidos',
        icon: 'alert',
        text: 'Clientes que se pierden por demorar en contestar.',
      },
      {
        id: 'equipo',
        icon: 'team',
        text: 'Tu mozo o encargado contestando WhatsApp en vez de atender el salón.',
      },
    ],
  },

  howItWorks: {
    eyebrow: 'Cómo funciona',
    title: 'De un humano lento a una máquina inagotable',
    intro: 'No es un producto para instalar vos mismo: te acompañamos en cada paso de la integración.',
    steps: [
      {
        id: 1,
        title: 'Nos contás cómo trabaja tu restaurante',
        description:
          'Menú, precios, horarios, promociones y las reglas que ya usás para atender a tus clientes.',
      },
      {
        id: 2,
        title: 'Configuramos a Omengo a medida',
        description:
          'Cargamos tu carta y tus reglas de negocio. No es una plantilla genérica: cada restaurante tiene su propia configuración.',
      },
      {
        id: 3,
        title: 'Tus clientes escriben por WhatsApp como siempre',
        description:
          'No instalan nada nuevo. Omengo responde al instante, las 24 horas, con el tono de tu negocio.',
      },
      {
        id: 4,
        title: 'Si hace falta una persona, Omengo deriva',
        description:
          'Cuando la conversación lo requiere, Omengo pasa el chat a vos o a tu equipo para que sigan de forma humana.',
      },
    ],
    note: '¿Necesitás cambiar algo más adelante — un precio, un plato nuevo, una promo? Nos lo pedís y lo actualiza nuestro equipo de ingenieros: es parte del servicio.',
  },

  features: {
    eyebrow: 'Beneficios',
    title: 'Todo lo que Omengo hace por tu restaurante',
    intro: 'Pensado para dueños de restaurante, no para gente de sistemas.',
    items: [
      {
        id: 'disponibilidad',
        icon: 'clock',
        title: 'Disponible las 24 horas',
        description:
          'Atiende de noche, los fines de semana y en los picos de pedidos, sin turnos ni horarios.',
      },
      {
        id: 'simultaneo',
        icon: 'chat-multi',
        title: 'Atiende a todos tus clientes al mismo tiempo',
        description:
          'Nadie espera a que se libere alguien. Responde en simultáneo aunque escriban diez personas a la vez, sea o no hora pico.',
      },
      {
        id: 'humano',
        icon: 'spark',
        title: 'Habla como una persona, no como un bot',
        description:
          'Nada de listas de opciones ni respuestas armadas. Entiende lo que le piden y responde con criterio, sin inventar información. Si algo se le escapa, ahí deriva.',
      },
      {
        id: 'pedidos',
        icon: 'order',
        title: 'Arma la venta completa, no solo responde',
        description:
          'Lleva la conversación de punta a punta: entiende el pedido, lo confirma y lo cierra, como lo haría tu mejor vendedor.',
      },
      {
        id: 'costo',
        icon: 'coin',
        title: 'Una fracción de lo que cuesta un empleado',
        description:
          'Libera a la persona que hoy contesta WhatsApp para que se dedique a otras tareas. En un negocio promedio, con que alguien lo acompañe de forma parcial ya alcanza.',
      },
      {
        id: 'medida',
        icon: 'tailored',
        title: 'Configurado a medida, con un equipo detrás',
        description:
          'Se integra con el menú, el tono y las reglas de tu restaurante. Y si más adelante querés cambiar algo, nos lo pedís y lo resuelve nuestro equipo de ingenieros.',
      },
      {
        id: 'sin-apps',
        icon: 'whatsapp',
        title: 'Tus clientes no instalan nada',
        description: 'Todo pasa por el WhatsApp que ya usan todos los días, sin apps ni registros nuevos.',
      },
      {
        id: 'profesionaliza',
        icon: 'shield',
        title: 'Hace más profesional a tu negocio',
        description:
          'Respuestas rápidas, prolijas y consistentes en cada conversación — la imagen que deja tu restaurante en cada cliente que escribe.',
      },
    ],
  },

  comparison: {
    title: 'Antes y después de Omengo',
    rows: [
      {
        topic: 'Horario de atención',
        before: 'Solo mientras alguien puede contestar el WhatsApp',
        after: 'Las 24 horas, los 7 días',
      },
      {
        topic: 'Clientes atendidos a la vez',
        before: 'Uno por uno, según quién esté libre',
        after: 'Todos al mismo tiempo, sin que nadie espere',
      },
      {
        topic: 'Consultas de los clientes',
        before: 'Se responden una por una, a mano, cuando hay tiempo',
        after: 'Se resuelven al instante, como lo haría un vendedor',
      },
      {
        topic: 'Toma de pedidos',
        before: 'Depende de quién esté disponible en ese momento',
        after: 'Se arman solos, en una conversación natural',
      },
      {
        topic: 'Costo de atender WhatsApp',
        before: 'Una persona dedicada a esto, gran parte de su turno',
        after: 'Una fracción de ese costo',
      },
      {
        topic: 'Casos que necesitan una persona',
        before: 'Mezclados con todo el resto de los mensajes',
        after: 'Omengo los deriva directo a vos o tu equipo',
      },
    ],
  },

  faq: {
    title: 'Lo que suelen preguntar los dueños de restaurantes',
    items: [
      {
        id: 'instalar-app',
        question: '¿Mis clientes necesitan instalar una aplicación?',
        answer:
          'No. Tus clientes siguen escribiendo al WhatsApp de siempre, sin instalar nada nuevo ni crear cuentas.',
      },
      {
        id: 'suena-a-bot',
        question: '¿Mis clientes notan que están hablando con un bot?',
        answer:
          'No es la idea. Omengo conversa de forma natural, como lo haría una persona de tu equipo: no tira listas de opciones ni respuestas armadas, entiende lo que le piden y responde con criterio. Nunca inventa información — si en algún momento no puede resolver algo, deriva la conversación a una persona real.',
      },
      {
        id: 'reemplaza-equipo',
        question: '¿Omengo reemplaza a mi equipo?',
        answer:
          'Reemplaza gran parte de la tarea de responder WhatsApp, que es la que más tiempo consume. En un negocio promedio alcanza con que una persona se encargue de esto de forma parcial, combinado con otras tareas — Omengo se hace cargo del resto y deriva lo que necesita trato humano.',
      },
      {
        id: 'cargar-menu',
        question: '¿Cómo se carga el menú y los precios?',
        answer:
          'Se configura a medida durante la implementación: nos pasás tu carta y tus reglas de negocio, y las integramos directamente en Omengo. Si más adelante querés cambiar algo — un precio, un plato nuevo, una promoción — nos lo pedís y nuestro equipo de ingenieros lo actualiza por vos.',
      },
      {
        id: 'tiempo-implementacion',
        question: '¿Cuánto tiempo lleva implementarlo?',
        answer:
          'Depende de la complejidad del menú y las reglas de cada restaurante. Lo definimos juntos en la primera conversación por WhatsApp.',
      },
      {
        id: 'tipo-restaurante',
        question: '¿Funciona para cualquier tipo de restaurante?',
        answer:
          'Sí. Está pensado para restaurantes de cualquier tamaño en Argentina, desde locales de barrio hasta cadenas con varias sucursales.',
      },
      {
        id: 'costo',
        question: '¿Cuánto cuesta Omengo?',
        answer:
          'Cada implementación es a medida, según el tamaño y las necesidades del restaurante. Escribinos por WhatsApp y te pasamos una cotización.',
      },
    ],
  },

  finalCta: {
    title: 'Empezá a atender mejor a tus clientes, sin sumarle carga a tu equipo',
    paragraph: 'Contanos cómo trabaja tu restaurante y armamos Omengo a medida, con tu menú y tus reglas.',
    ctaLabel: 'Hablar por WhatsApp ahora',
    ctaMessage: '¡Hola! Quiero saber más sobre Omengo para mi restaurante.',
  },

  footerTagline: 'El asistente de WhatsApp con IA para restaurantes, a medida de tu negocio.',
}
