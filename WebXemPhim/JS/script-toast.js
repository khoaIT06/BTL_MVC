document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.form-with-toast');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const submitButton = form.querySelector('input[type="submit"]');
            const toastTitle = submitButton.getAttribute('data-toast-title');
            const toastMessage = submitButton.getAttribute('data-toast-message');
            const toastType = submitButton.getAttribute('data-toast-type');
            const toastDuration = parseInt(submitButton.getAttribute('data-toast-duration'), 10);

            showSuccessToast(toastTitle, toastMessage, toastType, toastDuration);
            setTimeout(() => {
                form.submit();
            }, toastDuration);
        });
    });
});

function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");

        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when clicked
        toast.onclick = function (e) {
            if (e.target.closest(".toast-close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: "ri-checkbox-circle-line",
            info: "ri-information-line",
            warning: "ri-error-warning-line",
            error: "ri-error-warning-line"
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add("toast", `toast-${type}`);
        toast.style.animation = `slideInLeft ease .4s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
                        <div class="toast-icon">
                            <i class="${icon}"></i>
                        </div>
                        <div class="toast-body">
                            <h3 class="toast-title">${title}</h3>
                            <p class="toast-msg">${message}</p>
                        </div>
                        <div class="toast-close">
                            <i class="ri-close-line"></i>
                        </div>
                    `;
        main.appendChild(toast);
    }
}