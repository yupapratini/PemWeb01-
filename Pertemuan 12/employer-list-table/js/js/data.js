
/**
 * Membuat array objek yang berisi data karyawan 
 */
const employee = [
    {
        id : 111,
        name : 'Evan',
        position : 'Manager',
        isMarride: true,
        religion: 'Islam'
    },
    {
        id : 112,
        name : 'Jaya',
        position : ' Assistant Manager',
        isMarride: false,
        religion: 'Hindu'
    },
    {
        id : 113,
        name : 'Benjamin',
        position : 'Supervisor',
        isMarride: false,
        religion: 'Buddha'
    },
    {
        id : 114,
        name : 'Surya',
        position : 'Staff',
        isMarride: true,
        religion: 'Kristen'
    },
    {
        id : 115,
        name : 'Jefan',
        position : 'Staff',
        isMarride: false,
        religion: 'Kristen Protestan'
    }
];

/**
 * Membuat array columnNames berisi nama kolom
 */
const columnNames = [
    'No',
    'NIP',
    'Nama',
    'Jabatan',
    'Status',
    'Agama',
    'Gaji Pokok',
    'Tunjangan Jabatan',
    'BPJS',
    'Tunjangan Keluarga',
    'Zakat',
    'Gaji Bersih'
];

// export variabel employee dan columnNames
export {employees, columnNames};