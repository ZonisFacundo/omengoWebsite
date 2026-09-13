// Contenido de la landing de clínicas y centros de salud. Pensado desde
// los dolores propios de ese rubro (turnos, obras sociales,
// confidencialidad) — no es una copia de src/content/restaurantes.js con
// buscar-y-reemplazar, porque eso Google lo puede leer como contenido
// duplicado y además no suena creíble para quien lo lee.
export const clinicasContent = {
  vertical: 'clinicas',
  navLabel: 'Clínicas',

  hero: {
    eyebrow: 'Para clínicas y centros de salud en Argentina',
    h1: 'Atendé a tus pacientes por WhatsApp, las 24 horas, sin perder ni un turno',
    paragraph:
      'Omengo es un asistente con inteligencia artificial armado a medida para tu clínica: conversa con tus pacientes como lo haría tu mejor recepcionista, coordina turnos y resuelve lo que necesiten — sin sonar a bot. Cuando una conversación lo requiere, la deriva a vos o a tu equipo.',
    ctaLabel: 'Quiero mi bot para mi clínica',
    ctaMessage: '¡Hola! Quiero saber más sobre Omengo para mi clínica.',
    secondaryLabel: 'Ver cómo funciona',
    secondaryHref: '#como-funciona',
    note: 'Implementación a medida — cada clínica se configura con sus propias especialidades, obras sociales y reglas.',
    chat: {
      headerName: 'Tu clínica',
      headerAvatar: '🩺',
      ariaLabel:
        'Ejemplo de conversación de un paciente con Omengo por WhatsApp: pregunta por un médico puntual, confirma su obra social, elige horario y Omengo confirma el turno',
      messages: [
        { from: 'client', text: 'Hola! El Dr. Ibáñez atiende esta semana?' },
        {
          from: 'bot',
          text: 'Hola 👋 Sí, el Dr. Ibáñez (cardiología) atiende martes y jueves. ¿Tenés obra social o prepaga?',
        },
        { from: 'client', text: 'Tengo Swiss Medical' },
        {
          from: 'bot',
          text: 'Perfecto, atendemos Swiss Medical. Tengo lugar el martes 11:00 o el jueves 17:30. ¿Cuál te queda mejor?',
        },
        { from: 'client', text: 'El jueves a las 17:30' },
        {
          from: 'bot',
          text: 'Listo, turno confirmado: jueves 17:30 con el Dr. Ibáñez 👍',
        },
        { from: 'client', text: 'Genial, gracias!' },
        { from: 'bot', text: 'De nada, nos vemos el jueves 🙌' },
      ],
    },
  },

  problem: {
    title: '¿Te suena familiar?',
    intro:
      'Atender WhatsApp a mano funciona hasta que la clínica crece — y ahí es cuando empiezan a perderse turnos y horas de trabajo.',
    items: [
      {
        id: 'fuera-horario',
        icon: 'clock',
        text: 'Pacientes que escriben fuera del horario de atención y nadie llega a contestar.',
      },
      {
        id: 'repetir',
        icon: 'clipboard',
        text: 'Repetir a cada paciente qué obras sociales atendés y cuánto sale cada consulta.',
      },
      {
        id: 'perdidos',
        icon: 'alert',
        text: 'Pacientes que se van a otra clínica por demorar en responder.',
      },
      {
        id: 'equipo',
        icon: 'team',
        text: 'Tu recepcionista contestando WhatsApp en vez de atender a quien está en el mostrador.',
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
        title: 'Nos contás cómo trabaja tu clínica',
        description:
          'Especialidades, obras sociales, precios, agenda y las reglas que ya usás para atender a tus pacientes.',
      },
      {
        id: 2,
        title: 'Configuramos a Omengo a medida',
        description:
          'Cargamos tu agenda y tus reglas de negocio. No es una plantilla genérica: cada clínica tiene su propia configuración.',
      },
      {
        id: 3,
        title: 'Tus pacientes escriben por WhatsApp como siempre',
        description:
          'No instalan nada nuevo. Omengo responde al instante, las 24 horas, con el tono de tu clínica.',
      },
      {
        id: 4,
        title: 'Si hace falta una persona, Omengo deriva',
        description:
          'Ante una urgencia o una consulta médica puntual, Omengo pasa el chat a vos o a tu equipo para que sigan de forma humana.',
      },
    ],
    note: '¿Necesitás cambiar algo más adelante — un horario, una obra social nueva, un profesional? Nos lo pedís y lo actualiza nuestro equipo de ingenieros: es parte del servicio.',
  },

  features: {
    eyebrow: 'Beneficios',
    title: 'Todo lo que Omengo hace por tu clínica',
    intro: 'Pensado para quien dirige una clínica, no para gente de sistemas.',
    items: [
      {
        id: 'disponibilidad',
        icon: 'clock',
        title: 'Disponible las 24 horas',
        description:
          'Atiende de noche, los fines de semana y en los picos de consultas, sin turnos ni horarios.',
      },
      {
        id: 'simultaneo',
        icon: 'chat-multi',
        title: 'Atiende a todos tus pacientes al mismo tiempo',
        description:
          'Nadie espera a que se libere alguien. Responde en simultáneo aunque escriban diez personas a la vez.',
      },
      {
        id: 'humano',
        icon: 'spark',
        title: 'Habla como una persona, no como un bot',
        description:
          'Nada de listas de opciones ni respuestas armadas. Entiende lo que le piden y responde con criterio, sin inventar información. Si algo se le escapa, ahí deriva.',
      },
      {
        id: 'turnos',
        icon: 'calendar',
        title: 'Coordina el turno completo, no solo responde',
        description:
          'Lleva la conversación de punta a punta: entiende qué necesita el paciente, encuentra el horario y confirma el turno, como lo haría tu mejor recepcionista.',
      },
      {
        id: 'costo',
        icon: 'coin',
        title: 'Una fracción de lo que cuesta un empleado',
        description:
          'Libera a la persona que hoy contesta WhatsApp para que se dedique a otras tareas. En una clínica promedio, con que alguien lo acompañe de forma parcial ya alcanza.',
      },
      {
        id: 'medida',
        icon: 'tailored',
        title: 'Configurado a medida, con un equipo detrás',
        description:
          'Se integra con tu agenda, tus obras sociales y las reglas de tu clínica. Y si más adelante querés cambiar algo, nos lo pedís y lo resuelve nuestro equipo de ingenieros.',
      },
      {
        id: 'sin-apps',
        icon: 'whatsapp',
        title: 'Tus pacientes no instalan nada',
        description: 'Todo pasa por el WhatsApp que ya usan todos los días, sin apps ni registros nuevos.',
      },
      {
        id: 'profesionaliza',
        icon: 'shield',
        title: 'Hace más profesional a tu clínica',
        description:
          'Respuestas rápidas, prolijas y consistentes en cada conversación — la imagen que deja tu clínica en cada paciente que escribe.',
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
        topic: 'Pacientes atendidos a la vez',
        before: 'Uno por uno, según quién esté libre',
        after: 'Todos al mismo tiempo, sin que nadie espere',
      },
      {
        topic: 'Consultas de los pacientes',
        before: 'Se responden una por una, a mano, cuando hay tiempo',
        after: 'Se resuelven al instante, como lo haría una recepcionista',
      },
      {
        topic: 'Coordinación de turnos',
        before: 'Depende de quién esté disponible en ese momento',
        after: 'Se coordinan solos, en una conversación natural',
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
    title: 'Lo que suelen preguntar en clínicas y centros de salud',
    items: [
      {
        id: 'instalar-app',
        question: '¿Mis pacientes necesitan instalar una aplicación?',
        answer:
          'No. Tus pacientes siguen escribiendo al WhatsApp de siempre, sin instalar nada nuevo ni crear cuentas.',
      },
      {
        id: 'suena-a-bot',
        question: '¿Mis pacientes notan que están hablando con un bot?',
        answer:
          'No es la idea. Omengo conversa de forma natural, como lo haría una persona de tu equipo: no tira listas de opciones ni respuestas armadas, entiende lo que le piden y responde con criterio. Nunca inventa información — si en algún momento no puede resolver algo, deriva la conversación a una persona real.',
      },
      {
        id: 'reemplaza-equipo',
        question: '¿Omengo reemplaza a mi equipo?',
        answer:
          'Reemplaza gran parte de la tarea de responder WhatsApp, que es la que más tiempo consume. En una clínica promedio alcanza con que una persona se encargue de esto de forma parcial, combinado con otras tareas — Omengo se hace cargo del resto y deriva lo que necesita trato humano o una decisión médica.',
      },
      {
        id: 'confidencialidad',
        question: '¿Es seguro compartir información de pacientes por este medio?',
        answer:
          'Omengo está pensado para coordinar turnos y responder consultas generales (especialidades, obras sociales, horarios) — no para manejar historias clínicas ni datos médicos sensibles. Qué información puntual del paciente entra en la conversación se define con cuidado al configurar tu clínica.',
      },
      {
        id: 'cargar-agenda',
        question: '¿Cómo se carga la agenda y las obras sociales?',
        answer:
          'Se configura a medida durante la implementación: nos pasás tus especialidades, tus obras sociales y tus reglas de turnos, y las integramos directamente en Omengo. Si más adelante querés cambiar algo — un horario, una obra social nueva, un profesional — nos lo pedís y nuestro equipo de ingenieros lo actualiza por vos.',
      },
      {
        id: 'tiempo-implementacion',
        question: '¿Cuánto tiempo lleva implementarlo?',
        answer:
          'Depende de la cantidad de especialidades y las reglas de cada clínica. Lo definimos juntos en la primera conversación por WhatsApp.',
      },
      {
        id: 'tipo-clinica',
        question: '¿Funciona para cualquier tipo de clínica o centro de salud?',
        answer:
          'Sí. Está pensado para clínicas y centros de salud de cualquier tamaño en Argentina, desde consultorios individuales hasta clínicas con varias especialidades.',
      },
      {
        id: 'costo',
        question: '¿Cuánto cuesta Omengo?',
        answer:
          'Cada implementación es a medida, según el tamaño y las necesidades de la clínica. Escribinos por WhatsApp y te pasamos una cotización.',
      },
    ],
  },

  finalCta: {
    title: 'Empezá a atender mejor a tus pacientes, sin sumarle carga a tu equipo',
    paragraph: 'Contanos cómo trabaja tu clínica y armamos Omengo a medida, con tu agenda y tus reglas.',
    ctaLabel: 'Hablar por WhatsApp ahora',
    ctaMessage: '¡Hola! Quiero saber más sobre Omengo para mi clínica.',
  },

  footerTagline: 'El asistente de WhatsApp con IA para clínicas y centros de salud, a medida de tu negocio.',
}
