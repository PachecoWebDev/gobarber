import { container } from 'tsyringe';

import IStorageProvider from './StoragePRovider/models/IStorageProvider';
import DiskStorageProvider from './StoragePRovider/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
