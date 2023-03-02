const Calendar = require('../db/models/calendar.model')

const save = async (body) => {
  const newEvent = await new Calendar(body).save()
  return {
    message: 'create new meet',
    data: newEvent
  }
}

const deleteEvent = async (id) => {
  try {
    const deleteEvent = await Calendar.findByIdAndDelete(id)
    return {
      message: 'delete meet',
      data: deleteEvent
    }
  } catch (error) {
    return { message: 'Error deleting meet' }
  }
}

const get = async ({ userId, userRole }) => {
  const meetings = []
  try {
    if (userRole === 'PATIENT') {
      const calendarPatient = await Calendar.find({ pacientId: userId }).populate('colaboratorId')
      if (calendarPatient.length === 0) return { message: 'Not meetings added' }
      calendarPatient.forEach(e => {
        const index = {
          id: e._id,
          date: e.date,
          activity: e.activity,
          otro: e.colaboratorId.name,
          otroId: e.colaboratorId._id,
          otroOcuppation: e.colaboratorId.occupation,
          startHour: e.startHour
        }
        meetings.push(index)
      })
      return {
        message: 'Find meetings succefully',
        data: meetings
      }
    } else {
      const calendarColaborator = await Calendar.find({ colaboratorId: userId }).populate('pacientId')
      if (calendarColaborator.length === 0) return { message: 'Not meetings added' }
      calendarColaborator.forEach(e => {
        const index = {
          id: e._id,
          date: e.date,
          activity: e.activity,
          otro: e.pacientId.name,
          otroId: e.pacientId._id,
          otroOcuppation: e.pacientId.occupation,
          startHour: e.startHour
        }
        meetings.push(index)
      })
      return {
        message: 'Find meetings succefully',
        data: meetings
      }
    }
  } catch (error) {
    return { message: 'Error finding meetings' }
  }
}

module.exports = { save, deleteEvent, get }
