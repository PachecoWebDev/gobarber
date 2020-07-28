import { container } from 'tsyringe';

import IHashProvider from './HashProvider/models/IHashPRovider';
import BCryptHashProvider from './HashProvider/implementations/BCryptHashPRovider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
