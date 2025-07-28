function createVaccinationRecord(patientId, vaccineName) {
  const id = patientId;
  const vaccine = vaccineName;
  const doses = [];

  console.log("Vaccination Record Created:");
  console.log(`  Patient ID: ${id}`);
  console.log(`  Vaccine Name: ${vaccine}`);

  function addDose(doseNo, dateGiven, nurseName) {
    const dose = {
      doseNo,
      date: new Date(dateGiven),
      nurse: nurseName
    };
    doses.push(dose);

    console.log("New Dose Added:");
    console.log(`  Dose No: ${doseNo}`);
    console.log(`  Date Given: ${dose.date.toDateString()}`);
    console.log(`  Nurse Name: ${nurseName}`);
  }

  function showDoseHistory() {
    console.log(`Dose History for Patient ID: ${id}`);
    if (doses.length === 0) {
      console.log("  No doses recorded yet.");
      return;
    }

    doses.forEach(dose => {
      console.log(`  Dose ${dose.doseNo}: ${dose.date.toDateString()}, Nurse: ${dose.nurse}`);
    });
  }

  // Return an object with access to the closure functions
  return {
    addDose,
    showDoseHistory
  };
}

// Example Usage:
const patientRecord = createVaccinationRecord("PAT456", "Hepatitis B");

document.getElementById('addDoseBtn').addEventListener('click', () => {
  // Example input: dose number 1, date, and nurse name
  patientRecord.addDose(1, "2025-07-01", "Nurse Clara");
});

document.getElementById('showHistoryBtn').addEventListener('click', () => {
  patientRecord.showDoseHistory();
});
