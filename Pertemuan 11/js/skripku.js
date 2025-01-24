function konversiKurs(){
    //tangkap id form
    let form = window.document.getElementById("form_valas");
    //tangkap request element2 form
    let hrg = parseFloat(form.harga.value);
    let jml = parseFloat(form.jumlah.value);
    let vls = parseFloat(form.valas.value);
    //hitung total harga yg dikonversi ke rp
    let tohar = hrg * jml * vls;
    //penempatan hasil di element total
    form.total.value = tohar;
}