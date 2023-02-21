const { z } = require('zod')

const CreateCalendar = z.object({
  date: z.coerce.date(),
  activity: z.string(),
  colaboratorId: z.string(),
  pacientId: z.string(),
  endHour: z.coerce.date(),
  startHour: z.coerce.date()
}).required()

const UpdateCalendar = z.object({
  date: z.coerce.date(),
  activity: z.string(),
  colaboratorId: z.string(),
  pacientId: z.string(),
  endHour: z.coerce.date(),
  startHour: z.coerce.date()
}).required()

const GetCalendar = ({
  colaboratorId: z.string()
}).required()

module.exports = { CreateCalendar, UpdateCalendar, GetCalendar }
