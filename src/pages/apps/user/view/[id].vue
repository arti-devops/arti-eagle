<script setup>
import { useEmployeeListStore } from '@/views/apps/user/employeeListStore'
import UserBioPanel from '@/views/apps/user/view/UserBioPanel.vue'
import UserStatisticsTransactions from '@/views/apps/user/view/UserStatisticsTransactions.vue'
import UserTabAbsence from '@/views/apps/user/view/UserTabAbsence.vue'
import UserTabCourse from '@/views/apps/user/view/UserTabCourse.vue'
import UserTabEvaluation from '@/views/apps/user/view/UserTabEvaluation.vue'
import UserTabProject from '@/views/apps/user/view/UserTabProject.vue'


const employeeListStore = useEmployeeListStore()
const route = useRoute()
const userData = ref()
const userTab = ref(null)

// 👉 Prepare data to be available to Project Tab
const selectedDate = ref("2023-04-12")

const tabs = [
  {
    icon: 'tabler-24-hours',
    title: "Check-in",
  },
  {
    icon: 'tabler-user-check',
    title: 'Projets',
  },
  {
    icon: 'tabler-book-2',
    title: 'Formations',
  },
  {
    icon: 'tabler-ad-2',
    title: 'Evaluations',
  },
]

employeeListStore.fetchUser(Number(route.params.id)).then(response => {
  userData.value = response.data
})

// 👉 Prepare data to be available to Project Tab
employeeListStore.fetchEmployeeTasks(Number(route.params.id))
employeeListStore.fetchEmployeeTrainings(Number(route.params.id))
employeeListStore.fetchEmployeeEvaluations(Number(route.params.id))
employeeListStore.fetchEmployeeLogbook(Number(route.params.id), selectedDate.value)
</script>

<template>
  <VRow v-if="userData">
    <VCol
      cols="12"
      md="4"
      lg="3"
    >
      <UserBioPanel :user-data="userData.bio" />  <!-- passage de données à UserBioPanel -->
    </VCol>

    <VCol
      cols="12"
      md="8"
      lg="9"
    >
      <UserStatisticsTransactions :user-data="userData.metadata" />
      <br>
      <VTabs
        v-model="userTab"
        class="v-tabs-pill"
      >
        <VTab
          v-for="tab in tabs"
          :key="tab.icon"
        >
          <VIcon
            :size="18"
            :icon="tab.icon"
            class="me-1"
          />
          <span>{{ tab.title }}</span>
        </VTab>
      </VTabs>

      <VWindow
        v-model="userTab"
        class="mt-6 disable-tab-transition"
        :touch="false"
      >
        <VWindowItem>
          <UserTabAbsence :date-data="selectedDate" />
        </VWindowItem>
        
        <VWindowItem>
          <UserTabProject />
        </VWindowItem>

        <VWindowItem>
          <UserTabCourse />
        </VWindowItem>

        <VWindowItem>
          <UserTabEvaluation />
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
