import React from "react";
import { useLocation } from "react-router-dom";

const TaxDiscount = () => {
  const location = useLocation();
  const { formData } = location.state;
  // รวม formdata ทั้งหมดที่นี่
  let salary = parseFloat(formData.salary) || 0;
  let bonus = parseFloat(formData.bonus) || 0;
  let savesocialoflife = parseFloat(formData.savesocialoflife) || 0;
  let dekhere = parseInt(formData.dekhere) || 0;
  let saveof1life = parseInt(formData.saveoflife) || 0;
  //เริ่มที่เงินเดือน
  let salaryOfYear = salary * 12;
  let salary1year = salaryOfYear + bonus; //เงินเดือนทั้งหมด

  let moneypaidofyear = Math.min(salary1year * 0.5, 100000);//ค่าใช้จ่าย
  let iwantmoney = Math.min(dekhere * 30000, 60000);//บุตร
  let social = Math.min(savesocialoflife * 12, 30000);//ประกันสังคม
  let savelife = Math.min(saveof1life, 100000);//ประกันชีวิต
  let Deduction = 60000 + iwantmoney + social + savelife; //ค่าลดหย่อน

  let allmoneynaja = salary1year - moneypaidofyear - Deduction;//เงินได้พึ่งประเมิน

  const taxRate =
    allmoneynaja <= 100000
      ? 0
      : allmoneynaja <= 300000
        ? 0.05
        : allmoneynaja <= 1000000
          ? 0.10
          : 0.15;

  let hehe = allmoneynaja * taxRate;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-blue-400 flex items-center justify-center py-10 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-3xl p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          ผลการคำนวณภาษี
        </h1>
        <div className="space-y-4 text-lg text-gray-700">
          <p className="flex justify-between">
            <span className="font-semibold">เงินได้ทั้งปี:</span>
            <strong>{salary1year.toFixed(2)} บาท</strong>
          </p>
          <p className="flex justify-between">
            <span className="font-semibold">ค่าใช้จ่าย:</span>
            <strong>{moneypaidofyear.toFixed(2)} บาท</strong>
          </p>
          <p className="flex justify-between">
            <span className="font-semibold">ค่าลดหย่อน:</span>
            <strong>{Deduction.toFixed(2)} บาท</strong>
          </p>
          <p className="flex justify-between">
            <span className="font-semibold">เงินได้พึงประเมินสุทธิ:</span>
            <strong>{allmoneynaja.toFixed(2)} บาท</strong>
          </p>
          <p className="flex justify-between">
            <span className="font-semibold">อัตราภาษี:</span>
            <strong>{(taxRate * 100).toFixed(2)} %</strong>
          </p>
          <p className="flex justify-between">
            <span className="font-semibold">ภาษีที่ต้องชำระ:</span>
            <strong>{hehe.toFixed(2)} บาท</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaxDiscount;
