const BASE_URL = "http://localhost:5000/api";

export const addEmployee = async (employee) => {
  const res = await fetch(`${BASE_URL}/employees`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  return res.json();
};

export const getEmployees = async () => {
  const res = await fetch(`${BASE_URL}/employees`);
  return res.json();
};

export const updateEmployee = async (employeeId, data) => {
  const res = await fetch(`${BASE_URL}/employees/${employeeId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteEmployee = async (employeeId) => {
  const res = await fetch(`${BASE_URL}/employees/${employeeId}`, { method: "DELETE" });
  return res.json();
};
