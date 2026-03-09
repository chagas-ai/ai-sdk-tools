/**
 * Working state detection utilities
 */

// Check if store package is available
export function isStorePackageAvailable(): boolean {
  try {
    require("@chagas-ai/ai-sdk-tools-store");
    return true;
  } catch {
    return false;
  }
}
