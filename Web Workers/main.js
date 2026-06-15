// const worker = new Worker("./worker.js");

// worker.postMessage(patients);

// worker.onmessage = (e) => {
//     setProcessedData(e.data);
// };


const worker = new Worker("./worker.js");

const statusDiv = document.getElementById("status");
const btn = document.getElementById("processBtn");

function generatePatients(count) {
    const doctors = [
        "Dr. Sharma",
        "Dr. Gupta",
        "Dr. Singh",
        "Dr. Kumar"
    ];

    const patients = [];

    for (let i = 0; i < count; i++) {
        patients.push({
            id: i,
            age: Math.floor(Math.random() * 80) + 1,
            doctor:
                doctors[Math.floor(Math.random() * doctors.length)]
        });
    }

    return patients;
}

btn.addEventListener("click", () => {
    statusDiv.innerText = "Generating Data...";

    const patients = generatePatients(500000);

    statusDiv.innerText =
        "Processing 500,000 patients in Worker...";

    console.time("worker-processing");

    worker.postMessage(patients);
});

worker.onmessage = (event) => {
    console.timeEnd("worker-processing");

    statusDiv.innerHTML =
        "<pre>" +
        JSON.stringify(event.data, null, 2) +
        "</pre>";
};