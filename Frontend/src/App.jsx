import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import CustomerForm from "./components/CustomerForm";
import CustomerTable from "./components/CustomerTable";
import Snackbar from "./components/Snackbar";
import Loader from "./components/Loader";

function App() {
  const [customers, setCustomers] = useState([]);
  const [snackbar, setSnackbar] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/customers");
      setCustomers(res.data);
    } catch (err) {
      setSnackbar({
        message: "Error fetching customers " + err,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <>
      <Navbar />
      <CustomerForm fetchCustomers={fetchCustomers} />
      {loading ? (
        <Loader />
      ) : (
        <CustomerTable fetchCustomers={fetchCustomers} customers={customers} />
      )}
      {snackbar && <Snackbar message={snackbar.message} type={snackbar.type} onClose={() => setSnackbar(null)} />}
    </>
  );
}

export default App;
