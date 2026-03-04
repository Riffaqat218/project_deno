document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('action-btn');
    if (btn) {
        btn.addEventListener('click', () => {
            alert('Button clicked! The workflow testing can begin.');
        });
    }
});
