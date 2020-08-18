import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsControllers';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsCotnroller';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppoitmentsController = new ProviderAppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

appointmentsRouter.post('/', appointmentsController.create);
appointmentsRouter.get('/me', providerAppoitmentsController.index);

export default appointmentsRouter;
