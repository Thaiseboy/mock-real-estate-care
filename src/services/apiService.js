// src/services/apiService.js

const mockReports = [
  {
    id: "99cb",
    title: "Nieuw",
    damage: true,
    maintenance: true,
    technical: true,
    modification: true,
    damageDetails: {
      location: "net",
      newDamage: "yes",
      damageType: "moedwillig",
      date: "2024-07-28",
      urgentAction: "yes",
      description: "nvt",
      photos: [],
    },
    maintenanceDetails: {
      location: "Amsterdam",
      maintenanceType: "schilderwerk",
      urgentAction: "yes",
      costEstimate: "500-1500",
    },
    technicalDetails: {
      location: "Jordaan",
      installationType: "luchtverversing",
      reportedIssues: "NVT",
      testProcedure: "yes",
      remarks: "NVT",
    },
    modificationDetails: {
      location: "NVT",
      executedBy: "onbekend",
      modificationDescription: "NVTVTV",
      actionToTake: "laten verwijderen",
      remarks: "nvtvt",
      photos: [],
    },
  },
];

export const apiService = {
  async fetchReports() {
    try {
      // Gebruik mock data in plaats van een API-aanroep
      return mockReports;
    } catch (error) {
      console.error("Error fetching reports:", error);
      throw error;
    }
  },

  async saveReport(report) {
    try {
      // Voeg of update de rapportage in de mock data array
      const index = mockReports.findIndex((r) => r.id === report.id);
      if (index > -1) {
        // Update bestaand rapport
        mockReports[index] = report;
      } else {
        // Voeg nieuw rapport toe
        report.id = new Date().getTime().toString(); // Genereer een ID voor nieuwe rapporten
        mockReports.push(report);
      }
      return report;
    } catch (error) {
      console.error("Error saving report:", error);
      throw error;
    }
  },

  async deleteReport(reportId) {
    try {
      // Verwijder rapportage uit de mock data array
      const index = mockReports.findIndex((r) => r.id === reportId);
      if (index > -1) {
        mockReports.splice(index, 1);
      }
    } catch (error) {
      console.error("Error deleting report:", error);
      throw error;
    }
  },
};
