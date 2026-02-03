import axios from "axios";

const API = "http://localhost:5000/api/attendance";

export const markAttendance = async (data) => {
  try {
    const res = await axios.post(`${API}/mark`, data);
    return res.data;
  } catch (err) {
    return err.response?.data || { message: "Server Error" };
  }
};

export const searchAttendance = async (employeeId, date) => {
  try {
    const res = await axios.get(
      `${API}/search?employeeId=${employeeId}&date=${date}`
    );
    return res.data;
  } catch (err) {
    return err.response?.data || null;
  }
};
