# 🚀 Adrian Ortiz - Portfolio Profesional

Este proyecto es mi portfolio personal, desarrollado con un enfoque de **alto rendimiento**, **UX minimalista** y **arquitectura escalable**. He priorizado la experiencia del usuario y la optimización técnica para lograr un producto premium.

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 16 (App Router) utilizando **Turbopack** para una compilación ultra rápida.
- **Lenguaje:** TypeScript para un desarrollo robusto y libre de errores de tipo.
- **Animaciones:** Framer Motion para transiciones fluidas y micro-interacciones.
- **Estilos:** Tailwind CSS con una paleta de colores minimalista y modo oscuro nativo.
- **Despliegue:** Vercel para una integración continua y hosting de alta disponibilidad.

## ✨ Características Destacadas

### 🎵 Vibe Player (Spotify Integration)

Implementé un reproductor de música personalizado que no solo es estético, sino funcional y proactivo.

- **Progressive Disclosure:** El componente inicia con una invitación de texto que se "estira" para llamar la atención del usuario y luego se contrae a un botón circular minimalista para no estorbar el contenido.
- **Renderizado Persistente:** La música sigue sonando en segundo plano incluso cuando el reproductor se oculta, gracias a una lógica de visibilidad que evita desmontar el iframe de Spotify.

### 📈 Optimización de Metadatos y SEO

- **MetadataBase:** Configuración de la URL base para asegurar que los metadatos de OpenGraph y Twitter se resuelvan correctamente en producción.
- **File-based Metadata:** Gestión automatizada de iconos (favicon, icon, apple-icon) desde la carpeta `public`, optimizando la carga del `<head>`.
- **OpenGraph Premium:** Previsualización personalizada para redes sociales con una descripción enfocada en la resolución de problemas técnicos.

## 🚀 Performance

El proyecto ha sido optimizado para pasar los controles más exigentes:

- **Compilación:** Finalizada en tiempos récord (3.4s) gracias al uso de Turbopack.
- **Static Rendering:** Las rutas se pre-renderizan de forma estática, garantizando una carga casi instantánea para el usuario final.

## 📦 Instalación y Uso

1. Clonar el repositorio.
2. Instalar dependencias: `npm install`.
3. Correr en modo desarrollo: `npm run dev`.
4. Construir para producción: `npm run build`.

---

_Adrian Ortiz | Full Stack Developer_
