import nhanVien from './NhanVien.js';
import lisNhanVien from './listNhanVien.js';


    const listNV = new lisNhanVien();
export const getEle = (id) => { return document.getElementById(id).value; }
// Lấy thông tin từ form

let getInfo = () => {
    return {
        id: getEle("tknv"),
        hoTen: getEle("name"),
        email: getEle("email"),
        matKhau: getEle("password"),
        ngayLam: getEle("datepicker"),
        luongCB: getEle("luongCB"),
        chucVu: getEle("chucvu"),
        gioLam: getEle("gioLam")
    };
};
const getList = (nhanvien) => {
    return ` <tr>
        <td>${nhanvien.id}</td>
        <td>${nhanvien.hoTen}</td>
        <td>${nhanvien.email}</td>
        <td>${nhanvien.ngayLam}</td>
        <td>${nhanvien.chucVu}</td>
        <td>${nhanvien.tongLuong}</td>
        <td>${nhanvien.xepLoai}</td>
        <td> <button type="button" onclick="getId('${nhanvien.id}')">KQ</button> </td>
    </tr>`;
}
const loadList = () => {
    const getLocalListNV = JSON.parse(localStorage.getItem("DSNV"));
    for (const EM of getLocalListNV) {
        document.getElementById("tableDanhSach").innerHTML += getList(EM);
    }
}
loadList();
///
window.getId =(id)=>{
    const getLocalListNV = JSON.parse(localStorage.getItem("DSNV"));
    // for (let index = 0; index < getLocalListNV.length; index++) {
        
    // }
    const index =getLocalListNV.findIndex(obj => obj.id === id);
    console.log(index);
    listNV.removeNhanVien(index);
    localStorage.setItem("DSNV", JSON.stringify(listNV.arr));
    loadList();
}

document.getElementById("btnThemNV").onclick = () => {
    const info = getInfo();
    const employees = JSON.parse(localStorage.getItem("DSNV")) || [];

    const isValid = checkForm(
        info.id,
        info.hoTen,
        info.email,
        info.matKhau,
        info.ngayLam,
        info.luongCB,
        info.chucVu,
        info.gioLam,
        employees,
        false
    );

    if (!isValid) return;

    const NV = new nhanVien(
        info.id,
        info.hoTen,
        info.email,
        info.matKhau,
        info.ngayLam,
        info.luongCB,
        info.chucVu,
        info.gioLam
    );

    listNV.addNhanVien(NV);
    localStorage.setItem("DSNV", JSON.stringify(listNV.arr));
    loadList();
};
