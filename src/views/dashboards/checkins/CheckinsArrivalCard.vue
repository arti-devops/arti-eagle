<script setup>
import { fullTimeToHourMinuteFormatter, resolveLocalDateVariant, subStringNameForAvatar } from '@/plugins/helpers';
import { avatarText } from '@core/utils/formatters';

import { useCheckinStore } from '@/views/dashboards/checkins/useCheckinStore';

const checkinStore = useCheckinStore()
const checkinData = ref()
const metaData = ref()

function fetchData(){
  checkinStore.fetchCheckin().then(response => {
    checkinData.value = response.data.checkins.checkins
    metaData.value = response.data.checkins.metadata
  })}

fetchData()
</script>

<template>
  <VCard
    v-if="checkinData"
    title="Pointages"
    :subtitle="metaData.lateCount + ' retards sur ' + metaData.presence + ' présences'"
  >
    <template #append>
      <div class="mt-n4 me-n2">
        <span class="text-sm text-disabled">{{ resolveLocalDateVariant(metaData.logDate) }}</span>
        
        <VBtn
          icon
          color="default"
          size="x-small"
          variant="plain"
        >
          <VIcon
            size="22"
            icon="tabler-refresh"
            :on-click="fetchData()"
          />
        </VBtn>
      </div>
    </template>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="checkin in checkinData"
          :key="checkin.positionId"
        >
          <template #prepend>
            <VAvatar
              rounded
              size="34"
              color="secondary"
              variant="tonal"
            >
              <span class="font-weight-semibold">
                {{ avatarText(subStringNameForAvatar(checkin.fullName)) }}
              </span>
            </VAvatar>
          </template>

          <VListItemTitle class="font-weight-medium">
            <RouterLink
              :to="{ name: 'apps-user-view-id', params: { id: checkin.positionId } }"
              class="font-weight-medium user-list-name"
            >
              {{ checkin.fullName }}
            </RouterLink>
          </VListItemTitle>
          <VListItemSubtitle class="opacity-100 text-disabled">
            {{ checkin.logCount }} pointages
          </VListItemSubtitle>

          <template #append>
            <div class="d-flex align-center">
              <VChip
                label
                :color="checkin.isLate ? 'error' : 'secondary'"
              >
                {{ fullTimeToHourMinuteFormatter(checkin.checkIn) }}
              </VChip>
            </div>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
  <VCard
    v-else
    cols="12"
    sm="6"
    lg="6"
  >
    <VProgressCircular
      indeterminate
      color="primary"
    />
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 19px;
}
</style>