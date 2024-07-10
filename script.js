// Count students per session
const sessions = {};
studentData.forEach(student => {
    if (sessions[student.session]) {
        sessions[student.session]++;
    } else {
        sessions[student.session] = 1;
    }
});

const sessionLabels = Object.keys(sessions);
const sessionData = Object.values(sessions);

// Count students per upazila
const upazilas = {};
studentData.forEach(student => {
    if (upazilas[student.upazila]) {
        upazilas[student.upazila]++;
    } else {
        upazilas[student.upazila] = 1;
    }
});

const upazilaLabels = Object.keys(upazilas);
const upazilaData = Object.values(upazilas);

// Count blood types
const bloodTypes = {
    'A+': 0,
    'A-': 0,
    'B+': 0,
    'B-': 0,
    'AB+': 0,
    'AB-': 0,
    'O+': 0,
    'O-': 0
};

studentData.forEach(student => {
    bloodTypes[student.blood]++;
});

const bloodLabels = Object.keys(bloodTypes);
const bloodData = Object.values(bloodTypes);

// Chart.js initialization
const upazilaCtx = document.getElementById('upazilaChart').getContext('2d');
const upazilaChart = new Chart(upazilaCtx, {
    type: 'bar',
    data: {
        labels: upazilaLabels,
        datasets: [{
            label: 'Number of Students',
            data: upazilaData,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                precision: 0
            }
        }
    }
});

const sessionCtx = document.getElementById('sessionChart').getContext('2d');
const sessionChart = new Chart(sessionCtx, {
    type: 'bar',
    data: {
        labels: sessionLabels,
        datasets: [{
            label: 'Number of Students',
            data: sessionData,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                precision: 0
            }
        }
    }
});

const bloodTypeCtx = document.getElementById('bloodTypeChart').getContext('2d');
const bloodTypeChart = new Chart(bloodTypeCtx, {
    type: 'pie',
    data: {
        labels: bloodLabels,
        datasets: [{
            label: 'Blood Type Distribution',
            data: bloodData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(0, 255, 255, 0.6)',
                'rgba(255, 0, 255, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(255, 0, 255, 1)'
            ],
            borderWidth: 1
        }]
    }
});

// Share buttons using html2canvas
const shareButtons = document.querySelectorAll('.share-button');

shareButtons.forEach(button => {
    button.addEventListener('click', async () => {
        const chartContainer = button.closest('.chart-container');
        const chartCanvas = chartContainer.querySelector('canvas');

        try {
            const canvas = await html2canvas(chartCanvas);
            const imageData = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = imageData;
            a.download = 'chart.png';
            a.click();
        } catch (error) {
            console.error('Error capturing chart:', error);
        }
    });
});
