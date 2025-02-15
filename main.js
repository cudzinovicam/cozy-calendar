const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevMonth');
const nextBtn = document.getElementById('nextMonth');

let currDate = new Date();

const updateCalendar = () => {
    const currYear = currDate.getFullYear();
    const currMonth = currDate.getMonth();

    const firstDay = new Date(currYear, currMonth, 0);
    const lastDay = new Date(currYear, currMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    let datesHTML = '';

    for(let i = firstDayIndex; i > 0; i--){
        const prevDate = new Date(currYear, currMonth, 0 - i + 1);
        datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`
    }

    for(let i = 1; i <= totalDays; i++){
        const date = new Date(currYear, currMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString ? 'active' : '';
        datesHTML += `<div class="date ${activeClass}">${i}</div>`;
    }

    for(let i = 1; i <= 7 - lastDayIndex; i++) {
        const nextDate = new Date(currYear, currMonth + 1, i);
        datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
    }

    datesElement.innerHTML = datesHTML;
}

prevBtn.addEventListener('click', () => {
    currDate.setMonth(currDate.getMonth() -1);
    updateCalendar();
})

nextBtn.addEventListener('click', () => {
    currDate.setMonth(currDate.getMonth() + 1);
    updateCalendar();
})

updateCalendar();