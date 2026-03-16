export function calculateOfflineProgress(
  productionPerSecond: number,
  secondsAway: number
): number {

  const maxOfflineTime = 8 * 60 * 60; // 8 hours

  const effectiveTime = Math.min(secondsAway, maxOfflineTime);

  return Math.floor(productionPerSecond * effectiveTime);

}
