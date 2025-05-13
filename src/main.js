/** backend che spara un api (hello API)
 * col suo dockerfile
 * 
 * frontendino che mostri la pagina
 * col suo dockerfile
 * 
 * docker composer
 */

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Calcola il percorso della directory corrente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// dichiariamo su che porta risponderà il server web
const port = process.env.PORT || 4000;
// creiamo l’istanza del server
const app = express();

// Middleware, per ogni richiesta verrà abilitato CORS e verrà parsificato il body JSON
app.use(cors());
app.use(express.json());

// Creare un endpoint per la risorsa (utenti)
app.get('/mypage', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/view/index.html'));  
});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});