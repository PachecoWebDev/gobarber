import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindAllInMounthfromPRoviderDTO from '../dtos/IFindAllInMounthfromPRoviderDTO';

export default interface IAppointmentRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMounthfromPRovider(
    data: IFindAllInMounthfromPRoviderDTO,
  ): Promise<Appointment[]>;
}
