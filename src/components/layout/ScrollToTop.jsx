import { useScrollToTop } from "../../hooks/useScrollToTop";

/**
 * Resets scroll position to the top on every route change.
 * Renders nothing — mount once inside the Layout.
 */
export default function ScrollToTop() {
  useScrollToTop();
  return null;
}
