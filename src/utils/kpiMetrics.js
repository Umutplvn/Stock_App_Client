export function calculateKpiTotals(sales = [], purchases = []) {
  const totalSales = (sales || [])
    .map((item) => Number(item?.price_total || 0))
    .reduce((acc, val) => acc + (Number.isFinite(val) ? val : 0), 0);

  const totalPurchases = (purchases || [])
    .map((item) => Number(item?.price_total || 0))
    .reduce((acc, val) => acc + (Number.isFinite(val) ? val : 0), 0);

  const totalProfit = totalSales - totalPurchases;

  return {
    totalSales,
    totalPurchases,
    totalProfit,
  };
}
