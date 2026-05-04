import { useEffect, useState } from "react";

function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/contacts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  //   direct delete
  //   const handleDelete = async (id) => {
  //     try {
  //       await fetch(`http://localhost:5000/contact/${id}`, {
  //         method: "DELETE",
  //       });

  //       // remove deleted item from UI
  //       setData(data.filter((item) => item.id !== id));
  //     } catch (error) {
  //       console.log(error);
  //       alert("Error deleting data");
  //     }
  //   };

  // Ask for the confirmation
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?",
    );

    if (!confirmDelete) return; // ❌ stop if user clicks Cancel

    try {
      await fetch(`http://localhost:5000/contact/${id}`, {
        method: "DELETE",
      });

      // update UI after delete
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
      alert("Error deleting data");
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl mb-4">Contact Messages</h2>

      <table className="w-full border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
          </tr>
        </thead>

        {/* <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody> */}
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.message}</td>
              <td>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
