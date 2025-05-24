import { useAuth } from '../hooks/useAuth';
import { Routes, Route, Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();

  const renderDashboardContent = () => {
    switch (user?.role) {
      case 'customer':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Customer Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Period Tracking</h3>
                <p className="text-gray-600 mb-4">Track your menstrual cycle and get predictions</p>
                <Link to="/dashboard/period-tracking" className="btn-primary">
                  Start Tracking
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Book Consultation</h3>
                <p className="text-gray-600 mb-4">Schedule an appointment with our experts</p>
                <Link to="/dashboard/book-consultation" className="btn-primary">
                  Book Now
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">STI Testing</h3>
                <p className="text-gray-600 mb-4">Schedule and manage your STI tests</p>
                <Link to="/dashboard/sti-testing" className="btn-primary">
                  Schedule Test
                </Link>
              </div>
            </div>
          </div>
        );

      case 'consultant':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Consultant Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Appointments</h3>
                <p className="text-gray-600 mb-4">View and manage your consultation schedule</p>
                <Link to="/dashboard/appointments" className="btn-primary">
                  View Schedule
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Messages</h3>
                <p className="text-gray-600 mb-4">Check and respond to patient messages</p>
                <Link to="/dashboard/messages" className="btn-primary">
                  View Messages
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile</h3>
                <p className="text-gray-600 mb-4">Manage your consultant profile</p>
                <Link to="/dashboard/profile" className="btn-primary">
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
        );

      case 'staff':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Staff Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Test Management</h3>
                <p className="text-gray-600 mb-4">Manage STI test appointments and results</p>
                <Link to="/dashboard/test-management" className="btn-primary">
                  Manage Tests
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient Records</h3>
                <p className="text-gray-600 mb-4">Access and manage patient information</p>
                <Link to="/dashboard/patient-records" className="btn-primary">
                  View Records
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Schedule</h3>
                <p className="text-gray-600 mb-4">Manage daily appointments and tasks</p>
                <Link to="/dashboard/schedule" className="btn-primary">
                  View Schedule
                </Link>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Welcome to Dashboard</h2>
            <p className="text-gray-600 mt-2">Please select your role to continue</p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow p-6">
        {renderDashboardContent()}
      </div>
    </div>
  );
};

export default Dashboard; 