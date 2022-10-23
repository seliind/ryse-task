const arrow = document.getElementById("arrow")
const navBarContainer = document.getElementById("navbar-container")
const navTexts = document.getElementsByClassName("r-nav-text")


let isNavBarOpened = false;

arrow.addEventListener("click", () => {
    if (isNavBarOpened === false) {
        navBarContainer.classList.remove("col-1")
        navBarContainer.classList.add("col-2")
        isNavBarOpened = true
        arrow.innerHTML = '<i class="fa-solid fa-angle-left fa-xl"></i>'
    }
    else {
        navBarContainer.classList.add("col-1")
        navBarContainer.classList.remove("col-2")
        isNavBarOpened = false
        arrow.innerHTML = '<i class="fa-solid fa-angle-right fa-xl"></i>'
    }
    Array.from(navTexts).forEach(element => {
        element.classList.toggle("d-none")
    });
})


const balance = document.getElementById("balance")
let clientCount = document.getElementById("client-count")
const clientPercentage = document.getElementById("client-percentage")
const invoiceCount = document.getElementById("invoice-count")
const invoicePercentage = document.getElementById("invoice-percentage")

const emails = document.getElementById("emails")



fetch("data/data.json").then(response => response.json())
    .then(response => {
        balance.innerHTML = `$${response.balance}`
        clientCount.innerHTML = `$${response.new_client_count}`
        clientPercentage.innerHTML = `$${response.new_client_percentage}`
        invoiceCount.innerHTML = `$${response.invoices_overdue_count}`
        invoicePercentage.innerHTML = `$${response.invoices_overdue_percentange}`
        response.emails.forEach(email => {
            emails.innerHTML += `
            <div class="row my-2">
            <div class="card border-0 shadow rounded-4 h-100">
            <div class="card-body d-flex justify-content-between text-secondary text-sm">
                <img style="height: 25px; width:25px;" class="rounded"
                    src="${email.url}" alt="">
                <p>${email.user}</p>
                <p>${email.subject}</p>
                <p>${email.time}</p>
            </div>
        </div>
            `
        });
    })


const labels = [
    'February 15',
    'February 16',
    'February 17',
    'February 18',
    'February 19',
    'February 20',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [10000, 15000, 17523, 20123, 20589, 22300],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
};


const myChart = new Chart(
    document.getElementById('myChart'),
    config
);