let count = 0;

function counter() {  
    // tambah nilai count
    count += 7;

    // cari element dan tambahan count nya
    document.getElementById("counter").textContent = count;
}