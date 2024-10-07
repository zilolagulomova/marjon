<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col h-full justify-between p-6 gap-5">
    <div></div>
    <div>
      <FormLabel :text="$t('phone_number')"/>
      <FormInput
          placeholder="000-00-00"
          type="text"
          v-mask="['## ### ## ##']"
          v-model="form.values.phone"
      >
        <template #prefix>
          +998
        </template>
      </FormInput>
    </div>
    <div>
      <CommonButton :text="$t('registration')" class="w-full" variant="primary"/>
      <CommonButton @click="$emit('toggle')" :text="$t('enter')" class="w-full  mt-3.5" variant="secondary"/>
    </div>
  </div>
</template>

<style scoped>

</style>