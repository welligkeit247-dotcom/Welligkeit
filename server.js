import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Configuración básica para obtener rutas de carpetas
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 8080;

// Seguridad: Ocultar información del servidor en las cabeceras
app.disable('x-powered-by');

// 1. Servir los archivos estáticos de la carpeta 'dist' (generada por npm run build)
app.use(express.static(join(__dirname, 'dist')));

// 2. Cualquier ruta que no sea un archivo, devuelve el index.html (para que React funcione al recargar página)
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// 3. Iniciar servidor escuchando en todas las interfaces (0.0.0.0) para acceso externo si es necesario
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor Seguro Iniciado.`);
  console.log(`Acceso Local: http://localhost:${PORT}`);
});