
const barangData = [
  { kode: "001", nama: "Buku 1", harga: 15000 },
  { kode: "002", nama: "Buku 2", harga: 25000 },
  { kode: "003", nama: "Buku 3", harga: 35000 },
];

function tampilkanDataBarang() {
  const barang11 = document.getElementById("barangTable");
  barangData.forEach((barang, index) => {
    const row = barang11.insertRow(index + 1);
    const kode123 = row.insertCell(0);
    const nama123 = row.insertCell(1);
    const harga123 = row.insertCell(2);

    kodeTab.textContent = barang.kode;
    nama123.textContent = barang.nama;
    harga123.textContent = barang.harga;
  });
}

function tambahTransaksi(event) {
  event.preventDefault();

  const kodeInput = document.getElementById("kodeInput");
  const quantityInput = document.getElementById("quantityInput");

  const selectedBarang = barangData.find(
    (barang) => barang.kode === kodeInput.value
  );
  if (!selectedBarang) {
    alert("Kode barang tidak valid");
    return;
  }
  const jumlah = parseInt(quantityInput.value);
  const totalHarga = selectedBarang.harga * jumlah;

  const bayar = window.prompt(
    "Total yang harus dibayar: " +
      totalHarga +
      "\n\n" +
      "Masukkan jumlah uang yang akan dibayarkan:"
  );

  if (bayar === null || bayar === "") {
    alert("Pembayaran dibatalkan");
    return;
  }

  const jumlahBayar = parseFloat(bayar);

  if (isNaN(jumlahBayar) || jumlahBayar < totalHarga) {
    alert(
      "Jumlah pembayaran tidak valid atau kurang dari total yang harus dibayar"
    );
    return;
  }

  const kembalian = jumlahBayar - totalHarga;
  alert(
    "Pembayaran berhasil!\n\n" +
      "Total yang harus dibayar: " +
      totalHarga +
      "\n" +
      "Jumlah yang dibayarkan: " +
      jumlahBayar +
      "\n" +
      "Kembalian: " +
      kembalian
  );

}

document.addEventListener("DOMContentLoaded", () => {
  tampilkanDataBarang();
});
