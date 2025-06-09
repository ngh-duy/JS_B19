function checkTaiKhoan(taiKhoan, employees, isEdit = false) {
    const taiKhoanPattern = /^\d{4,6}$/;
    if (!taiKhoan) {
        return "Tài khoản không được để trống!";
    } else if (!taiKhoanPattern.test(taiKhoan)) {
        return "Tài khoản phải là số và có 4-6 ký tự!";
    } else if (!isEdit && employees.some(emp => emp.taiKhoan === taiKhoan)) {
        return "Tài khoản đã tồn tại!";
    }
    return "";
}

function checkHoVaTen(hoVaTen) {
    const hoVaTenPattern = /^[a-zA-Z\sÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸ]+$/;
    if (!hoVaTen) {
        return "Tên nhân viên không được để trống!";
    } else if (!hoVaTenPattern.test(hoVaTen)) {
        return "Tên nhân viên chỉ được chứa chữ cái và khoảng trắng!";
    }
    return "";
}

function checkEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        return "Email không được để trống!";
    } else if (!emailPattern.test(email)) {
        return "Email không đúng định dạng!";
    }
    return "";
}

function checkMatKhau(matKhau, isEdit = false) {
    const matKhauPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,10}$/;
    if (!matKhau && !isEdit) {
        return "Mật khẩu không được để trống!";
    } else if (matKhau && !matKhauPattern.test(matKhau)) {
        return "Mật khẩu phải 6-10 ký tự, chứa ít nhất 1 số, 1 chữ in hoa, 1 ký tự đặc biệt (!@#$%^&*)!";
    }
    return "";
}

function checkNgayLam(ngayLam) {
    const ngayLamPattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
    if (!ngayLam) {
        return "Ngày làm không được để trống!";
    } else if (!ngayLamPattern.test(ngayLam)) {
        return "Ngày làm phải có định dạng mm/dd/yyyy!";
    }
    return "";
}

function checkLuongCB(luongCB) {
    const luong = parseFloat(luongCB);
    if (!luongCB) {
        return "Lương cơ bản không được để trống!";
    } else if (isNaN(luong) || luong < 1000000 || luong > 20000000) {
        return "Lương cơ bản phải từ 1,000,000 đến 20,000,000!";
    }
    return "";
}

function checkChucVu(chucVu) {
    const validChucVu = ["Sếp", "Trưởng phòng", "Nhân viên"];
    if (!chucVu) {
        return "Vui lòng chọn chức vụ hợp lệ!";
    } else if (!validChucVu.includes(chucVu)) {
        return "Chức vụ không hợp lệ!";
    }
    return "";
}

function checkGioLam(gioLam) {
    const gio = parseInt(gioLam);
    if (!gioLam) {
        return "Giờ làm không được để trống!";
    } else if (isNaN(gio) || gio < 80 || gio > 200) {
        return "Giờ làm phải từ 80 đến 200 giờ!";
    }
    return "";
}

function checkForm(taiKhoan, hoVaTen, email, matKhau, ngayLam, luongCB, chucVu, gioLam, employees, isEdit = false) {
    const errors = [
        { id: "tbTKNV", message: checkTaiKhoan(taiKhoan, employees, isEdit) },
        { id: "tbTen", message: checkHoVaTen(hoVaTen) },
        { id: "tbEmail", message: checkEmail(email) },
        { id: "tbMatKhau", message: checkMatKhau(matKhau, isEdit) },
        { id: "tbNgay", message: checkNgayLam(ngayLam) },
        { id: "tbLuongCB", message: checkLuongCB(luongCB) },
        { id: "tbChucVu", message: checkChucVu(chucVu) },
        { id: "tbGiolam", message: checkGioLam(gioLam) }
    ];

    errors.forEach(error => showError(error.id, error.message));
    return errors.every(error => error.message === "");
}

function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId);
    errorElement.textContent = message;
    errorElement.style.display = message ? 'block' : 'none';
}
