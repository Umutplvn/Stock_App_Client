import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { calculateKpiTotals } from "../src/utils/kpiMetrics.js";

describe("calculateKpiTotals", () => {
  test("computes totalSales, totalPurchases, and totalProfit accurately", () => {
    const sales = [{ price_total: "1200" }, { price_total: 800 }];
    const purchases = [{ price_total: "750" }, { price_total: 250 }];
    const result = calculateKpiTotals(sales, purchases);

    assert.equal(result.totalSales, 2000);
    assert.equal(result.totalPurchases, 1000);
    assert.equal(result.totalProfit, 1000);
  });

  test("handles empty or malformed arrays safely", () => {
    const result = calculateKpiTotals([], null);
    assert.deepEqual(result, {
      totalSales: 0,
      totalPurchases: 0,
      totalProfit: 0,
    });
  });

  test("computes negative profit when purchases exceed sales", () => {
    const result = calculateKpiTotals([{ price_total: 300 }], [{ price_total: 500 }]);
    assert.equal(result.totalProfit, -200);
  });
});
