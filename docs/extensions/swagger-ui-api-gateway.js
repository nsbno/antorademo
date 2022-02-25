const register = function (registry) {
    registry.treeProcessor(function () {
        const self = this

        self.process(function (doc) {
            if (doc.getAttribute("page-layout") !== "swagger") {
                return
            }
            console.log(doc.getAttribute(
                `Component ${doc.getAttribute("page-component-name")}, file`
            ))
        })
    })
}

module.exports = {register}
