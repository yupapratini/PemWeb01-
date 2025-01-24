import { employees, columnNames } from "./data.js";
import { calculateTotalSalary, formatRupiah } from "./function.js";

// Mencari elemnt html denga id "column-names"
const columnNamesRow = document.getElementById('colums-names');

columnNames.forEach(columnName => {
    // Membuat element html th
    const th = document.createElement('th');
    // mengisi data ke dalam element th
    th.innerText = columnName;
    // menambahkan element th ke dalam element tr dengan id "column-names"
    columnNamesRow.appendChild(th);
});

// Memcari element html dengan id "table-body"
const tableBody = document.getElementById('table-body')

    employees.forEach((employee, index) =>{
    // menghitung salary karyawan 
    calculateTotalSalary(employee)

    // membuat element tr
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${employee.id}</td>
      <td>${employee.name}</td>
      <td>${employee.position}</td>
      <td>${employee.isMarride ? "Menikah": "Belum"}</td>
      <td>${employee.religion}</td>
      <td>${employee.gajiPokok}</td>
      <td>${employee.tunjanganJabatan}</td>
      <td>${employee.bpjs}</td>
      <td>${employee.tunjanganKeluarga}</td>
      <td>${employee.zakat}</td>
      <td>${employee.gajiBersih}</td>
      `
      // menambah element tr ke dalam element tbody
      tableBody.appendChild(tr);
})