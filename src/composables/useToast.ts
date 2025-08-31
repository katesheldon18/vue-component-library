import { ref } from 'vue';

type Toast = {
    id?: number
    variant?: 'info' | 'success' | 'warning' | 'error';
    message?: string;
    duration?: number;
    subtext?: string;
}

const currentToast = ref<Toast | null>(null);

function showToast(
    variant: Toast['variant'] = 'info',
    message?: string,
    duration: number = 3000,
    subtext?: string,
) {
    currentToast.value = {
        variant,
        message,
        duration,
        subtext,
    };
}

function dismissToast(toast: Toast) {
    currentToast.value = null;
}

export function useToast() {
    return {
        currentToast,
        showToast,
        dismissToast,
    }
}