const { db1 } = require("../models/connect");

const FlightData = async (req, res) => {
  const { selectedOrigin, selectedDestination,dayStart,dayEnd } = req.query;
  try {
    const [rows] = await db1.query(
      `SELECT cb.MaChuyenBay, cb.MaHang, cb.MaMayBay, cb.MaTuyen, cb.NgayKhoiHanh, cb.NgayDen
      FROM chuyenbay cb
      INNER JOIN tuyenbay tb ON cb.MaTuyen = tb.MaTuyen
      INNER JOIN sanbay sbdi ON tb.MaSBDi = sbdi.MaSB
      INNER JOIN sanbay sbden ON tb.MaSBDen = sbden.MaSB
      WHERE sbdi.TenSB = ?
      AND sbden.TenSB = ?
      AND cb.NgayKhoiHanh >= ?
      AND cb.NgayDen <= ?`,
      [selectedOrigin, selectedDestination, dayStart, dayEnd]
    );
    if (rows.length > 0) {
      res.status(200).json({ message: 'Flight data found', data: rows });
    } else {
      res.status(404).json({ message: 'No flight route found for the given origin and destination' });
    }
  } catch (error) {
    console.error('Error processing flight data:', error);
    res.status(500).json({ message: 'An error occurred while processing flight data', error: error.message });
  }
};

module.exports = {
  FlightData
};
