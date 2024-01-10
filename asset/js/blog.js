const projects = [];

function addProject(event) {
  event.preventDefault();

  const projectName = document.getElementById("projectName").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const description = document.getElementById("description").value;
  const nodeJs = document.getElementById("nodeJs").checked;
  const nextJs = document.getElementById("nextJs").checked;
  const reactJs = document.getElementById("reactJs").checked;
  const typeScript = document.getElementById("typeScript").checked;
  let uploadImage = document.getElementById("uploadImage").files;

  uploadImage = URL.createObjectURL(uploadImage[0]);

  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);
  const diffInMonths = (endDateObj.getFullYear() - startDateObj.getFullYear()) * 12 + (endDateObj.getMonth() - startDateObj.getMonth());

  const project = {
    projectName,
    startDate: formatTanggal(startDate),
    endDate: formatTanggal(endDate),
    startDateNumber: startDateObj.getDate(),
    endDateNumber: endDateObj.getDate(),
    duration: diffInMonths,
    description,
    nodeJs,
    nextJs,
    reactJs,
    typeScript,
    uploadImage,
  };

  projects.unshift(project);

  renderProject();
  console.log("projects", projects);
}

function formatTanggal(tanggal) {
  const date = new Date(tanggal);
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${date.getDate()} ${month} ${year}`;
}

function renderProject() {
  let html = "";

  for (let index = 0; index < projects.length; index++) {
    html += `
    <div class="blog-form-bg">
            <div>
                <a href="blog-detail.html?startDate=${projects[index].startDate}&endDate=${projects[index].endDate}&duration=${projects[index].duration}">
                    <img class="img-blog-style" src="${projects[index].uploadImage}" alt="">
                </a>
            </div>
            <div>
                <h3><a class="text-deco" href="blog-detail.html?startDate=${projects[index].startDate}&endDate=${projects[index].endDate}&duration=${projects[index].duration}">${projects[index].projectName}</a></h3>
                    <p class="dates">durasi : ${projects[index].duration} bulan</p>
                    <p class="container">${projects[index].description}
                    </p>
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

        </div>
         `;
  }

  document.getElementById("contents").innerHTML = html;
}

renderProject();