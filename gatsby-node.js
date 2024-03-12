const path = require(`path`)
const events = require("./src/data/events.json")

const templatePath = path.resolve(`src/pages/events/[eventId].jsx`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  for (const event of events) {
    createPage({
      path: `/events/${event.id}`,
      component: templatePath,
      context: {
        eventId: event.id,
        imageName: event.image,
      },
    })
  }
}
