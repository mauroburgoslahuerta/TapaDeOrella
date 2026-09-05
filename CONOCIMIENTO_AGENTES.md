# Tapa D'Orella - Base de Conocimiento para Agentes (IA)

Este documento contiene las reglas de negocio, contexto del proyecto y guías de estilo críticas que cualquier agente IA debe leer antes de realizar modificaciones en el proyecto. 

Mauro es el Coordinador/CTO del proyecto. Los agentes deben actuar con un rol de "Senior Technical Partner", priorizando la transparencia, la legibilidad técnica y previniendo la deuda técnica.

## 1. Contexto del Proyecto
- **Banda / Entidad:** Tapa D'Orella (Proyecto musical en Galicia).
- **Stack Web:** Next.js (App Router), Tailwind CSS. Ubicado en el directorio `/web`.
- **Identidad Visual:** Tonos oscuros/neutrales con colores de acento azul marino (estilo azulejo tradicional gallego) y detalles limpios.

## 2. Gestión del Cartel de la Gira (Generador Automatizado)
El proceso de actualizar fechas de conciertos no se hace a mano (por motivos de escalabilidad) ni mediante HTML/CSS (debido a limitaciones de CORS/CSP y renderizado responsivo). Se utiliza un script de Python que genera un JPG estático.

### Ubicación de los archivos:
- **Script generador:** `/scripts/generador_cartel.py`
- **Fondo base limpio:** `/scripts/fondo-vertical.jpg`
- **Destino del output:** `/web/public/xira.jpg`

### Cómo añadir una nueva fecha (Instrucciones para Agentes):
1. Abrir `/scripts/generador_cartel.py`.
2. Añadir la nueva fecha a la lista `fechas` manteniendo un estricto formato: `EVENTO (POBLACIÓN) ~ DD/MM/AAAA`. (Ej: `RUADA DE CARBALLAL (SANTIAGO) ~ 07/11/2026`).
3. El segundo parámetro de la tupla es un booleano `past`. Si el concierto ya ha sucedido, marcar como `True` (se tachará en rojo). Si es futuro, marcar como `False`.
4. Ejecutar el script: `python scripts/generador_cartel.py`.
5. Esto sobrescribirá automáticamente la imagen `/web/public/xira.jpg`.
6. Si la sección de conciertos está comentada en `page.tsx`, asegúrate de descomentarla. Si ya está activa, no hay que tocar la web.

### Reglas de Diseño Críticas del Cartel (NO ALTERAR SIN PERMISO DE MAURO):
- **Trato Igualitario:** NO hacer distinciones visuales (colores, tamaños VIP, estrellas) para festivales importantes vs pequeños. En la industria musical, todos los promotores merecen el mismo respeto en el cartel oficial. Todos los textos futuros van en azul brillante, todos los pasados en azul grisáceo apagado.
- **Margen de Seguridad (10-12%):** El texto largo no puede tocar los bordes del marco del azulejo. Genera "agobio visual". El script calcula el tamaño de letra basándose en la línea más larga para mantener siempre este margen.
- **Peso de la Tipografía:** Se exige fuente gruesa (`Arial Bold` o similar) para asegurar la máxima legibilidad de lejos.
- **El Halo (Stroke):** El texto lleva un contorno (*stroke*) de color crema. Esto es obligatorio para aislar las letras de las juntas oscuras del azulejo del fondo. Sin este halo, fechas que caigan sobre una junta negra desaparecerían y se perdería legibilidad.
- **Tachón Translúcido:** La línea roja que tacha las fechas pasadas se pinta sobre una capa RGBA con canal alfa, simulando un subrayador/rotulador de acuarela, permitiendo leer la fecha original que hay debajo.

## 3. Protocolo de Interacción con Mauro
- Nunca ejecutes cambios masivos sin preguntar.
- Si Mauro propone una solución que generará deuda técnica (ej. crear un servidor MCP para conectar Canva), vetarla explicando los motivos técnicos de peso.
- Ante dudas de formato oficial de un evento, búscalo en internet (ej. *Ruada de Carballal*) antes de inventar la sintaxis.

## 4. Despliegue y Gestión de Dominios (DNS)
- **Advertencia Crítica de Infraestructura:** El dominio `tapadeorella.com` está gestionado en *Profesional Hosting*. Tiene configurado un enrutamiento de correos crítico (filtros de reenvío en Gmail para `contratacions@tapadeorella.com`).
- **Protocolo de Enlace a Vercel:** Cuando se despliegue la web oficial, **NUNCA** se deben cambiar los Nameservers (NS) completos del dominio. Hacerlo rompería el servidor de correo. El enlace a Vercel debe hacerse estricta y únicamente modificando los registros **A** y **CNAME** en el panel de Profesional Hosting, permitiendo que la gestión del email (Registros MX) siga intacta en el proveedor original.
