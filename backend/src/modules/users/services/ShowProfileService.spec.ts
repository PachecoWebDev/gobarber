import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

let fakeUSersRepository: FakeUsersRepository;
let showProfile: ShowProfileService;

describe('UpdateAvatar', () => {
  beforeEach(() => {
    fakeUSersRepository = new FakeUsersRepository();

    showProfile = new ShowProfileService(fakeUSersRepository);
  });

  it('should be able to show the profile', async () => {
    const user = await fakeUSersRepository.create({
      name: 'Jhon Doe',
      email: 'jhondoe@example.com',
      password: '123456',
    });

    const profile = await showProfile.execute({
      user_id: user.id,
    });

    expect(profile.name).toBe('Jhon Doe');
    expect(profile.email).toBe('jhondoe@example.com');
  });

  it('should not be able to show the profile from non-existing user', async () => {
    expect(
      showProfile.execute({
        user_id: 'non-existin-user-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
