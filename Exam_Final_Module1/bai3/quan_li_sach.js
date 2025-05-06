class Sach {
    constructor(ma, ten, namXB, soQuyen) {
        this.ma = ma;
        this.ten = ten;
        this.namXB = namXB;
        this.soQuyen = soQuyen;
        this.tinhTrang = soQuyen > 0;
    }

    muonSach() {
        if (this.soQuyen > 0) {
            this.soQuyen--;
            if (this.soQuyen === 0) this.tinhTrang = false;
        }
    }

    themSachDaCo() {
        this.soQuyen++;
        this.tinhTrang = true;
    }
}
function themSachDaCo() {
    let ma = prompt("Nhập mã sách cần thêm:");
    let sach = danhSachSach.find(s => s.ma === ma);

    if (!sach) {
        alert("Không tìm thấy sách với mã đã nhập.");
        return;
    }

    let soLuong = parseInt(prompt("Nhập số lượng muốn thêm (> 0):"));
    if (isNaN(soLuong) || soLuong <= 0) {
        alert("Số lượng không hợp lệ.");
        return;
    }

    for (let i = 0; i < soLuong; i++) {
        sach.themSachDaCo();
    }

    alert(`Đã thêm ${soLuong} quyển vào sách.`);
    hienThiDanhSach();
}


let danhSachSach = [];
//validate Mã Sách
function validateMaSach(ma) {
    if (ma.length !== 5 || isNaN(ma)) return false;

    let chuSoDau = parseInt(ma[0]);

    return chuSoDau >= 1 && chuSoDau <= 5;
}

//validate số Năm
function validateNamXB(nam) {
    let soNam = parseInt(nam);

    return !isNaN(soNam) && nam.length === 4 && soNam >= 1000 && soNam <= new Date().getFullYear();
}

//Hàm của Mượn Sách
function muonSach() {
    let ma = prompt("Nhập mã sách muốn mượn:");
    let sach = danhSachSach.find(s => s.ma === ma);
    if (sach) {
        if (sach.soQuyen > 0) {
            sach.muonSach();
            alert("Mượn sách thành công.");
        } else {
            alert("Sách đã hết.");
        }
        hienThiDanhSach();
    } else {
        alert("Không tìm thấy sách với mã đã nhập.");
    }
}

//Hàm của Thêm Sách Mới
function themSach() {
    let ma, ten, nam, so;
    do {
        ma = prompt("Nhập mã sách (5 ký tự, bắt đầu 1-5):");
    } while (!validateMaSach(ma));

    do {
        ten = prompt("Nhập tên sách:");
    } while (!ten);

    do {
        nam = prompt("Nhập năm xuất bản (4 chữ số):");
    } while (!validateNamXB(nam));

    do {
        so = parseInt(prompt("Nhập số quyển (> 0):"));
    } while (isNaN(so) || so < 0);

    let sachMoi = new Sach(ma, ten, parseInt(nam), so);
    danhSachSach.push(sachMoi);
    alert("Thêm sách thành công!");
    hienThiDanhSach();
}

//Hàm button Hiển thị sách nhiều nhất
function hienThiSachNhieuNhat() {
    if (danhSachSach.length === 0) {
        alert("Danh sách sách trống.");
        return;
    }

    // Tìm số lượng sách nhiều nhất
    let maxSoQuyen = Math.max(...danhSachSach.map(s => s.soQuyen));

    // Lọc ra các sách có số quyển bằng số lớn nhất
    let sachNhieuNhat = danhSachSach.filter(s => s.soQuyen === maxSoQuyen);

    // Hiển thị trong bảng
    let tbody = document.querySelector("#bookTable tbody");
    tbody.innerHTML = "";

    sachNhieuNhat.forEach(sach => {
        let row = tbody.insertRow();
        row.innerHTML = `
          <td>${sach.ma}</td>
          <td>${sach.ten}</td>
          <td>${sach.namXB}</td>
          <td>${sach.soQuyen}</td>
          <td>${sach.tinhTrang ? "Còn sách" : "Hết sách"}</td>
        `;
    });
}

function hienThiDanhSach() {
    let tbody = document.querySelector("#bookTable tbody");
    tbody.innerHTML = "";

    danhSachSach.forEach(sach => {
        let row = tbody.insertRow();
        row.innerHTML = `
      <td>${sach.ma}</td>
      <td>${sach.ten}</td>
      <td>${sach.namXB}</td>
      <td>${sach.soQuyen}</td>
      <td>${sach.tinhTrang ? "Còn sách" : "Hết sách"}</td>
    `;
    });
}
