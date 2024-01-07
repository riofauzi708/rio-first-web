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

        const uploadImageLink = URL.createObjectURL(uploadImage[0])

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
            uploadImage : uploadImageLink
        }

        projects.unshift(project)

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
        let html = ``

        for(let index= 0; index < projects.length; index++) {
            html += `
            <div class="blog-form-bg">
            <img class="img-blog-style" src="asset/img/painting-mountain.jpg" alt="">
            <h3><a class="text-deco" href=""> Nama Project</a></h3>
            <p class="dates">durasi : 3 bulan</p>
            <p class="container">Drawing is a means where everything is realized by illustrating in two-dimensional form
                 as an outpouring or thought in various forms such as slides, portraits, paintings, films, 
                 blurry projectors, or strips (Hamalik, 2017: 43).</p>

            <div class="icon-layout">
                <img class="logo-icons" src="asset/img/logo-playstore.png" alt="">
                <img class="logo-icons" src="asset/img/logo-android.png" alt="">
                <img class="logo-icons" src="asset/img/logo-java.png" alt="">
                <img class="logo-icons" src="asset/img/logo-javascript.png" alt="">
            </div>
                
            <div class="btn-setting">
                <button class="btn-edit-dlt">edit</button>
                <button class="btn-edit-dlt">delete</button>

            </div>

        </div>
    `
        }

        document.getElementById("contents").innerHTML = html
    }

    renderProject()