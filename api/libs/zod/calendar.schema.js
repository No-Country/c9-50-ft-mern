const { z } = require('zod')

const CreateCalendar = z.object({
  date: z.string(),
  activity: z.string(),
  colaboratorId: z.string(),
  pacientId: z.string(),
  startHour: z.string()
})

const GetCalendar = ({
  colaboratorId: z.string()
})

module.exports = { CreateCalendar, GetCalendar }
