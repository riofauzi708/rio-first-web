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
        
        const startDateParts = startDate.split("-");
        const endDateParts = endDate.split("-");
        const startDateObj = new Date([startDate[2],startDateParts[1],endDateParts[0]].join("-"));
        const endDateObj = new Date(endDate);
        const duration = Math.ceil((endDateObj - startDateObj) / (1000 * 60 * 60 * 24));

        

        const project = {
            projectName,
            startDate,
            endDate,
            duration,
            description,
            nodeJs,
            nextJs,
            reactJs,
            typeScript,
            uploadImage,
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
        console.log("startDateObj", startDateObj)
        console.log("endDateObj", endDateObj)
        console.log("duration", duration)
    }


    function renderProject() {
        let html = ``

        for(let index= 0; index < projects.length; index++) {
            html += `
            <div class="blog-form-bg">
            <a href="blog-detail.html">
            <img class="img-blog-style" src="${projects[index].uploadImage}" alt=""></a>
            <h3><a class="text-deco" href="blog-detail.html">${projects[index].projectName}</a></h3>
            <p class="dates">durasi : ${projects[index].duration}</p>
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

    function getFullTime(dates) {
        let minutes = dates.getMinutes()
        let hours = dates.getHours()
        const date = dates.getDate()
        const month = dates.getMonth();
        const year = getFullYear();


        if (hours < 10) {
            hours = "0" + hours
        }

        if (minutes < 10) {
            minutes = "0" + minutes
        }

        const months = ["January", "February", "March",
        "April", "May", "June", "July", "August",
        "September", "October", "November", "December"]

        return `${date} ${months[month]} ${year} ${hours}:${minutes} WIB`;
        
    }


    function dates() {
        let startDate = new Date(startDate);
        let endDate = new Date(endDate);
        
        
        let diffInMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
        console.log('durasi :', diffInMonths, 'bulan');
    }

    renderProject()