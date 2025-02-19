<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Tableau de bord - Personnel</h1>
      <p class="mt-2 text-gray-600">Scanner les tickets-repas des élèves</p>
    </div>

    <div class="grid gap-6">
      <QRCodeScanner @scanned="handleScan" />
      
      <div v-if="lastScan" class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold mb-4">Dernier scan</h2>
        <div class="space-y-2">
          <p class="text-gray-600">
            <span class="font-medium">ID Élève:</span> {{ lastScan.studentId }}
          </p>
          <p class="text-gray-600">
            <span class="font-medium">Heure:</span> {{ lastScan.time }}
          </p>
          <p :class="['font-medium', lastScan.valid ? 'text-green-600' : 'text-red-600']">
            {{ lastScan.valid ? 'Ticket valide' : 'Ticket invalide' }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import {ref} from 'vue';

interface ScanResult {
  studentId: string;
  time: string;
  valid: boolean;
}

const lastScan = ref<ScanResult | null>(null);

const handleScan = (value: string) => {
  // Format attendu: "student:ID"
  const studentId = value.split(':')[1];
  
  // TODO: Vérifier la validité du ticket dans la base de données
  const isValid = true;

  lastScan.value = {
    studentId,
    time: dayjs().format('HH:mm:ss'),
    valid: isValid
  };
};
</script>