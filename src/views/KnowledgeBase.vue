<template>
  <div class="page-container d-flex flex-column min-vh-100">
    <HeaderComponent />
    <div class="content-wrap container flex-grow-1 mt-4">
      <h1 class="mb-4 head-text">Kennisbase/Documentatie</h1>
      <div v-if="reports.length" class="list-group">
        <button v-for="report in reports" :key="report.id" class="list-group-item list-group-item-action" @click="showReportDetails(report.id)">
          {{ report.title }}
        </button>
      </div>
      <div v-else class="alert alert-info">
        Geen rapporten gevonden.
      </div>
      
      <!-- Modal -->
      <div class="modal fade" id="reportModal" tabindex="-1" aria-labelledby="reportModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="reportModalLabel">{{ selectedReport.title }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p><strong>Titel van het rapport:</strong> {{ selectedReport.title }}</p>
              
              <!-- Damage Details -->
              <div v-if="selectedReport.damage">
                <h6>Schade Opnemen:</h6>
                <p><strong>Datum:</strong> {{ selectedReport.damageDetails.date }}</p>
                <p><strong>Locatie:</strong> {{ selectedReport.damageDetails.location }}</p>
                <p><strong>Nieuwe Schade:</strong> {{ selectedReport.damageDetails.newDamage }}</p>
                <p><strong>Soort Schade:</strong> {{ selectedReport.damageDetails.damageType }}</p>
                <p><strong>Acute Actie Vereist:</strong> {{ selectedReport.damageDetails.urgentAction }}</p>
                <p><strong>Omschrijving:</strong> {{ selectedReport.damageDetails.description }}</p>
                <div v-if="selectedReport.damageDetails.photos && selectedReport.damageDetails.photos.length">
                  <h6>Foto's van Schade Opnemen:</h6>
                  <div class="photos">
                    <img v-for="photo in selectedReport.damageDetails.photos" :src="photo.url" :key="photo.name" :alt="photo.name" class="img-thumbnail me-2">
                  </div>
                </div>
              </div>
              
              <!-- Maintenance Details -->
              <div v-if="selectedReport.maintenance">
                <h6>Achterstallig Onderhoud Opnemen:</h6>
                <p><strong>Locatie:</strong> {{ selectedReport.maintenanceDetails.location }}</p>
                <p><strong>Soort Onderhoud:</strong> {{ selectedReport.maintenanceDetails.maintenanceType }}</p>
                <p><strong>Acute Actie Vereist:</strong> {{ selectedReport.maintenanceDetails.urgentAction }}</p>
                <p><strong>Kostenindicatie:</strong> {{ selectedReport.maintenanceDetails.costEstimate }}</p>
                <div v-if="selectedReport.maintenanceDetails.photos && selectedReport.maintenanceDetails.photos.length">
                  <h6>Foto's van Achterstallig Onderhoud:</h6>
                  <div class="photos">
                    <img v-for="photo in selectedReport.maintenanceDetails.photos" :src="photo.url" :key="photo.name" :alt="photo.name" class="img-thumbnail me-2">
                  </div>
                </div>
              </div>
              
              <!-- Technical Inspection Details -->
              <div v-if="selectedReport.technical">
                <h6>Technische Installaties Inspecteren:</h6>
                <p><strong>Locatie:</strong> {{ selectedReport.technicalDetails.location }}</p>
                <p><strong>Soort Installatie:</strong> {{ selectedReport.technicalDetails.installationType }}</p>
                <p><strong>Gemelde Storingen:</strong> {{ selectedReport.technicalDetails.reportedIssues }}</p>
                <p><strong>Test Procedure:</strong> {{ selectedReport.technicalDetails.testProcedure }}</p>
                <p><strong>Opmerkingen:</strong> {{ selectedReport.technicalDetails.remarks }}</p>
                <div v-if="selectedReport.technicalDetails.photos && selectedReport.technicalDetails.photos.length">
                  <h6>Foto's van Technische Installaties:</h6>
                  <div class="photos">
                    <img v-for="photo in selectedReport.technicalDetails.photos" :src="photo.url" :key="photo.name" :alt="photo.name" class="img-thumbnail me-2">
                  </div>
                </div>
              </div>
              
              <!-- Modification Inventory Details -->
              <div v-if="selectedReport.modification">
                <h6>Modificaties Inventariseren:</h6>
                <p><strong>Locatie Aangetroffen Modificatie:</strong> {{ selectedReport.modificationDetails.location }}</p>
                <p><strong>Uitgevoerd Door:</strong> {{ selectedReport.modificationDetails.executedBy }}</p>
                <p><strong>Beschrijving Modificatie:</strong> {{ selectedReport.modificationDetails.modificationDescription }}</p>
                <p><strong>Te Ondernemen Actie:</strong> {{ selectedReport.modificationDetails.actionToTake }}</p>
                <p><strong>Opmerkingen:</strong> {{ selectedReport.modificationDetails.remarks }}</p>
                <div v-if="selectedReport.modificationDetails.photos && selectedReport.modificationDetails.photos.length">
                  <h6>Foto's van Modificaties:</h6>
                  <div class="photos">
                    <img v-for="photo in selectedReport.modificationDetails.photos" :src="photo.url" :key="photo.name" :alt="photo.name" class="img-thumbnail me-2">
                  </div>
                </div>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sluiten</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap';
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import screenshot from '../assets/screenshot.png'; // Import de screenshot afbeelding

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
      photos: [{ name: "screenshot", url: screenshot }]
    },
    maintenanceDetails: {
      location: "jjijijjij",
      maintenanceType: "schilderwerk",
      urgentAction: "yes",
      costEstimate: "500-1500",
      photos: []
    },
    technicalDetails: {
      location: "HHHHHHH",
      installationType: "luchtverversing",
      reportedIssues: "NVT",
      testProcedure: "yes",
      remarks: "NVT",
      photos: []
    },
    modificationDetails: {
      location: "NVT",
      executedBy: "onbekend",
      modificationDescription: "NVTVTV",
      actionToTake: "laten verwijderen",
      remarks: "nvtvt",
      photos: []
    }
  }
];

export default {
  name: 'KnowledgeBase',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      reports: [],
      selectedReport: {
        damageDetails: {},
        maintenanceDetails: {},
        technicalDetails: {},
        modificationDetails: {}
      }
    };
  },
  async created() {
    await this.fetchReports();
  },
  methods: {
    async fetchReports() {
      try {
        // Gebruik mock data in plaats van een API-aanroep
        this.reports = mockReports;
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    },
    async showReportDetails(reportId) {
      try {
        // Gebruik mock data in plaats van een API-aanroep
        this.selectedReport = mockReports.find(report => report.id === reportId) || {
          damageDetails: {},
          maintenanceDetails: {},
          technicalDetails: {},
          modificationDetails: {}
        };
        const reportModal = new bootstrap.Modal(document.getElementById('reportModal'));
        reportModal.show();
      } catch (error) {
        console.error('Error fetching report details:', error);
      }
    }
  }
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrap {
  flex: 1;
  padding-bottom: 50px;
}

h1 {
  font-size: 24px;
  color: var(--secondary-color);
}

.list-group-item {
  border: 1px solid var(--secondary-color);
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
}

.list-group-item:hover {
  background-color: var(--primary-color);
  color: white;
}

.head-text {
  color: white;
}

.photos img {
  max-width: 150px;
  max-height: 150px;
}
</style>