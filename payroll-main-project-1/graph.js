const ctx = document.getElementById('attendanceLeavePerformanceBarChart').getContext('2d');

// Random data for Attendance, Leave, and Performance
const employeeNames = [
    'Sibongile Nkosi', 'Lungile Moyo', 'Thabo Molefe', 'Keshav Naidoo', 'Zanele Khumalo', 
    'Sipho Zulu', 'Naledi Moeketsi', 'Farai Gumbo', 'Karabo Dlamini', 'Fatima Patel'
];

const attendanceData = [12, 15, 9, 13, 10, 14, 7, 11, 13, 8]; // Number of days attended
const leaveData = [3, 5, 2, 4, 6, 3, 1, 4, 2, 3]; // Number of leave days taken
const performanceData = [80, 90, 75, 85, 92, 88, 78, 81, 85, 80]; // Performance score (out of 100)

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: employeeNames,  // Employee names as labels
        datasets: [
            {
                label: 'Attendance (Days)',
                data: attendanceData, // Attendance data
                backgroundColor: 'rgba(64, 87, 102, 0.6)', // Color for Attendance bars
                borderColor: '#405766',
                borderWidth: 1
            },
            {
                label: 'Leave (Days)',
                data: leaveData, // Leave data
                backgroundColor: 'rgba(93, 173, 226, 0.6)', // Color for Leave bars
                borderColor: '#5DACE2',
                borderWidth: 1
            },
            {
                label: 'Performance (%)',
                data: performanceData, // Performance data
                backgroundColor: 'rgba(92, 184, 92, 0.6)', // Color for Performance bars
                borderColor: '#5CB85C',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        aspectRatio: 2, // Increase aspect ratio to make the graph larger
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Employees'
                }
            }
        }
    }
});
