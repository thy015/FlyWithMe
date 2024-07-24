import React, { useEffect, useState } from 'react';
import { Card, Col, Row,Table  } from 'antd';
import axios from 'axios'
const Admin = () => {
    const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/signedUpCus');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customer data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const columns = [
    {
      title: 'MaTK',
      dataIndex: 'MaTK', // Change to the actual field name from your database
      key: 'MaTK',
    },
    {
      title: 'Email',
      dataIndex: 'Email', 
      key: 'MaTK',
    },
    {
      title: 'Ten',
      dataIndex: 'Ten', 
      key: 'MaTK',
    },
    {
      title: 'MatKhau',
      dataIndex: 'MatKhau', 
      key: 'MaTK',
    },
    {
        title: 'PhoneNum',
        dataIndex: 'SDT', 
        key: 'MaTK',
      },
      {
        title: 'Role',
        dataIndex: 'QuyenSuDung', 
        key: 'MaTK',
      },
  ];
  return (
   
    <div className="mt-4">
      <h2>Customer Accounts</h2>
      <Table
        dataSource={customers}
        columns={columns}
        loading={loading}
        rowKey="id" // Ensure this matches the unique key from your database
      />
    </div>
  
  )
}

export default Admin
