const { db1 } = require("../models/connect");

const addFlight = async (req, res) => {
    const { MaChuyenBay, MaHang, MaMayBay, MaTuyen, NgayKhoiHanh, NgayDen, GioKhoiHanh, GioDen } = req.body;
    try {
      if (!MaChuyenBay || !MaHang || !MaMayBay || !MaTuyen || !NgayKhoiHanh || !NgayDen || !GioKhoiHanh || !GioDen) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const query = `
        INSERT INTO chuyenbay (MaChuyenBay, MaHang, MaMayBay, MaTuyen, NgayKhoiHanh, NgayDen, GioKhoiHanh, GioDen)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  
      const [result] = await db1.query(query, [MaChuyenBay, MaHang, MaMayBay, MaTuyen, NgayKhoiHanh, NgayDen, GioKhoiHanh, GioDen]);
  
      res.status(201).json({ message: 'Flight added successfully', data: result });
    } catch (error) {
      console.error('Error adding flight:', error);
      res.status(500).json({ message: 'An error occurred while adding flight', error: error.message });
    }
  };
  const deleteFlight = async (req, res) => {
    const { MaChuyenBay } = req.params;
    try {
      if (!MaChuyenBay) {
        return res.status(400).json({ message: 'Flight ID is required' });
      }
  
      const query = 'DELETE FROM chuyenbay WHERE MaChuyenBay = ?';
      const [result] = await db1.query(query, [MaChuyenBay]);
  
      if (result.affectedRows > 0) {
        res.status(200).json({ message: 'Flight deleted successfully' });
      } else {
        res.status(404).json({ message: 'Flight not found' });
      }
    } catch (error) {
      console.error('Error deleting flight:', error);
      res.status(500).json({ message: 'An error occurred while deleting flight', error: error.message });
    }
  };
  const updateFlight = async (req, res) => {
    const { MaChuyenBay } = req.params;
    const { MaHang, MaMayBay, MaTuyen, NgayKhoiHanh, NgayDen, GioKhoiHanh, GioDen } = req.body;
    try {
      if (!MaHang || !MaMayBay || !MaTuyen || !NgayKhoiHanh || !NgayDen || !GioKhoiHanh || !GioDen) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const query = `
        UPDATE chuyenbay
        SET MaHang = ?, MaMayBay = ?, MaTuyen = ?, NgayKhoiHanh = ?, NgayDen = ?, GioKhoiHanh = ?, GioDen = ?
        WHERE MaChuyenBay = ?`;
  
      const [result] = await db1.query(query, [MaHang, MaMayBay, MaTuyen, NgayKhoiHanh, NgayDen, GioKhoiHanh, GioDen, MaChuyenBay]);
  
      if (result.affectedRows > 0) {
        res.status(200).json({ message: 'Flight updated successfully' });
      } else {
        res.status(404).json({ message: 'Flight not found' });
      }
    } catch (error) {
      console.error('Error updating flight:', error);
      res.status(500).json({ message: 'An error occurred while updating flight', error: error.message });
    }
  };

 
module.exports={
    addFlight,
    deleteFlight,
    updateFlight
}      