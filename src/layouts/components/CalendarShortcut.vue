<script setup>
import { bus } from '@/plugins/eventBus';
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue';

function onButtonClick(e) {
  // Emit custom event with event name and optional data
  bus.emit(e)
}
</script>

<template>
  <AppDateTimePicker 
    :model-value="new Date().toJSON().slice(0, 10)"
    label="Choisir une date"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d', altLocal: 'fr-FR' }"
    @input="onButtonClick($event.target.value)"
  />
</template>
