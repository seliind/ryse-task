const arrow = document.getElementById("arrow")
const navBarContainer = document.getElementById("navbar-container")
const navTexts = document.getElementsByClassName("r-nav-text")


let isNavBarOpened = false;

arrow.addEventListener("click", () => {
    if(isNavBarOpened == false) {
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


const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };


  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );