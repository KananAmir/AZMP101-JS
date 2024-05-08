import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading";

const CustomersTable = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllData("customers");
  }, []);

  const BASE_URL = "https://northwind.vercel.app/api";
  async function getAllData(endpoint) {
    try {
      setLoading(true);
      const response = await axios(`${BASE_URL}/${endpoint}`);
      setCustomers(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loading />
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Company Name</th>
              <th>Contact Name</th>
              <th>Street</th>
              <th>City, Country</th>
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 &&
              customers.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.companyName}</td>
                    <td>{customer.contactTitle}</td>
                    <td>{customer.address?.street}</td>
                    <td>
                      {customer.address?.city}, {customer.address?.country}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default CustomersTable;
