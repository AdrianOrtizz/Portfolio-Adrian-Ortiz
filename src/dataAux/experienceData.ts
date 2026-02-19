export interface IExperience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export const experienceData: IExperience[] = [
  {
    company: "QikStartsAI",
    role: "Frontend Developer",
    period: "Nov 2025 — Presente",
    achievements: [
      "Desarrollo de UI: Creación y optimización de interfaces de usuario utilizando React y TypeScript para mejorar la interactividad del producto",
      "Componentización: Implementación de diseños responsivos y componentes modulares basados en Ant Design y ShadCN.",
      "Colaboración técnica: Integración de funcionalidades del lado del cliente colaborando en equipos multidisciplinarios bajo metodologías ágiles, utilizando Slack para comunicación interna y Git/GitHub para el control de versionesTarea",
    ],
    description:
      "Desarrollo de interfaces de usuario para aplicaciones web utilizando React y Vite.js, enfocándome en la experiencia del usuario y la eficiencia del código.",
  },
  {
    company: "SoyHenry",
    role: "Full Stack Teaching Assistant",
    period: "Ene 2024 — Jul 2024",
    achievements: [
      "Acompañamiento de estudiantes: Soporte continuo a un grupo de estudiantes durante su cursada en el bootcamp de desarrollo web.",
      "Reuniones semanales: Organización y liderazgo de videollamadas semanales para escuchar inquietudes y brindar apoyo.",
      "Asistencia teórica: Resolución de dudas y preguntas relacionadas con conceptos teóricos de desarrollo web.",
      "Capacitaciones técnicas: Impartición ocasional de capacitaciones sobre diversas tecnologías.",
    ],
    description:
      "Mentoría técnica y liderazgo de grupos en formación para el desarrollo web Full Stack.",
  },
  {
    company: "Chula Home Deco",
    role: "Administración, Logística y atención al cliente",
    period: "Sep 2024 — Feb 2026",
    achievements: [
      "Atención al cliente: Resolución de consultas y solicitudes a través de WhatsApp y llamadas, ocasionalmente también haciendo atención al público en el local.",
      "Gestión de logística: Coordinación de entregas a domicilio y retiros en el local",
      "Manejo de caja: Pago de sueldos a empleados",
    ],
    description:
      "Gestión de operaciones comerciales, logística de última milla y administración.",
  },
  {
    company: "Bauletto SRL",
    role: "Administración, Logística y atención al cliente",
    period: "Mar 2022 — Sep 2024",
    achievements: [
      "Gestión del flujo de pedidos: Coordinación de todo el proceso, desde la recepción hasta la entrega.",
      "Control de pedidos y documentación: Responsable de la verificación de pedidos, generación de remitos y facturas.",
      "Mantenimiento de registros: Actualización y seguimiento de los clientes a través de planillas en Excel.",
      "Atención al cliente: Resolución de consultas y solicitudes a través de WhatsApp, redes sociales y llamadas.",
    ],
    description:
      "Optimización operativa del flujo de pedidos y gestión logística integral.",
  },
];
