"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { create } from "zustand";

type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
}

interface ToastStore {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (toast) => {
    const id = Math.random().toString(36).substring(2, 9);
    set((state) => ({
      toasts: [...state.toasts, { ...toast, id }],
    }));

    // Auto remove after duration
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }));
    }, toast.duration || 5000);
  },
  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    }));
  },
}));

// Helper function to show toasts
export const toast = {
  success: (title: string, description?: string) => {
    useToastStore.getState().addToast({ type: "success", title, description });
  },
  error: (title: string, description?: string) => {
    useToastStore.getState().addToast({ type: "error", title, description });
  },
  info: (title: string, description?: string) => {
    useToastStore.getState().addToast({ type: "info", title, description });
  },
  warning: (title: string, description?: string) => {
    useToastStore.getState().addToast({ type: "warning", title, description });
  },
};

const icons = {
  success: CheckCircle2,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle,
};

const styles = {
  success: "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800",
  error: "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800",
  info: "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800",
  warning: "bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800",
};

const iconStyles = {
  success: "text-green-500",
  error: "text-red-500",
  info: "text-blue-500",
  warning: "text-amber-500",
};

export function Toaster() {
  const { toasts, removeToast } = useToastStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
      {toasts.map((t) => {
        const Icon = icons[t.type];
        return (
          <div
            key={t.id}
            className={`flex items-start gap-3 p-4 rounded-lg border shadow-lg animate-in slide-in-from-right-full ${styles[t.type]}`}
          >
            <Icon className={`h-5 w-5 shrink-0 ${iconStyles[t.type]}`} />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">{t.title}</p>
              {t.description && (
                <p className="text-sm text-muted-foreground mt-1">{t.description}</p>
              )}
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="shrink-0 p-1 hover:bg-black/5 rounded"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
