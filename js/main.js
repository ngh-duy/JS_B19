import nhanVien from './NhanVien.js';
import lisNhanVien from './listNhanVien.js';
import validation from './validation.js';

    const listNV = new lisNhanVien();
    const vali = new validation();
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
        <td> <button type="button" onclick="getId('${nhanvien.id}')">Xóa</button>
      
         </td>
    </tr>`;
}
const loadList = () => {
    const getLocalListNV = JSON.parse(localStorage.getItem("DSNV")) || [];
    document.getElementById("tableDanhSach").innerHTML = '';  
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
    let check=vali.checkAccount( info.id, "Tài khoản tối đa 4 - 6 ký số");
    check &=vali.checkName( info.hoTen,"Tên nhân viên phải là chữ");
    check &= vali.checkEmail(   info.email, "Email phai dung dinh dang");
    check &= vali.checkPassword( info.matKhau, "Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống");
    check &= vali.checkLuongCoBan(info.luongCB, "Lương cơ bản 1 000 000 - 20 000 000");
    check &= vali.checkChucVu( info.chucVu, "Chức vụ không hợp lệ");    
    check &= vali.checkGioLam( info.gioLam, "+ Số giờ làm trong tháng 80 - 200 giờ");
    if(!check) return ;
     const getLocalListNV = JSON.parse(localStorage.getItem("DSNV")) || [];
      const idIn = info.id;
    const index =getLocalListNV.findIndex(obj => obj.id === idIn);
    if(!index == -1) return alert("Tai khoảng sinh viên đã có ");
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
function renderList(arr) {
    document.getElementById("tableDanhSach").innerHTML = '';
    arr.forEach(nv => {
        document.getElementById("tableDanhSach").innerHTML += getList(nv);
    });
}

document.getElementById('searchName').addEventListener('input', function() {
    const keyword = this.value.trim();
    if (keyword === '') {
        renderList(listNV.arr); 
    } else {
        const filtered = listNV.searchByChucVu(keyword);
        renderList(filtered);
    }
});
// cập nhật sinh viênviên
document.getElementById("btnCapNhat").onclick = () => {
    const info = getInfo(); 
    const idIn = info.id;

    const getLocalListNV = JSON.parse(localStorage.getItem("DSNV")) || [];

    const index = getLocalListNV.findIndex(obj => obj.id === idIn);
    console.log(index);

    if (index !== -1) {

        getLocalListNV[index].hoTen = info.hoTen;
        getLocalListNV[index].email = info.email;
        getLocalListNV[index].matKhau = info.matKhau;
        getLocalListNV[index].ngayLam = info.ngayLam;
        getLocalListNV[index].luongCB = info.luongCB;
        getLocalListNV[index].chucVu = info.chucVu;
        getLocalListNV[index].gioLam = info.gioLam;

        localStorage.setItem("DSNV", JSON.stringify(getLocalListNV));
    }
    loadList();
};
