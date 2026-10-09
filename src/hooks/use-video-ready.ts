"use client";

import { useCallback, useState } from "react";

/**
 * Tracks whether a <video> has enough data to play smoothly.
 *
 * On fast connections (e.g. localhost) the browser can finish loading
 * before React attaches the `loadeddata`/`canplay` listener, so that
 * event never fires and `ready` would otherwise get stuck false. The
 * ref callback checks `readyState` as soon as the element mounts to
 * catch that race, in addition to listening for the event.
 */
const useVideoReady = () => {
  const [ready, setReady] = useState(false);

  const ref = useCallback((el: HTMLVideoElement | null) => {
    if (el && el.readyState >= 3) setReady(true);
  }, []);

  const onCanPlay = useCallback(() => setReady(true), []);

  return { ready, setReady, ref, onCanPlay };
};

export default useVideoReady;
