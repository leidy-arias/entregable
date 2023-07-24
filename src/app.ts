import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Configuración de Express para servir contenido estático desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para el procesamiento de formularios
app.use(express.urlencoded({ extended: false }));

// Ruta para mostrar el formulario
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

// Ruta para manejar el envío del formulario
app.post('/submit', (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  res.send(`¡Hola, ${name}! Tu correo es: ${email}. Tu mensaje es: ${message}`);
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
