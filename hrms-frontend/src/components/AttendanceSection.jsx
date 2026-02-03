import { useState } from "react";
import { markAttendance, searchAttendance } from "../api/attendanceApi";

const AttendanceSection = () => {
  const [form, setForm] = useState({
    employeeId: "",
    date: "",
    status: "Present",
  });

  const [search, setSearch] = useState({
    employeeId: "",
    date: "",
  });

  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await markAttendance(form);
    if (res?.status) {
      alert("Attendance Saved");
      setForm({ employeeId: "", date: "", status: "Present" });
    } else {
      alert(res.message || "Error");
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await searchAttendance(search.employeeId, search.date);
    setResult(res);
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Mark Attendance</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6">
        <input
          type="text"
          placeholder="Employee ID (EMP001)"
          value={form.employeeId}
          onChange={(e) => setForm({ ...form, employeeId: e.target.value })}
          className="border p-2 rounded"
        />

        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="border p-2 rounded"
        />

        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          className="border p-2 rounded"
        >
          <option>Present</option>
          <option>Absent</option>
        </select>

        <button className="bg-green-500 text-white p-2 rounded">
          Save Attendance
        </button>
      </form>

      <h2 className="text-xl font-bold mb-4">Search Attendance</h2>

      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Employee ID (EMP001)"
          value={search.employeeId}
          onChange={(e) =>
            setSearch({ ...search, employeeId: e.target.value })
          }
          className="border p-2 rounded"
        />

        <input
          type="date"
          value={search.date}
          onChange={(e) => setSearch({ ...search, date: e.target.value })}
          className="border p-2 rounded"
        />

        <button className="bg-blue-500 text-white px-4 rounded">
          Search
        </button>
      </form>

      {result && (
        <div className="p-4 border rounded bg-gray-100">
          <p><b>Employee ID:</b> {result.employeeId}</p>
          <p><b>Date:</b> {result.date}</p>
          <p><b>Status:</b> {result.status}</p>
        </div>
      )}
    </div>
  );
};

export default AttendanceSection;
