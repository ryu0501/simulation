// discountRates.js
// 累計購入回数に応じた割引率のデータ
// threshold: この回数以上で適用される割引率 (0.7% 刻み)
// rate: 適用される割引率 (%)
window.discountRatesData = [
    { threshold: 0, rate: 0.0 },
    { threshold: 10, rate: 0.7 },
    { threshold: 20, rate: 1.4 },
    { threshold: 30, rate: 2.1 },
    { threshold: 40, rate: 2.8 },
    { threshold: 50, rate: 3.5 },
    { threshold: 60, rate: 4.2 },
    { threshold: 70, rate: 4.9 },
    { threshold: 80, rate: 5.6 },
    { threshold: 90, rate: 6.3 },
    { threshold: 100, rate: 7.0 },
    { threshold: 110, rate: 7.7 },
    { threshold: 120, rate: 8.4 },
    { threshold: 130, rate: 9.1 },
    { threshold: 140, rate: 9.8 },
    { threshold: 150, rate: 10.4 },
    { threshold: 160, rate: 11.1 },
    { threshold: 170, rate: 11.8 },
    { threshold: 180, rate: 12.5 },
    { threshold: 190, rate: 13.2 },
    { threshold: 200, rate: 13.9 },
    { threshold: 210, rate: 14.6 },
    { threshold: 220, rate: 15.3 },
    { threshold: 230, rate: 16.0 },
    { threshold: 240, rate: 16.7 },
    { threshold: 250, rate: 17.4 },
    { threshold: 260, rate: 18.1 },
    { threshold: 270, rate: 18.8 },
    { threshold: 280, rate: 19.5 } // 最大割引率 (280回以上)
];