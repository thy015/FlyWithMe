import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  Modal,
  Form,
  Input,
  DatePicker,
  TimePicker,
  notification,
  Row,
  Col,
} from "antd";
import axios from "axios";
import moment from "moment";

const Admin = () => {
  const [customers, setCustomers] = useState([]);
  const [flights, setFlights] = useState([]);
  const [loadingCustomers, setLoadingCustomers] = useState(true);
  const [loadingFlights, setLoadingFlights] = useState(true);
  const [editingFlight, setEditingFlight] = useState(null);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [isFlightModalVisible, setIsFlightModalVisible] = useState(false);
  const [isCustomerModalVisible, setIsCustomerModalVisible] = useState(false);
  const [routes, setRoutes] = useState([]);
  const [loadingRoutes, setLoadingRoutes] = useState(true);
  const [editingRoute, setEditingRoute] = useState(null);
  const [isRouteModalOpen, setIsRouteModalOpen] = useState(false);
  const [airports, setAirports] = useState([]);
  const [loadingAirports, setLoadingAirports] = useState(true);
  const [editingAirport, setEditingAirport] = useState(null);
  const [isAirportModalOpen, setIsAirportModalOpen] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loadingTicket, setLoadingTicket] = useState(false)
  const [editingTicket, setEditingTicket] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/signedUpCus"
        );
        setCustomers(response.data);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      } finally {
        setLoadingCustomers(false);
      }
    };

    const fetchFlights = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/Admin/existedFlight"
        );
        setFlights(response.data);
      } catch (error) {
        console.error("Error fetching flight data:", error);
      } finally {
        setLoadingFlights(false);
      }
    };

    const fetchRoutes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/Admin/existedRoute"
        );
        setRoutes(response.data);
      } catch (error) {
        console.error("Error fetching route data:", error);
      } finally {
        setLoadingRoutes(false);
      }
    };

    const fetchAirports = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/Admin/existedAirport"
        );
        setAirports(response.data);
      } catch (error) {
        console.error("Error fetching airport data:", error);
      } finally {
        setLoadingAirports(false);
      }
    };
    const fetchTickets = async () => {
      setLoadingTicket(true);
      try {
        const response = await axios.get("http://localhost:4000/Admin/existedTicket");
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      } finally {
        setLoadingTicket(false);
      }
    };

    fetchCustomers();
    fetchFlights();
    fetchRoutes();
    fetchAirports();
    fetchTickets();
  }, []);

  //flight
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
      GioKhoiHanh: moment(flight.GioKhoiHanh, "HH:mm"),
      GioDen: moment(flight.GioDen, "HH:mm"),
    });
    setIsFlightModalVisible(true);
  };

  const handleDeleteFlight = async (MaChuyenBay) => {
    try {
      await axios.delete(
        `http://localhost:4000/Admin/deleteFlight/${MaChuyenBay}`
      );
      setFlights(
        flights.filter((flight) => flight.MaChuyenBay !== MaChuyenBay)
      );
      notification.success({ message: "Flight deleted successfully" });
    } catch (error) {
      console.error("Error deleting flight:", error);
      notification.error({ message: "Failed to delete flight" });
    }
  };

  const handleSubmit = async (values) => {
    try {
      const formattedValues = {
        ...values,
        NgayKhoiHanh: values.NgayKhoiHanh.format("YYYY-MM-DD"),
        NgayDen: values.NgayDen.format("YYYY-MM-DD"),
        GioKhoiHanh: values.GioKhoiHanh.format("HH:mm"),
        GioDen: values.GioDen.format("HH:mm"),
      };

      if (editingFlight) {
        await axios.put(
          `http://localhost:4000/Admin/updateFlight/${values.MaChuyenBay}`,
          formattedValues
        );
        notification.success({ message: "Flight updated successfully" });
      } else {
        await axios.post(
          "http://localhost:4000/Admin/addFlight",
          formattedValues
        );
        notification.success({ message: "Flight added successfully" });
      }
      setIsFlightModalVisible(false);
      setFlights(
        await axios
          .get("http://localhost:4000/Admin/existedFlight")
          .then((res) => res.data)
      );
    } catch (error) {
      console.error("Error submitting flight:", error);
      notification.error({ message: "Failed to add/update flight" });
    }
  };
  //cus
  const handleAddCustomer = () => {
    setEditingCustomer(null);
    form.resetFields();
    setIsCustomerModalVisible(true);
  };

  const handleEditCustomer = (customer) => {
    setEditingCustomer(customer);
    form.setFieldsValue({
      ...customer,
    });
    setIsCustomerModalVisible(true);
  };

  const handleDeleteCustomer = async (MaTK) => {
    try {
      await axios.delete(`http://localhost:4000/Admin/deleteCustomer/${MaTK}`);
      setCustomers(customers.filter((customer) => customer.MaTK !== MaTK));
      notification.success({ message: "Customer deleted successfully" });
    } catch (error) {
      console.error("Error deleting customer:", error);
      notification.error({ message: "Failed to delete customer" });
    }
  };

  const handleCustomerSubmit = async (values) => {
    try {
      if (editingCustomer) {
        await axios.put(
          `http://localhost:4000/Admin/updateCustomer/${values.MaTK}`,
          values
        );
        notification.success({ message: "Customer updated successfully" });
      } else {
        await axios.post("http://localhost:4000/Admin/addCustomer", values);
        notification.success({ message: "Customer added successfully" });
      }
      setIsCustomerModalVisible(false);
      setCustomers(
        await axios
          .get("http://localhost:4000/api/signedUpCus")
          .then((res) => res.data)
      );
    } catch (error) {
      console.error("Error submitting customer:", error);
      notification.error({ message: "Failed to add/update customer" });
    }
  };
  //route
  const handleAddRoute = () => {
    setEditingRoute(null);
    form.resetFields();
    setIsRouteModalOpen(true);
  };

  const handleEditRoute = (route) => {
    setEditingRoute(route);
    form.setFieldsValue({
      ...route,
    });
    setIsRouteModalOpen(true);
  };

  const handleDeleteRoute = async (MaTuyen) => {
    try {
      await axios.delete(`http://localhost:4000/Admin/deleteRoute/${MaTuyen}`);
      setRoutes(routes.filter((route) => route.MaTuyen !== MaTuyen));
      notification.success({ message: "Route deleted successfully" });
    } catch (error) {
      console.error("Error deleting route:", error);
      notification.error({ message: "Failed to delete route" });
    }
  };

  const handleRouteSubmit = async (values) => {
    console.log("Submitting route with values:", values);
    try {
      if (editingRoute) {
        await axios.put(
          `http://localhost:4000/Admin/updateRoute/${values.MaTuyen}`,
          values
        );
        notification.success({ message: "Route updated successfully" });
      } else {
        await axios.post("http://localhost:4000/Admin/addRoute", values);
        notification.success({ message: "Route added successfully" });
      }
      setIsRouteModalOpen(false);
      form.resetFields();
      const response = await axios.get(
        "http://localhost:4000/Admin/existedRoute"
      );
      setRoutes(response.data);
    } catch (error) {
      console.error("Error submitting route:", error);
      notification.error({ message: "Failed to add/update route" });
    }
  };
  //airport
  const handleAddAirport = () => {
    setEditingAirport(null);
    form.resetFields();
    setIsAirportModalOpen(true);
  };
  
  // Edit Airport
  const handleEditAirport = (airport) => {
    setEditingAirport(airport);
    form.setFieldsValue(airport);
    setIsAirportModalOpen(true);
  };
  
  // Delete Airport
  const handleDeleteAirport = async (MaSB) => {
    try {
      await axios.delete(`http://localhost:4000/Admin/deleteAirport/${MaSB}`);
      setAirports(airports.filter((airport) => airport.MaSB !== MaSB));
      notification.success({ message: "Airport deleted successfully" });
    } catch (error) {
      console.error("Error deleting airport:", error);
      notification.error({ message: "Failed to delete airport" });
    }
  };
  
  // Submit Airport Form
  const handleAirportSubmit = async (values) => {
    try {
      if (editingAirport) {
        await axios.put(
          `http://localhost:4000/Admin/updateAirport/${values.MaSB}`,
          values
        );
        notification.success({ message: "Airport updated successfully" });
      } else {
        await axios.post("http://localhost:4000/Admin/addAirport", values);
        notification.success({ message: "Airport added successfully" });
      }
      setIsAirportModalOpen(false);
      form.resetFields();
      const response = await axios.get(
        "http://localhost:4000/Admin/existedAirport"
      );
      setAirports(response.data);
    } catch (error) {
      console.error("Error submitting airport:", error);
      notification.error({ message: "Failed to add/update airport" });
    }
  };

  //ticket
  const handleAddTicket = () => {
    setEditingTicket(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleUpdateTicket = (ticket) => {
    setEditingTicket(ticket);
    form.setFieldsValue(ticket);
    setIsModalVisible(true);
  };

  const handleDeleteTicket = async (MaVe) => {
    try {
      await axios.delete(`http://localhost:4000/Admin/deleteTicket/${MaVe}`);
      setTickets(tickets.filter((ticket) => ticket.MaVe !== MaVe));
      form.resetFields();
      notification.success({ message: "Ticket deleted successfully" });
    } catch (error) {
      console.error("Error deleting ticket:", error);
      notification.error({ message: "Failed to delete ticket" });
    }
  };

  const handleTicketSubmit = async (values) => {
    try {
      if (editingTicket) {
        await axios.put(`http://localhost:4000/Admin/updateTicket/${values.MaVe}`, values);
        notification.success({ message: 'Ticket updated successfully' });
      } else {
        await axios.post('http://localhost:4000/Admin/addTicket', values);
        notification.success({ message: 'Ticket added successfully' });
      }
      setIsModalVisible(false);
      form.resetFields();
      setTickets(await axios.get("http://localhost:4000/Admin/existedTicket").then((res) => res.data));
    } catch (error) {
      console.error('Error submitting ticket:', error);
      notification.error({ message: 'Failed to add/update ticket' });
    }
  };
  //flight colums
  const flightColumns = [
    { title: "MaChuyenBay", dataIndex: "MaChuyenBay", key: "MaChuyenBay" },
    { title: "MaHang", dataIndex: "MaHang", key: "MaHang" },
    { title: "MaMayBay", dataIndex: "MaMayBay", key: "MaMayBay" },
    { title: "MaTuyen", dataIndex: "MaTuyen", key: "MaTuyen" },
    { title: "NgayKhoiHanh", dataIndex: "NgayKhoiHanh", key: "NgayKhoiHanh" },
    { title: "NgayDen", dataIndex: "NgayDen", key: "NgayDen" },
    { title: "GioKhoiHanh", dataIndex: "GioKhoiHanh", key: "GioKhoiHanh" },
    { title: "GioDen", dataIndex: "GioDen", key: "GioDen" },
    {
      title: "Actions",
      key: "actions",
      render: (_, flight) => (
        <div>
          <Button
            onClick={() => handleEditFlight(flight)}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Button onClick={() => handleDeleteFlight(flight.MaChuyenBay)} danger>
            Delete
          </Button>
        </div>
      ),
    },
  ];
  //Cus colums
  const customerColumns = [
    { title: "MaTK", dataIndex: "MaTK", key: "MaTK" },
    { title: "Email", dataIndex: "Email", key: "Email" },
    { title: "Ten", dataIndex: "Ten", key: "Ten" },
    { title: "MatKhau", dataIndex: "MatKhau", key: "MatKhau" },
    { title: "PhoneNum", dataIndex: "SDT", key: "SDT" },
    { title: "Role", dataIndex: "QuyenSuDung", key: "QuyenSuDung" },
    {
      title: "Actions",
      key: "actions",
      render: (_, customer) => (
        <div>
          <Button
            onClick={() => handleEditCustomer(customer)}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Button onClick={() => handleDeleteCustomer(customer.MaTK)} danger>
            Delete
          </Button>
        </div>
      ),
    },
  ];
  //Route colums
  const routeColumns = [
    { title: "Route Code", dataIndex: "MaTuyen", key: "MaTuyen" },
    { title: "Distance", dataIndex: "QuangDuongBay", key: "QuangDuongBay" },
    { title: "Departure Airport Code", dataIndex: "MaSBDi", key: "MaSBDi" },
    { title: "Arrival Airport Code", dataIndex: "MaSBDen", key: "MaSBDen" },
    {
      title: "Actions",
      key: "actions",
      render: (_, route) => (
        <div>
          <Button
            onClick={() => handleEditRoute(route)}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Button onClick={() => handleDeleteRoute(route.MaTuyen)} danger>
            Delete
          </Button>
        </div>
      ),
    },
  ];
// Airport Columns
const airportColumns = [
  { title: "Airport Code", dataIndex: "MaSB", key: "MaSB" },
  { title: "Airport Name", dataIndex: "TenSB", key: "TenSB" },
  { title: "City", dataIndex: "ThanhPho", key: "ThanhPho" },
  {
    title: "Actions",
    key: "actions",
    render: (_, airport) => (
      <div>
        <Button
          onClick={() => handleEditAirport(airport)}
          style={{ marginRight: 8 }}
        >
          Edit
        </Button>
        <Button onClick={() => handleDeleteAirport(airport.MaSB)} danger>
          Delete
        </Button>
      </div>
    ),
  },
];

//ticket
const ticketColumns = [
  { title: 'MaVe', dataIndex: 'MaVe', key: 'MaVe' },
  { title: 'LoaiVe', dataIndex: 'LoaiVe', key: 'LoaiVe' },
  { title: 'HangVe', dataIndex: 'HangVe', key: 'HangVe' },
  { title: 'GiaVe', dataIndex: 'GiaVe', key: 'GiaVe' },
  { title: 'SoVe', dataIndex: 'SoVe', key: 'SoVe' },
  { title: 'TinhTrangVe', dataIndex: 'TinhTrangVe', key: 'TinhTrangVe' },
  { title: 'MaChuyenBay', dataIndex: 'MaChuyenBay', key: 'MaChuyenBay' },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <>
        <Button
          onClick={() => handleUpdateTicket(record)}
          style={{ marginRight: 8 }}
        >
          Edit
        </Button>
        <Button
          onClick={() => handleDeleteTicket(record.MaVe)}
          danger
        >
          Delete
        </Button>
      </>
    ),
  },
];
  return (
    <div className="mt-4">
      <Row gutter={16}>
        <Col span={24}>
          <div>
            <h2 className="text-[36px] text-[#003278]">Customer Accounts</h2>
          </div>
          <Button
            type="primary"
            onClick={handleAddCustomer}
            style={{ marginBottom: 16 }}
            className="float-right"
          >
            Add Customer
          </Button>
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
          <h2 className="text-[36px] text-[#003278]">Flight Management</h2>
          <Button
            type="primary"
            onClick={handleAddFlight}
            style={{ marginBottom: 16 }}
            className="float-right"
          >
            Add Flight
          </Button>
          <Table
            dataSource={flights}
            columns={flightColumns}
            loading={loadingFlights}
            rowKey="MaChuyenBay"
          />
        </Col>

    </Row>
        <Row gutter={16}>
          <Col span={24} >
            <h2 className="text-[36px] text-[#003278]">Route Management</h2>
            <Button
              type="primary"
              onClick={handleAddRoute}
              style={{ marginBottom: 16 }}
              className="float-right"
            >
              Add Route
            </Button>
            <Table
              dataSource={routes}
              columns={routeColumns}
              loading={loadingRoutes}
              rowKey="MaTuyen"
            />
          </Col>
        </Row>
        <Row gutter={16}>
      <Col span={24}>
        <h2 className="text-[36px] text-[#003278]">Airport Management</h2>
        <Button
          type="primary"
          onClick={handleAddAirport}
          style={{ marginBottom: 16 }}
          className="float-right"
        >
          Add Airport
        </Button>
        <Table
          dataSource={airports}
          columns={airportColumns}
          loading={loadingAirports}
          rowKey="MaSB"
        />
      </Col>
      </Row>
      <Row gutter={16}>
      <Col span={24}>
        <h2 className="text-[36px] text-[#003278]">Ticket Management</h2>
        <Button
          type="primary"
          onClick={handleAddTicket}
          style={{ marginBottom: 16 }}
          className="float-right"
        >
          Add Ticket
        </Button>
        <Table
          dataSource={tickets}
          columns={ticketColumns}
          loading={loadingTicket}
          rowKey="MaVe"
        />
      </Col>
    </Row>
      <Modal
        title={editingFlight ? "Edit Flight" : "Add Flight"}
        visible={isFlightModalVisible}
        onCancel={() => setIsFlightModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item
            name="MaChuyenBay"
            label="Flight Code"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="MaHang"
            label="Airline Code"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="MaMayBay"
            label="Plane Code"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="MaTuyen"
            label="Route Code"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="NgayKhoiHanh"
            label="Departure Date"
            rules={[{ required: true }]}
          >
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item
            name="NgayDen"
            label="Arrival Date"
            rules={[{ required: true }]}
          >
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item
            name="GioKhoiHanh"
            label="Departure Time"
            rules={[{ required: true }]}
          >
            <TimePicker format="HH:mm" />
          </Form.Item>
          <Form.Item
            name="GioDen"
            label="Arrival Time"
            rules={[{ required: true }]}
          >
            <TimePicker format="HH:mm" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title={editingCustomer ? "Edit Customer" : "Add Customer"}
        visible={isCustomerModalVisible}
        onCancel={() => setIsCustomerModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleCustomerSubmit} layout="vertical">
          <Form.Item
            name="MaTK"
            label="Account Code"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="Ten" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="MatKhau"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="SDT"
            label="Phone Number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title={editingRoute ? "Edit Route" : "Add Route"}
        visible={isRouteModalOpen}
        onCancel={() => setIsRouteModalOpen(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleRouteSubmit} layout="vertical">
          <Form.Item
            name="MaTuyen"
            label="Route Code"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="QuangDuongBay"
            label="Distance"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="MaSBDi"
            label="Departure Airport Code"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="MaSBDen"
            label="Arrival Airport Code"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
      title={editingAirport ? "Edit Airport" : "Add Airport"}
      visible={isAirportModalOpen}
      onCancel={() => setIsAirportModalOpen(false)}
      footer={null}
    >
      <Form form={form} onFinish={handleAirportSubmit} layout="vertical">
        <Form.Item
          name="MaSB"
          label="Airport Code"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="TenSB"
          label="Airport Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="ThanhPho"
          label="City"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>



    <Modal
      title={editingTicket ? 'Edit Ticket' : 'Add Ticket'}
      visible={isModalVisible}
      onCancel={() => {
        setIsModalVisible(false);
        form.resetFields(); 
      }}
      onOk={() => form.submit()}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleTicketSubmit}
      >
        <Form.Item
          name="MaVe"
          label="Ticket Code"
          rules={[{ required: true, message: 'Please input the ticket code!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="LoaiVe"
          label="Ticket Type"
          rules={[{ required: true, message: 'Please input the ticket type!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="HangVe"
          label="Class"
          rules={[{ required: true, message: 'Please input the class!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="GiaVe"
          label="Price"
          rules={[{ required: true, message: 'Please input the price!' }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="SoVe"
          label="Number of Tickets"
          rules={[{ required: true, message: 'Please input the number of tickets!' }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="TinhTrangVe"
          label="Status"
          rules={[{ required: true, message: 'Please input the status!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="MaChuyenBay"
          label="Flight Code"
          rules={[{ required: true, message: 'Please select the flight code!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>

    </div>
  );
};

export default Admin;
