"use client";

import { CircleCheckIcon, XIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/registry/default/ui/button";
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/registry/default/ui/toast";

interface UseProgressTimerProps {
  duration: number;
  interval?: number;
  onComplete?: () => void;
}

function useProgressTimer({
  duration,
  interval = 100,
  onComplete,
}: UseProgressTimerProps) {
  const [progress, setProgress] = useState(duration);
  const timerRef = useRef(0);
  const timerState = useRef({
    isPaused: false,
    remaining: duration,
    startTime: 0,
  });

  const cleanup = useCallback(() => {
    window.clearInterval(timerRef.current);
  }, []);

  const reset = useCallback(() => {
    cleanup();
    setProgress(duration);
    timerState.current = {
      isPaused: false,
      remaining: duration,
      startTime: 0,
    };
  }, [duration, cleanup]);

  const start = useCallback(() => {
    const state = timerState.current;
    state.startTime = Date.now();
    state.isPaused = false;

    timerRef.current = window.setInterval(() => {
      const elapsedTime = Date.now() - state.startTime;
      const remaining = Math.max(0, state.remaining - elapsedTime);

      setProgress(remaining);

      if (remaining <= 0) {
        cleanup();
        onComplete?.();
      }
    }, interval);
  }, [interval, cleanup, onComplete]);

  const pause = useCallback(() => {
    const state = timerState.current;
    if (!state.isPaused) {
      cleanup();
      state.remaining = Math.max(
        0,
        state.remaining - (Date.now() - state.startTime),
      );
      state.isPaused = true;
    }
  }, [cleanup]);

  const resume = useCallback(() => {
    const state = timerState.current;
    if (state.isPaused && state.remaining > 0) {
      start();
    }
  }, [start]);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return {
    pause,
    progress,
    reset,
    resume,
    start,
  };
}

export default function Component() {
  const [open, setOpen] = useState(false);
  const toastDuration = 5000;
  const { progress, start, pause, resume, reset } = useProgressTimer({
    duration: toastDuration,
    onComplete: () => setOpen(false),
  });

  const handleOpenChange = useCallback(
    (isOpen: boolean) => {
      setOpen(isOpen);
      if (isOpen) {
        reset();
        start();
      }
    },
    [reset, start],
  );

  const handleButtonClick = useCallback(() => {
    if (open) {
      setOpen(false);
      // Wait for the close animation to finish
      window.setTimeout(() => {
        handleOpenChange(true);
      }, 150);
    } else {
      handleOpenChange(true);
    }
  }, [open, handleOpenChange]);

  return (
    <ToastProvider swipeDirection="left">
      <Button onClick={handleButtonClick} variant="outline">
        نخب مخصص
      </Button>
      <Toast
        onOpenChange={handleOpenChange}
        onPause={pause}
        onResume={resume}
        open={open}
      >
        <div className="flex w-full justify-between gap-3">
          <CircleCheckIcon
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-emerald-500"
            size={16}
          />
          <div className="flex grow flex-col gap-3">
            <div className="space-y-1">
              <ToastTitle>تم الانتهاء من طلبك!</ToastTitle>
              <ToastDescription>
                وهو يوضح أن المهمة أو الطلب قد تمت معالجتها.
              </ToastDescription>
            </div>
            <div>
              <ToastAction altText="Undo changes" asChild>
                <Button size="sm">التراجع عن التغييرات</Button>
              </ToastAction>
            </div>
          </div>
          <ToastClose asChild>
            <Button
              aria-label="إغلاق الإشعار"
              className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
              variant="ghost"
            >
              <XIcon
                aria-hidden="true"
                className="opacity-60 transition-opacity group-hover:opacity-100"
                size={16}
              />
            </Button>
          </ToastClose>
        </div>
        <div aria-hidden="true" className="contents">
          <div
            className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-emerald-500"
            style={{
              transition: "width 100ms linear",
              width: `${(progress / toastDuration) * 100}%`,
            }}
          />
        </div>
      </Toast>
      <ToastViewport className="sm:start-0 sm:end-auto" />
    </ToastProvider>
  );
}
