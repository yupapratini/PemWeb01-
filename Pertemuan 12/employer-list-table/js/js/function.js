// Membuat fungsi  format angka menjadi format rupiah untuk memformat angka menjadi format rupiah
function formatRupiah(number = 0) {
  let nominal = parseInt(numbr);
  return new Intl.NumberFormat('id-ID', { 
  style: 'currency', currency: "IDR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0 }).format(nominal);
}

// membuat fungsi untuk menghitung total salary karyawan
function calculateTotalSalary(employee = {}) {
  // mengextract data/properti/key dari object employee
  const {position, isMarride, religion} = employee;

  // list gaji pokok berdasaran jabatan
  const listGajiPokok = {
    Manager: 1_5000_000,
    'Assistant Manager': 10_000_000,
    Supervisor: 7_500_000,
    Staff: 3_000_000
  };

  // Menentukan Gaji Pokok Karyawan
  const gajiPokok = listGajiPokok[position];
  const tunjanganJabatan = 0.2 * gajiPokok;
  const bpjs = 0.05 * gajiPokok;
  const tunjanganKeluarga = isMarride ? 0.1 * gajiPokok : 0 ;
  const gajiKotor = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;
  const zakat = religion === 'Islam' && gajiKotor >= 7_000_000 ? 0.025 * gajiKotor : 0;
  const gajiBersih = gajiKotor - zakat;

  Object.assign(employee,{ 
    gajiPokok, 
    tunjanganJabatan, 
    bpjs, 
    tunjanganKeluarga, 
    gajiKotor, 
    zakat, 
    gajiBersih  
  })
}

export {formatRupiah, calculateTotalSalary};