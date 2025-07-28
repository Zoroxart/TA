function createVaccinationRecord(patientId, vaccineName) {
  // Outer function scope (closed over by inner functions)
  const id = patientId;
  const vaccine = vaccineName;
  const doses = []; // This array is preserved in closure

  // Inner function 1: Adds a dose to the record
  function addDose(doseNo, dateGiven, nurseName) {
    const dose = {
      doseNo,
      date: new Date(dateGiven),
      nurse: nurseName
    };
    doses.push(dose);

    console.log("Dose Added:");
    console.log(`  Patient ID: ${id}`);
    console.log(`  Vaccine: ${vaccine}`);
    console.log(`  Dose No: ${doseNo}`);
    console.log(`  Date: ${dose.date.toDateString()}`);
    console.log(`  Nurse: ${nurseName}`);
  }

  // Inner function 2: Shows all recorded doses
  function showDoseHistory() {
    console.log(`Dose History for Patient ID: ${id} | Vaccine: ${vaccine}`);
    if (doses.length === 0) {
      console.log("  No doses recorded.");
      return;
    }

    doses.forEach(dose => {
      console.log(`  Dose ${dose.doseNo}: ${dose.date.toDateString()}, Nurse: ${dose.nurse}`);
    });
  }

  // Returning the functions that form the closure
  return {
    addDose,
    showDoseHistory
  };
}

// Usage Example:
const record = createVaccinationRecord("PAT001", "COVID-19");

// These still have access to `id`, `vaccine`, and `doses` via closure
record.addDose(1, "2025-07-01", "Nurse Joy");
record.addDose(2, "2025-08-01", "Nurse John");

record.showDoseHistory();
