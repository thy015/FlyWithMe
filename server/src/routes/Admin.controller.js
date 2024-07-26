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

  const addCustomer = async (req, res) => {
    const { MaTK, Email, Ten, MatKhau, SDT } = req.body;
    try {
        const query = `INSERT INTO taikhoan (MaTK, Email, Ten, MatKhau, SDT) VALUES (?, ?, ?, ?, ?)`;
        await db1.query(query, [MaTK, Email, Ten, MatKhau, SDT]);
        res.status(201).json({ message: 'Customer added successfully' });
    } catch (error) {
        console.error('Error adding customer:', error);
        res.status(500).json({ message: 'Failed to add customer' });
    }
};

const updateCustomer = async (req, res) => {
    const { MaTK } = req.params;
    const { Email, Ten, MatKhau, SDT } = req.body;
    try {
        const query = `UPDATE taikhoan SET Email = ?, Ten = ?, MatKhau = ?, SDT = ? WHERE MaTK = ?`;
        await db1.query(query, [Email, Ten, MatKhau, SDT, MaTK]);
        res.status(200).json({ message: 'Customer updated successfully' });
    } catch (error) {
        console.error('Error updating customer:', error);
        res.status(500).json({ message: 'Failed to update customer' });
    }
};

const deleteCustomer = async (req, res) => {
    const { MaTK } = req.params;
    try {
        const query = `DELETE FROM taikhoan WHERE MaTK = ?`;
        await db1.query(query, [MaTK]);
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        console.error('Error deleting customer:', error);
        res.status(500).json({ message: 'Failed to delete customer' });
  }
};

const addRoute = async (req, res) => {
    const { MaTuyen, QuangDuongBay, MaSBDi, MaSBDen } = req.body;
    const query = 'INSERT INTO tuyenbay (MaTuyen, QuangDuongBay, MaSBDi, MaSBDen) VALUES (?, ?, ?, ?)';
    if(MaTuyen==db1.query.MaTuyen){
        res.status(400).json({ message: 'Route already exists' });
    }
    db1.query(query, [MaTuyen, QuangDuongBay, MaSBDi, MaSBDen], (err, results) => {
        if (err) {
            console.error('Error adding route:', err);
            return res.status(500).json({ message: 'Failed to add route' });
        }
        res.status(201).json({ message: 'Route added successfully', data: results });
    });
};


const updateRoute = async (req, res) => {
    const { MaTuyen, QuangDuongBay, MaSBDi, MaSBDen } = req.body;
    const query = 'UPDATE tuyenbay SET QuangDuongBay = ?, MaSBDi = ?, MaSBDen = ? WHERE MaTuyen = ?';

    db1.query(query, [QuangDuongBay, MaSBDi, MaSBDen, MaTuyen], (err, results) => {
        if (err) {
            console.error('Error updating route:', err);
            return res.status(500).json({ message: 'Failed to update route' });
        }
        res.status(200).json({ message: 'Route updated successfully', data: results });
    });
};


const deleteRoute = async (req, res) => {
    const { MaTuyen } = req.params;
    const query = 'DELETE FROM tuyenbay WHERE MaTuyen = ?';

    db1.query(query, [MaTuyen], (err, results) => {
        if (err) {
            console.error('Error deleting route:', err);
            return res.status(500).json({ message: 'Failed to delete route' });
        }
        res.status(200).json({ message: 'Route deleted successfully' });
    });
}
addSanBay = async (req, res) => {
    const { MaSB, TenSB, ThanhPho } = req.body;
  
    try {
      await db1.query('INSERT INTO sanbay (MaSB, TenSB, ThanhPho) VALUES (?, ?, ?)', [MaSB, TenSB, ThanhPho]);
      res.status(201).json({ message: 'San bay added successfully' });
    } catch (error) {
      console.error('Error adding san bay:', error);
      res.status(500).json({ message: 'Failed to add san bay' });
    }
  };
  
  // Xóa sân bay
deleteSanBay = async (req, res) => {
    const { MaSB } = req.params;
  
    try {
      await db1.query('DELETE FROM sanbay WHERE MaSB = ?', [MaSB]);
      res.status(200).json({ message: 'San bay deleted successfully' });
    } catch (error) {
      console.error('Error deleting san bay:', error);
      res.status(500).json({ message: 'Failed to delete san bay' });
    }
  };
  
  // Sửa sân bay
 updateSanBay = async (req, res) => {
    const { MaSB } = req.params;
    const { TenSB, ThanhPho } = req.body;
  
    try {
      await db1.query('UPDATE sanbay SET TenSB = ?, ThanhPho = ? WHERE MaSB = ?', [TenSB, ThanhPho, MaSB]);
      res.status(200).json({ message: 'San bay updated successfully' });
    } catch (error) {
      console.error('Error updating san bay:', error);
      res.status(500).json({ message: 'Failed to update san bay' });
    }
}
module.exports={
    addFlight,
    deleteFlight,
    updateFlight,
    addCustomer,
    updateCustomer,
    deleteCustomer,
    addRoute,
    updateRoute,
    deleteRoute,
    addSanBay,
    deleteSanBay,
    updateSanBay
}      