// Datos del Tablero CSAT (Práctica Demostrativa)
const csatFeedbackData = [
    {
        user: "Mariana R.",
        rating: "5★",
        ratingClass: "rating-5",
        type: "positive",
        comment: "Excelente tiempo de respuesta y atención muy amable por parte del ejecutivo.",
        category: "Calidad de Servicio",
        action: "Fidelización / Reconocimiento al equipo"
    },
    {
        user: "Jorge L.",
        rating: "5★",
        ratingClass: "rating-5",
        type: "positive",
        comment: "Resolvieron mi duda en la primera llamada. Todo perfecto.",
        category: "Resolución al Primer Contacto (FCR)",
        action: "Estandarización de buena práctica"
    },
    {
        user: "Claudia P.",
        rating: "3★",
        ratingClass: "rating-3",
        type: "neutral",
        comment: "El servicio es bueno pero tardaron 2 horas en enviar la información al correo.",
        category: "Tiempo de Respuesta (SLA)",
        action: "Optimizar plantillas de envío automatizado"
    },
    {
        user: "Roberto M.",
        rating: "1★",
        ratingClass: "rating-1",
        type: "negative",
        comment: "Dificultad para encontrar la opción de soporte en el menú del portal.",
        category: "Experiencia de Plataforma / UX",
        action: "Sugerencia de simplificación de menú de ayuda"
    }
];

function filterFeedback(type) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Activar botón seleccionado
    if (event && event.target) {
        event.target.classList.add('active');
    }

    const tbody = document.getElementById('csat-table-body');
    tbody.innerHTML = '';

    const filtered = type === 'all' 
        ? csatFeedbackData 
        : csatFeedbackData.filter(item => item.type === type);

    filtered.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${item.user}</strong></td>
            <td><span class="badge-rating ${item.ratingClass}">${item.rating}</span></td>
            <td>${item.comment}</td>
            <td>${item.category}</td>
            <td><em>${item.action}</em></td>
        `;
        tbody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    filterFeedback('all');

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});