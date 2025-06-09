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
    return this.arr.filter(nv => nv.xepLoai.toLowerCase().includes(keyword.toLowerCase()));
}
capNhatNhanVien(updatedNV) {
    const index = this.arr.findIndex(nv => nv.id === updatedNV.id);
    if (index !== -1) {
        this.arr[index] = updatedNV;
    }
}

}
export default lisNhanVien;