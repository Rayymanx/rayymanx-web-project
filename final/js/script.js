const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || message === "") {

            formMessage.textContent = "Please complete all fields before submitting.";
            formMessage.style.color = "red";

        } else {

            formMessage.textContent = "Thank you! Your message has been submitted.";
            formMessage.style.color = "#2D6A4F";

            contactForm.reset();
        }
    });
}

const productSearch = document.getElementById("productSearch");

if (productSearch) {

    productSearch.addEventListener("keyup", function() {

        const searchText = productSearch.value.toLowerCase();

        const products = document.querySelectorAll(".product");

        products.forEach(function(product) {

            const productName = product.textContent.toLowerCase();

            if (productName.includes(searchText)) {

                product.style.display = "block";

            } else {

                product.style.display = "none";
            }
        });
    });
}
