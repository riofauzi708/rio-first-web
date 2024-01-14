async function getTestimonialData() {
    const response = await fetch('https://api.npoint.io/5d13ac3b5faee9b78fe0');
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Error loading data');
    }
}

async function displayTestimonials(testimonials) {
    const testimonialHTML = testimonials.map((element) => {
        return `<div class="list-testi">
            <img class="img-testi" src="${element.image}" alt=""/>
            <p class="p1">${element.content}</p>
            <p class="p2">- ${element.author}</p>
        </div>`;
    });

    document.getElementById("testimonials").innerHTML = testimonialHTML.join(" ");
}

async function allTestimonial() {
    const testimonialsContainer = document.getElementById("testimonials");
    testimonialsContainer.innerHTML = "Loading...";

    try {
        const testimonials = await getTestimonialData();
        await displayTestimonials(testimonials);
    } catch (error) {
        console.error(error);
    }
}

allTestimonial();

async function filteredTestimonial(rating) {
    const testimonialsContainer = document.getElementById("testimonials");
    testimonialsContainer.innerHTML = "Loading...";

    try {
        const testimonials = await getTestimonialData();
        const filteredTestimonial = testimonials.filter((element) => element.rating === rating);
        await displayTestimonials(filteredTestimonial);
    } catch (error) {
        console.error(error);
    }
}