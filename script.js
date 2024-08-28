document.addEventListener("DOMContentLoaded", function() {
    // Configurar la fecha del evento
    const eventDate = new Date("2024-11-16");
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    document.getElementById('event-date').textContent = eventDate.toLocaleDateString('es-ES', options);

    // Configurar el botón de ubicación
    document.getElementById('location-button').addEventListener('click', function() {
        window.open('https://maps.google.com/?q=Iglesia+San+Pedro', '_blank');
    });

    // Configurar el botón de confirmación
    document.getElementById('confirm-button').addEventListener('click', function() {
        window.location.href = 'https://tuformulario.com/confirmacion'; // URL de tu formulario de confirmación
    });

    // Mostrar el calendario de septiembre
    const calendarContainer = document.getElementById('calendar-container');
    const septemberCalendar = generateCalendar(2024, 9); // 2024 es el año y 9 es el mes de septiembre
    calendarContainer.innerHTML = septemberCalendar;

    function generateCalendar(year, month) {
        const daysInMonth = new Date(year, month, 0).getDate();
        const firstDay = new Date(year, month - 1, 1).getDay();
        let calendarHtml = '<table><thead><tr>';

        // Encabezado de los días de la semana
        ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].forEach(day => {
            calendarHtml += `<th>${day}</th>`;
        });
        calendarHtml += '</tr></thead><tbody><tr>';

        // Espacios vacíos para alinear el primer día del mes
        for (let i = 0; i < firstDay; i++) {
            calendarHtml += '<td></td>';
        }

        // Días del mes
        for (let day = 1; day <= daysInMonth; day++) {
            if ((firstDay + day - 1) % 7 === 0 && day !== 1) {
                calendarHtml += '</tr><tr>';
            }
            calendarHtml += `<td>${day}</td>`;
        }

        // Rellenar celdas vacías al final del mes
        const totalDays = firstDay + daysInMonth;
        for (let i = totalDays; i % 7 !== 0; i++) {
            calendarHtml += '<td></td>';
        }

        calendarHtml += '</tr></tbody></table>';
        return calendarHtml;
    }
});
