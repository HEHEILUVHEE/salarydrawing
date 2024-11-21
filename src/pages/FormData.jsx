import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    navigate("/tax", { state: { formData } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300 py-10 px-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-3xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          แบบฟอร์มภาษีเงินที่ได้รับ
        </h1>
        <form onSubmit={submitForm} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="salary" className="block font-medium text-gray-700">
              เงินเดือนทั้งหมด
            </label>
            <input
              type="text"
              name="salary"
              id="salary"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="bonus" className="block font-medium text-gray-700">
              โบนัส
            </label>
            <input
              type="text"
              name="bonus"
              id="bonus"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="savesocialoflife"
              className="block font-medium text-gray-700"
            >
              หักประกันภัยสังคมต่อเดือน
            </label>
            <input
              type="text"
              name="savesocialoflife"
              id="savesocialoflife"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="dekhere" className="block font-medium text-gray-700">
              จำนวนบุตร
            </label>
            <input
              type="text"
              name="dekhere"
              id="dekhere"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="saveoflife"
              className="block font-medium text-gray-700"
            >
              ค่าประกันชีวิต
            </label>
            <input
              type="text"
              name="saveoflife"
              id="saveoflife"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              ตกลง
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormData;
