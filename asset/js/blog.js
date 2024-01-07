const projects = []

   function addProject(event) {
        event.preventDefault()

        const projectName = document.getElementById("projectName").value
        const startDate = document.getElementById("startDate").value
        const endDate = document.getElementById("endDate").value
        const description = document.getElementById("description").value
        const nodeJs = document.getElementById("nodeJs").checked
        const nextJs = document.getElementById("nextJs").checked
        const reactJs = document.getElementById("reactJs").checked
        const typeScript = document.getElementById("typeScript").checked
        let uploadImage = document.getElementById("uploadImage").files

        uploadImage = URL.createObjectURL(uploadImage[0])

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
            <a href="blog-detail.html">
            <img class="img-blog-style" src="${projects[index].uploadImage}" alt=""></a>
            <h3><a class="text-deco" href="blog-detail.html">${projects[index].projectName}</a></h3>
            <p class="dates">durasi : 3 bulan</p>
            <p class="container">${projects[index].description}</p>

            <div class="icon-layout">
                ${projects[index].nodeJs ? `<img class="logo-icons" src="asset/img/logo-playstore.png" alt="">` : ''}
                ${projects[index].nextJs ? `<img class="logo-icons" src="asset/img/logo-android.png" alt="">` : ''}
                ${projects[index].reactJs ? `<img class="logo-icons" src="asset/img/logo-java.png" alt="">` : ''}
                ${projects[index].typeScript ? `<img class="logo-icons" src="asset/img/logo-javascript.png" alt="">` : ''}
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