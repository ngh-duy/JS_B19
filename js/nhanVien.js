class nhanVien {
    constructor(_id, _hoTen, _email, _matKhau, _ngayLam, _luongCB, _chucVu, _gioLam) {
        this.id = _id;
        this.hoTen = _hoTen;
        this.email = _email;
        this.matKhau = _matKhau;
        this.ngayLam = _ngayLam;
        this.luongCB = _luongCB;
        this.chucVu = _chucVu;
        this.gioLam = _gioLam;
        this.xepLoai = this.xepLoaiNV(_gioLam);
        this.tongLuong = this.tongLuongNV(_luongCB,_chucVu);
    }
    xepLoaiNV(_gioLam){
        if(_gioLam >=192) return "Xuất sắt";
        if(_gioLam >=176) return "Giỏi"
        if(_gioLam >=160) return "Khá";
        else return "Trung bình"
    }
    tongLuongNV(_luongCB, _chucVu){
        if(_chucVu == "Sếp")
            return _luongCB*3;
        if(_chucVu == "Trưởng phòng")
            return _luongCB*2;
        return _luongCB;
    }
}
export default nhanVien;