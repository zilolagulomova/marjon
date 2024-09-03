import { FetchOptions } from 'ofetch'
import { ref } from 'vue'
import { useRuntimeConfig } from '#app'

export const configApi = () => {
    const config = useRuntimeConfig()
    const baseURL = config.public.baseURL
    const isLoading = ref(false)
    const currentLanguage = ref('uz')

    const $service = $fetch.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
    })

    function $get<T = any>(endpoint: string, options?: FetchOptions): Promise<T> {
        return new Promise((resolve, reject) => {
            isLoading.value = true
            $service(endpoint, {
                ...options,
                method: 'GET',
                headers: {
                    ...options?.headers,
                    'Accept-Language': currentLanguage.value, // Tilni yuborish
                },
            })
                .then(response => resolve(response as T))
                .catch(error => reject(error))
                .finally(() => {
                    isLoading.value = false
                })
        })
    }

    function $post<T = any>(endpoint: string, body: any, options?: FetchOptions): Promise<T> {
        return new Promise((resolve, reject) => {
            isLoading.value = true
            $service(endpoint, {
                ...options,
                method: 'POST',
                body,
                headers: {
                    ...options?.headers,
                    'Accept-Language': currentLanguage.value, // Tilni yuborish
                },
            })
                .then(response => resolve(response as T))
                .catch(error => reject(error))
                .finally(() => {
                    isLoading.value = false
                })
        })
    }

    function $put<T = any>(endpoint: string, body: any, options?: FetchOptions): Promise<T> {
        return new Promise((resolve, reject) => {
            isLoading.value = true
            $service(endpoint, {
                ...options,
                method: 'PUT',
                body,
                headers: {
                    ...options?.headers,
                    'Accept-Language': currentLanguage.value, // Tilni yuborish
                },
            })
                .then(response => resolve(response as T))
                .catch(error => reject(error))
                .finally(() => {
                    isLoading.value = false
                })
        })
    }

    function $delete<T = any>(endpoint: string, options?: FetchOptions): Promise<T> {
        return new Promise((resolve, reject) => {
            isLoading.value = true
            $service(endpoint, {
                ...options,
                method: 'DELETE',
                headers: {
                    ...options?.headers,
                    'Accept-Language': currentLanguage.value, // Tilni yuborish
                },
            })
                .then(response => resolve(response as T))
                .catch(error => reject(error))
                .finally(() => {
                    isLoading.value = false
                })
        })
    }

    return {
        isLoading,
        $get,
        $post,
        $put,
        $delete,
        currentLanguage, // Tilni o'zgartirish uchun eksport qilish
    }
}