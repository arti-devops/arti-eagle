<template>
  <VCard>
    <VCardText>
      <div class="d-flex align-center justify-space-between">
        <span class="text-sm text-disabled">Détail des dépenses</span>
        <span class="text-warning">+18.2%</span>
      </div>
      <h5 class="text-h5">
        970M FCFA
      </h5>
    </VCardText>

    <VCardText>
      <VRow no-gutters>
        <VCol cols="5">
          <div class="d-flex align-center mb-3">
            <VAvatar
              color="info"
              variant="tonal"
              :size="30"
              rounded
              class="me-2"
            >
              <VIcon
                size="18"
                icon="tabler-shopping-cart"
              />
            </VAvatar>

            <span>Invest.</span>
          </div>
          <h6 class="text-h6">
            62.2%
          </h6>
          <span class="text-sm text-disabled">6,440</span>
        </VCol>

        <VCol cols="2">
          <div class="d-flex flex-column align-center justify-center h-100">
            <VDivider
              vertical
              class="mx-auto"
            />

            <div class="pa-1">
              <VChip size="20">
                <span class="text-xs pa-1">ET</span>
              </VChip>
            </div>

            <VDivider
              vertical
              class="mx-auto"
            />
          </div>
        </VCol>

        <VCol
          cols="5"
          class="text-end"
        >
          <div class="d-flex align-center justify-end mb-3">
            <span class="me-2">Fonct.</span>

            <VAvatar
              color="primary"
              variant="tonal"
              :size="30"
              rounded
            >
              <VIcon
                size="18"
                icon="tabler-link"
              />
            </VAvatar>
          </div>
          <h6 class="text-h6">
            25.5%
          </h6>
          <span class="text-sm text-disabled">12,749</span>
        </VCol>
      </VRow>

      <div class="mt-6">
        <VProgressLinear
          model-value="80"
          color="info"
          height="8"
          rounded
        />
      </div>
    </VCardText>
  </VCard>
</template>
