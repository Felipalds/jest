import { Appointment } from "../../entities/appointment";
import { AppointmentRepository } from "../appointmentsRepository";

export class InMemoryAppointmentRepository implements AppointmentRepository{
    
    public items: Appointment[] = []
    
    async create(appointment: Appointment) {
        this.items.push(appointment)
    }
    async findOverlappingAppointment(startsAt: Date, endsAt: Date){
        const overlappingAppointment = this.items.find(apointment => {
            return apointment.startsAt === startsAt && apointment.endsAt === endsAt
        })

        if(!overlappingAppointment) return null
        return overlappingAppointment
    }
}