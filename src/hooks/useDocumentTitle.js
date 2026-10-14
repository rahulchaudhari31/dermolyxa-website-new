import { useEffect } from "react";

/**
 * Sets the document title for a page.
 */
export function useDocumentTitle(title) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
}
