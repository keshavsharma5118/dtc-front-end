document.addEventListener("DOMContentLoaded", function() {
    const dateTimeElements = document.querySelectorAll("#date-time");
    const now = new Date();
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-GB', options);
    const formattedTime = now.toTimeString().split(' ')[0].slice(0, 5);

    dateTimeElements.forEach(element => {
        element.textContent = `${formattedDate.replace(/ /g, '-')} || ${formattedTime}`;
    });
});
