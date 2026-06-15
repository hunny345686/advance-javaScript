// This is a simple Web Worker script that listens for messages from the main thread, processes the data by multiplying it by 2, and then sends the result back to the main thread.

// self.onmessage = (event) => {
//     const result = event.data * 2;

//     self.postMessage(result);
// };


self.onmessage = (event) => {
    const patients = event.data;

    const doctorStats = {};

    for (const patient of patients) {
        const doctor = patient.doctor;

        if (!doctorStats[doctor]) {
            doctorStats[doctor] = {
                totalPatients: 0,
                totalAge: 0,
                averageAge: 0
            };
        }

        doctorStats[doctor].totalPatients++;
        doctorStats[doctor].totalAge += patient.age;
    }

    Object.keys(doctorStats).forEach((doctor) => {
        const stats = doctorStats[doctor];

        stats.averageAge = (
            stats.totalAge / stats.totalPatients
        ).toFixed(2);
    });

    self.postMessage(doctorStats);
};