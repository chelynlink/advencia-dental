# Advencia Dental

Website statis pelanggan untuk Advencia Dental di Sinindian, Kotamobagu. File menggunakan HTML, CSS, dan JavaScript biasa. Reservasi diteruskan ke WhatsApp 0822-9195-6607. Admin membalas dan mengonfirmasi jadwal melalui percakapan WhatsApp.

## Simpan dan buka di Mac

1. Unduh dan ekstrak ZIP di Finder. Buka folder `advencia-dental`.
2. Pertahankan letak semua file. Folder `assets` berisi logo yang dipakai di halaman.
3. Klik dua kali `index.html` untuk melihat website di Chrome atau Safari. Untuk mengedit kode, buka folder yang sama di editor kode.

## Unggah ke GitHub

1. Buka repository [chelynlink/advencia-dental](https://github.com/chelynlink/advencia-dental).
2. Pilih **Add file → Upload files**. Seret isi folder hasil ekstrak. Letakkan `index.html`, `styles.css`, `site.js`, `vercel.json`, dan folder `assets` di tingkat teratas repository. `README.md` boleh ikut diunggah. Pastikan nama `index.html` tepat agar menggantikan file lama.
3. Periksa daftar file, lalu pilih **Commit changes**. Jika GitHub mengarahkan ke branch terpisah, buat pull request dan merge ke branch produksi. Pertahankan file lain yang masih dibutuhkan.
4. Jika menggunakan GitHub Desktop, salin file ke folder checkout repository dan commit perubahan, lalu **Push origin**. Folder `assets` harus muncul sebagai folder di repository.

## Deploy ke Vercel

1. Pakai tim Vercel dengan paket yang mengizinkan penggunaan komersial, seperti Pro. [Ketentuan Vercel](https://vercel.com/legal/terms)
2. Dari dashboard Vercel, pilih **Add New → Project**, hubungkan GitHub, lalu pilih **Import** pada repository `advencia-dental`. Jika repository sudah terhubung ke project yang benar, gunakan project tersebut. [Panduan integrasi GitHub](https://vercel.com/docs/git/vercel-for-github)
3. Pastikan **Root Directory** menunjuk ke tingkat yang berisi `index.html` dan framework preset **Other**. Situs ini memakai file statis dan konfigurasi output di `vercel.json`. Biarkan build command kosong dan lanjutkan dengan **Deploy**.
4. Buka URL `vercel.app` yang diberikan Vercel. Periksa apakah file CSS, logo, dan menu termuat. Tes WhatsApp dan Maps dari ponsel sebelum membagikan URL.

## Hubungkan domain sendiri

1. Di project Vercel, buka **Settings → Domains** dan tambahkan domain yang sudah kamu miliki.
2. Di penyedia domain, masukkan DNS record yang ditampilkan Vercel untuk domainmu. Verifikasi status domain dan HTTPS setelah DNS terdeteksi. [Panduan domain Vercel](https://vercel.com/docs/domains/working-with-domains/add-a-domain)
3. Setelah URL produksi dipilih, tambahkan `og:url`, `og:image`, dan `link rel="canonical"` di bagian `head` file `index.html`. Gunakan URL HTTPS publik absolut, misalnya URL website dan URL absolut gambar brand yang sudah diunggah. Metadata judul dan deskripsi sudah tersedia.

## Cara mengubah isi

| Yang diubah | Tempat mengedit |
|---|---|
| Nama, alamat, hari kunjungan, FAQ, link Maps dan Instagram | `index.html` |
| WhatsApp dan isi pesan | Ganti seluruh kemunculan nomor tampil dan nomor internasional di tautan `wa.me` pada `index.html`. Pesan tiap tombol berada pada parameter `text` dalam bentuk URL-encoded. |
| Palet dan font | Variabel warna dan aturan font di awal `styles.css`. Versi ini memakai Georgia dan font sistem agar bisa dimuat tanpa koneksi font eksternal. |
| Logo dan foto | Simpan aset di folder `assets`, gunakan nama file yang sederhana, tambahkan teks alternatif yang relevan, dimensi, dan `loading="lazy"` untuk foto di bawah pembuka. |
| Menu ponsel | `site.js` dan aturan media query menu di `styles.css` |
| Layanan terverifikasi | Di `index.html`, salin pola kartu pada bagian Layanan. Ubah judul, deskripsi, label aksesibel, dan pesan WhatsApp sesuai nama layanan. |

### Daftar layanan untuk verifikasi internal

Sebelum menambah kartu tindakan ke halaman pelanggan, konfirmasi penyedia, kualifikasi atau izin yang berlaku, dan lingkup tindakan untuk masing-masing layanan.

- Tambal dan Restorasi Gigi
- Perbaikan Bentuk dan Celah Gigi
- Estetika Senyum, termasuk gigi kelinci dan gingsul
- Behel dan Veneer
- Dental Diamond dan Tooth Gems
- Pelepasan Behel dan Pembersihan Sisa Lem
- Flomber Gigi. Konfirmasi arti istilah serta nama layanan yang akan ditampilkan.
- Konsultasi Estetika Gigi. Versi ini menampilkan konsultasi awal gratis dan informasi kunjungan melalui WhatsApp.

## Checklist sebelum tayang

- [ ] Cek tampilan di ponsel, tablet, dan komputer.
- [ ] Buka menu di ponsel, pilih setiap bagian, dan tes tombol Escape serta navigasi dengan Tab.
- [ ] Buka tombol WhatsApp, cocokkan nomor, dan periksa teks yang terisi. Uji satu pesan dengan admin dan cek proses konfirmasi jadwal.
- [ ] Buka Google Maps dan cocokkan pin dengan alamat di Sinindian.
- [ ] Konfirmasi nama pemilik, konsultasi awal gratis, hari kunjungan, dan area home service.
- [ ] Tinjau kebijakan privasi dengan pemilik. Cocokkan penanganan pesan WhatsApp, pihak yang dapat mengakses, dan berapa lama pesan disimpan dengan praktik bisnis sebenarnya.
- [ ] Konfirmasi kualifikasi, izin, dan lingkup layanan sebelum mengiklankan tindakan.
- [ ] Publikasikan foto pasien hanya setelah izin tayang dan ketentuan publikasinya jelas. Simpan file review internal di luar repository publik dan folder deploy.
- [ ] Cek URL HTTPS produksi serta metadata berbagi setelah domain dipilih.
