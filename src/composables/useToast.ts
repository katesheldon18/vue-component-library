import { ref } from 'vue';

type Toast = {
    id?: number
    variant?: 'info' | 'success' | 'warning' | 'error';
    message?: string;
    duration?: number;
    subtext?: string;
}

const toasts = ref<Toast[]>([]);

function showToast(
    variant: Toast['variant'] = 'info',
    message?: string,
    duration: number = 3000,
    subtext?: string,
) {
    const id = Date.now(); // unique ID
    toasts.value.push({
        id,
        variant,
        message,
        duration,
        subtext,
    });
}

function dismissToast(toast: Toast) {
    toasts.value = toasts.value.filter(t => t.id !== toast.id);
}

export function useToast() {
    return {
        toasts,
        showToast,
        dismissToast,
    }
}