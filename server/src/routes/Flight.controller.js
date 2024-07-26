const { db1 } = require("../models/connect");

const FlightData = async (req, res) => {
  const { selectedOrigin, selectedDestination,dayStart,dayEnd } = req.body;
  try {
    const [rows] = await db1.query(
      `SELECT cb.MaChuyenBay, hh.TenHang, mb.TenMayBay, sbdi.ThanhPho AS ThanhPhoDi, sbden.ThanhPho AS ThanhPhoDen, cb.NgayKhoiHanh, cb.NgayDen, v.GiaVe, v.LoaiVe,v.MaVe
      FROM chuyenbay cb
      INNER JOIN tuyenbay tb ON cb.MaTuyen = tb.MaTuyen
      INNER JOIN sanbay sbdi ON tb.MaSBDi = sbdi.MaSB
      INNER JOIN sanbay sbden ON tb.MaSBDen = sbden.MaSB
      INNER JOIN hanghangkhong hh ON cb.MaHang = hh.MaHang
      INNER JOIN maybay mb ON cb.MaMayBay = mb.MaMayBay
      INNER JOIN ve v ON cb.MaChuyenBay = v.MaChuyenBay
      WHERE sbdi.MaSB = ?
      AND sbden.MaSB = ?
      AND cb.NgayKhoiHanh >= ?
      AND cb.NgayDen <= ?`,
      [selectedOrigin, selectedDestination, dayStart, dayEnd]
    );
    if (rows.length > 0) {
      res.status(200).json({ message: 'Flight data found', data: rows });
    } else {
      res.status(403).json({ message: 'No flight route found for the given origin and destination' });
    }
  } catch (error) {
    console.error('Error processing flight data:', error);
    res.status(500).json({ message: 'An error occurred while processing flight data', error: error.message });
  }
};

const flightChose = async (req, res) => {
  const { MaChuyenBay } = req.body;
  try {
    res.status(200).json({ message: 'Flight data found', data: MaChuyenBay });
  } catch (error) {
    console.error('Error retrieving ticket data:', error);
    res.status(500).json({ message: 'An error occurred while retrieving ticket data', error: error.message });
  }
};

const passengerData=async(req,res)=>{
  const{name, phoneNum, age, CCCD,nameCardHolder, cardNum,expirationDay,CVV,MaChuyenBay }=req.body
  try{
    if(!name || !phoneNum || !age || !CCCD ||!nameCardHolder||! cardNum||!expirationDay||!CVV||!MaChuyenBay){
      return res.status(403).json({message:'Input is required'})
  } else if(age<=18){
    return res.status(403).json({message:'Age must be greater than 18'})
  } 
  const [result] = await db1.query(
    'INSERT INTO khachhang (name, phoneNum, age, CCCD) VALUES (?, ?, ?, ?)',
    [name, phoneNum, age, CCCD]
  );

  const MaKH = result.insertId;

  await db1.query(
    'INSERT INTO pttt (MaKH, nameCardHolder, cardNum, expirationDay, CVV) VALUES (?, ?, ?, ?, ?)',
    [MaKH, nameCardHolder, cardNum, expirationDay, CVV]
  );
  await db1.query(
    'UPDATE khachhang SET MaVe = ? WHERE MaKH = ?',
    [MaChuyenBay, MaKH]
  );

  res.status(201).json({ message: 'Passenger and payment data inserted successfully' });
  }catch(e){
   console.error('Error retrieving ticket data:', e);
   res.status(404).json({ message: 'An error occurred while inserting passenger data', e: e.message });
  }
}

const queryTickets=async(req,res)=>{
  const { name, MaVe } = req.body;
  try {
    if (!name || !MaVe) {
      return res.status(400).json({ message: 'Name and ticket code are required' });
    }

    // Query to find the customer and join with flight and route information
    const query = `
    SELECT kh.name, kh.MaVe, cb.MaChuyenBay, cb.NgayKhoiHanh, cb.NgayDen, 
           sbdi.ThanhPho AS ThanhPhoDi, sbden.ThanhPho AS ThanhPhoDen,
           v.HangVe, v.GiaVe
    FROM khachhang kh
    INNER JOIN chuyenbay cb ON kh.MaVe = cb.MaChuyenBay
    INNER JOIN tuyenbay tb ON cb.MaTuyen = tb.MaTuyen
    INNER JOIN sanbay sbdi ON tb.MaSBDi = sbdi.MaSB
    INNER JOIN sanbay sbden ON tb.MaSBDen = sbden.MaSB
    INNER JOIN ve v ON cb.MaChuyenBay = v.MaChuyenBay
    WHERE kh.name = ? AND kh.MaVe = ?`;

    const [rows] = await db1.query(query, [name, MaVe]);

    if (rows.length > 0) {
      res.status(200).json({ message: 'Booking details found', data: rows });
    } else {
      res.status(404).json({ message: 'No booking found for the given name and ticket code' });
    }
  } catch (error) {
    console.error('Error fetching booking details:', error);
    res.status(500).json({ message: 'An error occurred while fetching booking details', error: error.message });
  }
}

module.exports = {
  FlightData,
  flightChose,
  passengerData,
  queryTickets
};
