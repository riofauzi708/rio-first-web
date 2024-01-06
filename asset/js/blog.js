const projects = []

   function addProject(event) {
        event.preventDefault()

        const projectName = document.getElementById("projectName").value
        const startDate = document.getElementById("startDate").value
        const endDate = document.getElementById("endDate").value
        const description = document.getElementById("description").value
        const nodeJs = document.getElementById("nodeJs").value
        const nextJs = document.getElementById("nextJs").value
        const reactJs = document.getElementById("reactJs").value
        const typeScript = document.getElementById("typeScript").value
        const uploadImage = document.getElementById("uploadImage").files

        // const uploadImageLink = URL.createObjectURL(uploadImage[0])

        // localStorage.setItem("project", JSON.stringify, ({
        //     projectName,
        //     startDate,
        //     endDate,
        //     description,
        //     uploadImageLink,
        // }))

        const project = {
            projectName,
            startDate,
            endDate,
            description,
            nodeJs,
            nextJs,
            reactJs,
            typeScript,
            uploadImage
        }

        projects.push(project)

        renderProject()
        console.log("projects", projects)


        console.log("projectName", projectName)
        console.log("startDate", startDate)
        console.log("endDate", endDate)
        console.log("description", description)
        console.log("nodeJs", nodeJs)
        console.log("nextJs", nextJs)
        console.log("reactJs", reactJs)
        console.log("typeScript", typeScript)
        console.log("uploadImage", uploadImage[0])
    }


    function renderProject() {
        let html = ""

        for(let index= 0; index < projects.length; index++) {
            html += ``
        }

        document.getElementById("projects").innerHTML = "html"
    }

    renderProject()