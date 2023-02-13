import express from 'express';
import StudentControler from '../controllers/studentController.js';
const router = express.Router();

router.get('/',StudentControler.getAllDoc);
router.post('/create', StudentControler.createDoc);
router.get('/edit/:id',StudentControler.editDoc);
router.post('/update/:id',StudentControler.updateDocById);
router.post('/delete/:id',StudentControler.DeleteDocById);


export default router;