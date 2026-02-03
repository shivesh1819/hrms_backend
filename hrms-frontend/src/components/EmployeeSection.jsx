import { useState, useEffect } from "react";
import { addEmployee, getEmployees, deleteEmployee, updateEmployee } from "../api/employeeApi";

const EmployeeSection = () => {
  const [form, setForm] = useState({ employeeId: "", fullName: "", email: "", department: "" });
  const [employees, setEmployees] = useState([]);
  const [editId, setEditId] = useState(null);

  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateEmployee(editId, form);
      setEditId(null);
    } else {
      await addEmployee(form);
    }
    setForm({ employeeId: "", fullName: "", email: "", department: "" });
    fetchEmployees();
  };

  const handleEdit = (emp) => {
    setEditId(emp.employeeId);
    setForm({ employeeId: emp.employeeId, fullName: emp.fullName, email: emp.email, department: emp.department });
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  return (
    <div className="p-6 bg-white rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Employee Management</h2>
      <form className="flex flex-col gap-2 mb-4" onSubmit={handleSubmit}>
        <input placeholder="Employee ID" value={form.employeeId} onChange={(e)=>setForm({...form, employeeId:e.target.value})} className="border p-2 rounded" disabled={editId}/>
        <input placeholder="Full Name" value={form.fullName} onChange={(e)=>setForm({...form, fullName:e.target.value})} className="border p-2 rounded"/>
        <input placeholder="Email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="border p-2 rounded"/>
        <input placeholder="Department" value={form.department} onChange={(e)=>setForm({...form, department:e.target.value})} className="border p-2 rounded"/>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">{editId ? "Update" : "Add"} Employee</button>
      </form>

      <h3 className="text-lg font-semibold mb-2">Employee List</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Department</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.employeeId}>
              <td className="border p-2">{emp.employeeId}</td>
              <td className="border p-2">{emp.fullName}</td>
              <td className="border p-2">{emp.email}</td>
              <td className="border p-2">{emp.department}</td>
              <td className="border p-2 flex gap-2">
                <button onClick={()=>handleEdit(emp)} className="bg-yellow-500 text-white px-2 rounded hover:bg-yellow-600">Edit</button>
                <button onClick={()=>handleDelete(emp.employeeId)} className="bg-red-500 text-white px-2 rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeSection;
