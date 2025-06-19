import React, { useState } from "react";

const OrganizationPage = () => {
  const [form, setForm] = useState({
    name: "",
    orgId: "",
    subscription: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Organization submitted:", form);
    // API call logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Register Your Organization
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Org Name & ID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Organization Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Organization ID
              </label>
              <input
                type="text"
                name="orgId"
                value={form.orgId}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Subscription Plan */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Subscription Plan
            </label>
            <select
              name="subscription"
              value={form.subscription}
              onChange={handleChange}
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a plan</option>
              <option value="basic">Basic</option>
              <option value="pro">Pro</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>

          {/* Excel Upload */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Upload Employee Data (.xlsx or .csv)
            </label>
            <input
              type="file"
              accept=".xlsx, .xls, .csv"
              onChange={handleFileChange}
              required
              className="w-full border border-slate-300 rounded-lg px-4 py-2 bg-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Submit Organization
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrganizationPage;
