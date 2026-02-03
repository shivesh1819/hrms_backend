import EmployeeSection from "./components/EmployeeSection";
import AttendanceSection from "./components/AttendanceSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">HRMS Lite</h1>
      <EmployeeSection />
      <AttendanceSection />
    </div>
  );
}

export default App;
