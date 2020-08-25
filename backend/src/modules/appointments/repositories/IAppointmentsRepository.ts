import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindAllInMounthfromProviderDTO from '../dtos/IFindAllInMounthfromProviderDTO';
import IFindAllInDayfromProviderDTO from '../dtos/IFindAllInDayfromProviderDTO';

export default interface IAppointmentRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date, provider_id: string): Promise<Appointment | undefined>;
  findAllInMounthfromProvider(
    data: IFindAllInMounthfromProviderDTO,
  ): Promise<Appointment[]>;
  findAllInDayfromProvider(
    data: IFindAllInDayfromProviderDTO,
  ): Promise<Appointment[]>;
}
