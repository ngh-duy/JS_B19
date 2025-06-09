class lisNhanVien {
    constructor() {
        this.arr = JSON.parse(localStorage.getItem("DSNV")) || [];
    }
    addNhanVien(nhanvien){
        this.arr.push(nhanvien);
    }
    removeNhanVien(index){
        this.arr.splice(index,1);
    }
searchByChucVu(keyword) {
    return this.arr.filter(nv => nv.chucVu.toLowerCase().includes(keyword.toLowerCase()));
}
}
export default lisNhanVien;