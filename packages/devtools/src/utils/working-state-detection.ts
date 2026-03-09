/**
 * Working state detection utilities
 */

// Check if store package is available
export function isStorePackageAvailable(): boolean {
  try {
    require("@chagas-ai/store");
    return true;
  } catch {
    return false;
  }
}
