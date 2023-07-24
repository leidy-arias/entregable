"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
// Configuración de Express para servir contenido estático desde la carpeta 'public'
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Middleware para el procesamiento de formularios
app.use(express_1.default.urlencoded({ extended: false }));
// Ruta para mostrar el formulario
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'views', 'form.html'));
});
// Ruta para manejar el envío del formulario
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    res.send(`¡Hola, ${name}! Tu correo es: ${email}. Tu mensaje es: ${message}`);
});
app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});
