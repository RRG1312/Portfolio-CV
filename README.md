# Portfolio CV Digital

Un portfolio personal moderno y responsive construido con Next.js, React y Tailwind CSS que muestra automáticamente tu perfil de GitHub y proyectos destacados.

## 🚀 Características

- **Responsive Design**: Optimizado para todos los dispositivos
- **Dark Mode**: Soporte automático para tema oscuro/claro
- **GitHub Integration**: Obtiene automáticamente tu información y repositorios
- **Modern Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **SEO Optimized**: Meta tags y estructura optimizada para motores de búsqueda

## 🛠️ Tecnologías

- [Next.js 14](https://nextjs.org/) - Framework de React
- [React 18](https://reactjs.org/) - Biblioteca de JavaScript
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [GitHub API](https://docs.github.com/en/rest) - Para obtener datos de perfil y repositorios

## 🏃‍♂️ Instalación y uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/RRG1312/portfolio-cv.git
   cd portfolio-cv
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar tu perfil de GitHub**
   
   Edita los siguientes archivos para usar tu información:
   
   - `src/components/Header.tsx` - línea 13: Cambia `'RRG1312'` por tu username
   - `src/components/Projects.tsx` - línea 13: Cambia `'RRG1312'` por tu username
   - `src/components/Contact.tsx` - Actualiza tus enlaces de contacto

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   
   Visita [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── globals.css      # Estilos globales con Tailwind
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página principal
├── components/
│   ├── Header.tsx       # Sección hero con info de GitHub
│   ├── About.tsx        # Sección sobre mí
│   ├── Projects.tsx     # Proyectos destacados de GitHub
│   └── Contact.tsx      # Información de contacto
├── types/
│   └── github.ts        # Tipos de TypeScript para GitHub API
```

## 🎨 Personalización

### Información personal
- Edita `src/components/About.tsx` para agregar tu información personal
- Modifica las tecnologías y intereses según tu perfil
- Actualiza los enlaces de contacto en `src/components/Contact.tsx`

### Estilos
- Personaliza los colores en `tailwind.config.js`
- Modifica los estilos en `src/app/globals.css`
- Ajusta los componentes según tus preferencias

### GitHub Integration
El portfolio obtiene automáticamente:
- Información del perfil (nombre, bio, avatar, ubicación)
- Repositorios más destacados (ordenados por estrellas)
- Estadísticas (repositorios, seguidores, siguiendo)

## 🚀 Despliegue

### Vercel (Recomendado)
1. Fork este repositorio
2. Conecta tu cuenta de GitHub con [Vercel](https://vercel.com)
3. Importa el proyecto y despliega

### Otros servicios
El proyecto es compatible con cualquier servicio que soporte Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Scripts disponibles

- `npm run dev` - Ejecutar en modo desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Ejecutar en modo producción
- `npm run lint` - Ejecutar el linter

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 💡 Ideas para mejoras futuras

- [ ] Agregar animaciones con Framer Motion
- [ ] Implementar formulario de contacto funcional
- [ ] Agregar blog integrado
- [ ] Integración con más APIs (LinkedIn, Twitter)
- [ ] Modo offline con Service Workers
- [ ] Métricas y analytics
- [ ] Soporte para múltiples idiomas

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!