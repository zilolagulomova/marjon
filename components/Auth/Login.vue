<template>
  <div class="flex flex-col h-full justify-between p-6 gap-5">
    <div></div>
    <div>
      <FormLabel :text="$t('phone_number')">
        <ClientOnly>
          <FormInput
              placeholder="000-00-00"
              type="text"
              v-mask="['## ### ## ##']"
          >
            <template #prefix>
              +998
            </template>
          </FormInput>
        </ClientOnly>
      </FormLabel>
    </div>
    <div>
      <CommonButton :text="$t('enter')" class="w-full " variant="primary"/>
      <CommonButton @click="$emit('toggle')" :text="$t('registration')" class="w-full mt-3.5" variant="secondary"/>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>


<style scoped>

</style>