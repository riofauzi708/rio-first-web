function getTestimonialData() {
    return new Promise (( resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open('GET', 'https://api.npoint.io/5d13ac3b5faee9b78fe0', true)
        xhr.onload = () => {
            console.log("status", xhr.status)

            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText)
                resolve(response)
            }
            else {
                reject ('Error loading data')
            }
        }

        xhr.onerror = () => {
        reject("Network Error!")
        }

        xhr.send()
    })
}


async function allTestimonial() {
    const testimonials = await getTestimonialData()
    const testimonialHTML = testimonials.map((element) => {
        return `<div class="list-testi">
        <img class="img-testi" src="${element.image}" alt=""/>
        <p class="p1">${element.content}</p>
        <p class="p2">- ${element.author}</p>
    </div>`;
    });

    document.getElementById("testimonials").innerHTML = testimonialHTML.join(" ");
}

allTestimonial();

async function filteredTestimonial(rating) {
    const testimonials = await getTestimonialData()

    const filteredTestimonial = testimonials.filter((element) => element.rating === rating);

    const filteredTestimonialHTML = filteredTestimonial.map((element) => {
        return `<div class="list-testi">
            <img class="img-testi" src="${element.image}" alt=""/>
            <p class="p1">${element.content}</p>
            <p class="p2">- ${element.author}</p>
        </div>`;
    });

    document.getElementById("testimonials").innerHTML = filteredTestimonialHTML.join(" ");
}


