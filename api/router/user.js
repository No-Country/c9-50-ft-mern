const { Router } = require ('express');
const validatorHandle = require ('../middlewares/validatorHandler')


const router = Router();

router.post('/login', validatorHandle (loginUserSchema, 'body'), loginUser);

module.exportes = router;