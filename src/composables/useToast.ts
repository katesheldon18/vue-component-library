import { ref } from 'vue';

type Toast = {
    id?: number
    style?: 'info' | 'success' | 'warning' | 'error';
    duration?: number
}

const currentToast = ref<Toast | null>(null);

function showToast(toast: Toast) {
    currentToast.value = toast;
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