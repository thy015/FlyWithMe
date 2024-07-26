import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form, Input, DatePicker, TimePicker, notification, Row, Col } from 'antd';
import axios from 'axios';
import moment from 'moment';

const Admin = () => {
    const [customers, setCustomers] = useState([]);
    const [flights, setFlights] = useState([]);
    const [loadingCustomers, setLoadingCustomers] = useState(true);
    const [loadingFlights, setLoadingFlights] = useState(true);
    const [editingFlight, setEditingFlight] = useState(null);
    const [isFlightModalVisible, setIsFlightModalVisible] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/signedUpCus');
                setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching customer data:', error);
            } finally {
                setLoadingCustomers(false);
            }
        };

        const fetchFlights = async () => {
            try {
                const response = await axios.get('http://localhost:4000/Admin/existedFlight');
                setFlights(response.data);
            } catch (error) {
                console.error('Error fetching flight data:', error);
            } finally {
                setLoadingFlights(false);
            }
        };

        fetchCustomers();
        fetchFlights();
    }, []);

    const handleAddFlight = () => {
        setEditingFlight(null);
        form.resetFields();
        setIsFlightModalVisible(true);
    };

    const handleEditFlight = (flight) => {
        setEditingFlight(flight);
        form.setFieldsValue({
            ...flight,
            NgayKhoiHanh: moment(flight.NgayKhoiHanh),
            NgayDen: moment(flight.NgayDen),
            GioKhoiHanh: moment(flight.GioKhoiHanh, 'HH:mm'),
            GioDen: moment(flight.GioDen, 'HH:mm')
        });
        setIsFlightModalVisible(true);
    };

    const handleDeleteFlight = async (MaChuyenBay) => {
        try {
            await axios.delete(`http://localhost:4000/api/deleteFlight/${MaChuyenBay}`);
            setFlights(flights.filter(flight => flight.MaChuyenBay !== MaChuyenBay));
            notification.success({ message: 'Flight deleted successfully' });
        } catch (error) {
            console.error('Error deleting flight:', error);
            notification.error({ message: 'Failed to delete flight' });
        }
    };

    const handleSubmit = async (values) => {
        try {
            const formattedValues = {
                ...values,
                NgayKhoiHanh: values.NgayKhoiHanh.format('YYYY-MM-DD'),
                NgayDen: values.NgayDen.format('YYYY-MM-DD'),
                GioKhoiHanh: values.GioKhoiHanh.format('HH:mm'),
                GioDen: values.GioDen.format('HH:mm')
            };

            if (editingFlight) {
                await axios.put(`http://localhost:4000/api/updateFlight/${values.MaChuyenBay}`, formattedValues);
                notification.success({ message: 'Flight updated successfully' });
            } else {
                await axios.post('http://localhost:4000/api/addFlight', formattedValues);
                notification.success({ message: 'Flight added successfully' });
            }
            setIsFlightModalVisible(false);
            setFlights(await axios.get('http://localhost:4000/Admin/existedFlight').then(res => res.data));
        } catch (error) {
            console.error('Error submitting flight:', error);
            notification.error({ message: 'Failed to add/update flight' });
        }
    };

    const flightColumns = [
        { title: 'MaChuyenBay', dataIndex: 'MaChuyenBay', key: 'MaChuyenBay' },
        { title: 'MaHang', dataIndex: 'MaHang', key: 'MaHang' },
        { title: 'MaMayBay', dataIndex: 'MaMayBay', key: 'MaMayBay' },
        { title: 'MaTuyen', dataIndex: 'MaTuyen', key: 'MaTuyen' },
        { title: 'NgayKhoiHanh', dataIndex: 'NgayKhoiHanh', key: 'NgayKhoiHanh' },
        { title: 'NgayDen', dataIndex: 'NgayDen', key: 'NgayDen' },
        { title: 'GioKhoiHanh', dataIndex: 'GioKhoiHanh', key: 'GioKhoiHanh' },
        { title: 'GioDen', dataIndex: 'GioDen', key: 'GioDen' },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, flight) => (
                <div>
                    <Button onClick={() => handleEditFlight(flight)} style={{ marginRight: 8 }}>Edit</Button>
                    <Button onClick={() => handleDeleteFlight(flight.MaChuyenBay)} danger>Delete</Button>
                </div>
            ),
        },
    ];

    const customerColumns = [
        { title: 'MaTK', dataIndex: 'MaTK', key: 'MaTK' },
        { title: 'Email', dataIndex: 'Email', key: 'Email' },
        { title: 'Ten', dataIndex: 'Ten', key: 'Ten' },
        { title: 'MatKhau', dataIndex: 'MatKhau', key: 'MatKhau' },
        { title: 'PhoneNum', dataIndex: 'SDT', key: 'SDT' },
        { title: 'Role', dataIndex: 'QuyenSuDung', key: 'QuyenSuDung' },
    ];

    return (
        <div className="mt-4">
            <Row gutter={16}>
                <Col span={24}>
                    <h2>Customer Accounts</h2>
                    <Table
                        dataSource={customers}
                        columns={customerColumns}
                        loading={loadingCustomers}
                        rowKey="MaTK"
                    />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <h2>Flight Management</h2>
                    <Button type="primary" onClick={handleAddFlight} style={{ marginBottom: 16 }}>Add Flight</Button>
                    <Table
                        dataSource={flights}
                        columns={flightColumns}
                        loading={loadingFlights}
                        rowKey="MaChuyenBay"
                    />
                </Col>
            </Row>
            <Modal
                title={editingFlight ? 'Edit Flight' : 'Add Flight'}
                visible={isFlightModalVisible}
                onCancel={() => setIsFlightModalVisible(false)}
                footer={null}
            >
                <Form form={form} onFinish={handleSubmit} layout="vertical">
                    <Form.Item name="MaChuyenBay" label="Flight Code" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="MaHang" label="Airline Code" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="MaMayBay" label="Plane Code" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="MaTuyen" label="Route Code" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="NgayKhoiHanh" label="Departure Date" rules={[{ required: true }]}>
                        <DatePicker format="YYYY-MM-DD" />
                    </Form.Item>
                    <Form.Item name="NgayDen" label="Arrival Date" rules={[{ required: true }]}>
                        <DatePicker format="YYYY-MM-DD" />
                    </Form.Item>
                    <Form.Item name="GioKhoiHanh" label="Departure Time" rules={[{ required: true }]}>
                        <TimePicker format="HH:mm" />
                    </Form.Item>
                    <Form.Item name="GioDen" label="Arrival Time" rules={[{ required: true }]}>
                        <TimePicker format="HH:mm" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Admin;
