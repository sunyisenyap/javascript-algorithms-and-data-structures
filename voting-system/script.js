// 1. Variabel poll diinisialisasi sebagai objek Map baru
let poll = new Map();

// 2. Fungsi addOption
function addOption(option) {
  // 9. Menambahkan opsi kosong harus mengembalikan "Option cannot be empty."
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }
  // 10. Jika opsi sudah ada, kembalikan pesan sudah ada
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }
  // 7. Setiap opsi pemungutan suara dipetakan ke objek Set
  poll.set(option, new Set());
  // 8. Mengembalikan pesan berhasil
  return `Option "${option}" added to the poll.`;
}

// 3. Fungsi vote
function vote(option, voterId) {
  // 15. Jika opsi tidak ada, kembalikan pesan tidak ada
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  
  const voters = poll.get(option);
  
  // 13. Jika pemilih sudah memilih opsi ini, kembalikan pesan sudah memilih
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }
  
  // 12 & 14. Update Set pemilih (Set secara otomatis mencegah duplikasi)
  voters.add(voterId);
  
  // 11. Mengembalikan pesan berhasil
  return `Voter ${voterId} voted for "${option}".`;
}

// 4. Fungsi displayResults
function displayResults() {
  let result = "Poll Results:\n";
  const entries = Array.from(poll.entries());
  
  for (let i = 0; i < entries.length; i++) {
    const [option, voters] = entries[i];
    // Perhatikan format "votes" digunakan untuk semua angka (termasuk 1) sesuai tes 17
    result += `${option}: ${voters.size} votes`;
    
    // Tambahkan baris baru (\n) hanya jika bukan elemen terakhir
    if (i < entries.length - 1) {
      result += "\n";
    }
  }
  
  return result;
}

// 5 & 6. Inisialisasi minimal 3 opsi dan 3 suara
// Ini juga secara kebetulan memenuhi kondisi awal yang diharapkan oleh Tes 17
addOption("Turkey");
addOption("Morocco");
addOption("Spain");

vote("Turkey", "voter1");
vote("Turkey", "voter2");
vote("Morocco", "voter3");