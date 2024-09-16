import { defineNuxtPlugin } from '#app';
import { createApp } from 'vue';
import Toast from '~/components/Common/Toast.vue';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('showToast', (message: string, type: 'success' | 'error') => {
        const toast = createApp(Toast, { message, type });
        const toastNode = document.createElement('div');
        document.body.appendChild(toastNode);
        toast.mount(toastNode);

        setTimeout(() => {
            toast.unmount();
            document.body.removeChild(toastNode);
        }, 3000);
    });
});