<script setup>
import AnalyticsEarningReportsWeeklyOverview from '@/views/dashboards/analytics/daaf/AnalyticsEarningReportsWeeklyOverview.vue'
import AnalyticsSalesByCountries from '@/views/dashboards/analytics/daaf/AnalyticsSalesByCountries.vue'
import AnalyticsSalesOverview from '@/views/dashboards/analytics/daaf/AnalyticsSalesOverview.vue'
import AnalyticsSupportTracker from '@/views/dashboards/analytics/daaf/AnalyticsSupportTracker.vue'
import AnalyticsTotalEarning from '@/views/dashboards/analytics/daaf/AnalyticsTotalEarning.vue'
import AnalyticsWebsiteAnalytics from '@/views/dashboards/analytics/daaf/AnalyticsWebsiteAnalytics.vue'
import CardStatisticsVertical from '@/views/dashboards/analytics/daaf/CardStatisticsVertical.vue'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()
const currentTheme = vuetifyTheme.current.value.colors

const statisticsVertical = {
  title: 'Dépenses globales',
  color: 'error',
  icon: 'tabler-credit-card',
  stats: '970 000 000 FCFA',
  height: 120,
  series: [{
    data: [
      300,
      350,
      330,
      380,
      340,
      400,
      380,
    ],
  }],
  chartOptions: {
    chart: {
      height: 110,
      type: 'area',
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    tooltip: { enabled: false },
    markers: {
      colors: 'transparent',
      strokeColors: 'transparent',
    },
    grid: { show: false },
    colors: [currentTheme.error],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.8,
        opacityFrom: 0.6,
        opacityTo: 0.1,
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    xaxis: {
      show: true,
      lines: { show: false },
      labels: { show: false },
      stroke: { width: 0 },
      axisBorder: { show: false },
    },
    yaxis: {
      stroke: { width: 0 },
      show: false,
    },
  },
}
</script>

<template>
  <VRow class="match-height">
    <!-- 👉 Website analytics -->
    <VCol
      cols="12"
      md="6"
    >
      <AnalyticsWebsiteAnalytics />
    </VCol>

    <!-- 👉 Dépenses globales -->
    <VCol
      cols="12"
      md="3"
      sm="6"
    >
      <CardStatisticsVertical v-bind="statisticsVertical" />
    </VCol>

    <!-- 👉 Détails des dépenses -->
    <VCol
      cols="12"
      md="3"
      sm="6"
    >
      <AnalyticsSalesOverview />
    </VCol>

    <!-- 👉 Budget disponible -->
    <VCol
      cols="12"
      md="6"
    >
      <AnalyticsEarningReportsWeeklyOverview />
    </VCol>

    <!-- 👉 Budget prévisionnel -->
    <VCol
      cols="12"
      md="6"
    >
      <AnalyticsSupportTracker />
    </VCol>

    <!-- 👉 Sales by Countries -->
    <VCol
      cols="12"
      sm="6"
      lg="6"
    >
      <AnalyticsSalesByCountries />
    </VCol>

    <!-- 👉 Total Earning -->
    <VCol
      cols="12"
      sm="6"
      lg="6"
    >
      <AnalyticsTotalEarning />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>
