import { ServicePackage, ClearanceLevel } from './types';

export const PACKAGES: ServicePackage[] = [
  {
    id: 'p1',
    name: 'Creación de Contenido Táctico',
    codeName: 'PROTOCOLO: MEMÉTICA',
    price: '$800',
    frequency: 'Monthly',
    description: 'Generación de activos visuales y textuales para mantener presencia operativa en la red.',
    features: [
      '12 Diseños de Contenido Estático',
      '4 Guiones de Redacción Persuasiva',
      'Optimización de Hashtags (SEO)',
      'Informe Básico de Alcance',
      'Soporte vía Enlace Seguro'
    ],
    clearance: ClearanceLevel.RESTRICTED,
    icon: 'activity'
  },
  {
    id: 'p2',
    name: 'Gestión de Publicidad y Video',
    codeName: 'PROTOCOLO: FRECUENCIA',
    price: '$1.500',
    frequency: 'Semestral',
    description: 'Despliegue de video corto y gestión de tráfico pago para saturación de zona de mercado.',
    features: [
      'Ideación y Edición: 8 Videos Cortos',
      'Edición Profesional de Alta Calidad',
      'Gestión de Campañas Ads (Meta/Google)',
      'Community Management Activo',
      'Reporte de Conversión Mensual'
    ],
    clearance: ClearanceLevel.CONFIDENTIAL,
    icon: 'lock'
  },
  {
    id: 'p3',
    name: 'Agencia Full-Service Dedicada',
    codeName: 'PROTOCOLO: RESONANCIA',
    price: '$2000',
    frequency: 'Annual',
    description: 'Departamento de marketing externalizado completo. Dominio total del sector y la competencia.',
    features: [
      'Producción de Contenido Ilimitado',
      'Equipo Creativo Dedicado',
      'Estrategia de Lanzamiento de Producto',
      'Automatización de CRM y Leads',
      'Reuniones de Estrategia Semanales'
    ],
    clearance: ClearanceLevel.TOP_SECRET,
    icon: 'shield'
  }
];

export const NAV_LINKS = [
  { name: 'AGENCIA', href: '#sector-c' },
  { name: 'SERVICIOS', href: '#services' },
  { name: 'DIAGNÓSTICO', href: '#demo' },
  { name: 'TARIFAS', href: '#pricing' },
  { name: 'CONTACTO', href: '#contact' },
];
