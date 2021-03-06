const { events } = require("brigadier");

events.on("push", function(e, project) {
  console.log("push for commit id ==========" + e.revision.commit, "==========")
})