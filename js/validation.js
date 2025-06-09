import { getEle } from "./main.js";

class Validation {
    checkAccount(account, mess) {
        const pattern = /^\d{4,6}$/;
        if (!pattern.test(account)) {
            document.getElementById("tbTKNV").innerHTML = mess;
            document.getElementById("tbTKNV").style.display = "block";
            return false;
        }
        document.getElementById("tbTKNV").innerHTML = mess;
        document.getElementById("tbTKNV").style.display = "none";
        return true;
    }
checkName(name, message) {
    const pattern = /^[a-zA-ZÀ-ỹ\s]+$/;
    if (!pattern.test(name)) {
        document.getElementById("tbTen").innerHTML = message;
        document.getElementById("tbTen").style.display = "block";
        return false;
    }

    document.getElementById("tbTen").innerHTML = "";
    document.getElementById("tbTen").style.display = "none";
    return true;
}
    checkEmpty(value, idNoti, mess) {
        if (value === "") {
            // show thông báo lỗi ra ngoài
            // tạo câu thông báo => gán ra ngoài thẻ inform
            document.getElementById(idNoti).innerHTML = mess;

            // dom tới #id-inform => display: block
            document.getElementById(idNoti).style.display = "block";
            return false;
        }

        document.getElementById(idNoti).innerHTML = "";
        document.getElementById(idNoti).style.display = "none";
        return true;
    }

    checkCharacterLength(value, idNoti, mess, min, max) {
        if (min <= value.trim().length && value.trim().length <= max) {
            getEle(idNoti).innerHTML = "";
            getEle(idNoti).style.display = "none";
            return true;
        }

        getEle(idNoti).innerHTML = mess;
        getEle(idNoti).style.display = "block";
        return false;
    }

    checkString(value, idNoti, mess) {
        const letter =
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.match(letter)) {
            getEle(idNoti).innerHTML = "";
            getEle(idNoti).style.display = "none";
            return true;
        }

        getEle(idNoti).innerHTML = mess;
        getEle(idNoti).style.display = "block";
        return false;
    }
    checkLuongCoBan(luong, message) {
    const luongNumber = Number(luong);
    if (isNaN(luongNumber) || luongNumber < 1000000 || luongNumber > 20000000) {
        document.getElementById("tbLuongCB").innerHTML = message;
        document.getElementById("tbLuongCB").style.display = "block";
        return false;
    }

    document.getElementById("tbLuongCB").innerHTML = "";
    document.getElementById("tbLuongCB").style.display = "none";
    return true;
}
checkChucVu(chucVu, message) {
    const validChucVu = ["Sếp", "Trưởng phòng", "Nhân viên"];
    if (!validChucVu.includes(chucVu)) {
        document.getElementById("tbChucVu").innerHTML = message;
        document.getElementById("tbChucVu").style.display = "block";
        return false;
    }
    document.getElementById("tbChucVu").innerHTML = "";
    document.getElementById("tbChucVu").style.display = "none";
    return true;
}
checkGioLam(gioLam, message) {
 
    const gio = Number(gioLam);
    if (isNaN(gio) || gio < 80 || gio > 200) {
        document.getElementById("tbGiolam").innerHTML = message;
        document.getElementById("tbGiolam").style.display = "block";
        return false;
    }

    document.getElementById("tbGiolam").innerHTML = "";
    document.getElementById("tbGiolam").style.display = "none";
    return true;
}


checkPassword(password, message) {
    const pattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,10}$/;

    if (!pattern.test(password)) {
        document.getElementById("tbMatKhau").innerHTML =message;
        document.getElementById("tbMatKhau").style.display = "block";
        return false;
    }

    document.getElementById("tbMatKhau").innerHTML = "";
    document.getElementById("tbMatKhau").style.display = "none";
    return true;
}

    checkEmail(value, mess) {
        const letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!value.match(letter)) {
            document.getElementById("tbEmail").innerHTML = mess;
             document.getElementById("tbEmail").style.display = "block";
            return false;
        }

         document.getElementById("tbEmail").innerHTML = mess;
        document.getElementById("tbEmail").style.display = "none";
        return true;
    }

    checkSelectOption(idSelect, idNoti, mess) {
        if (getEle(idSelect).selectedIndex !== 0) {
            getEle(idNoti).innerHTML = "";
            getEle(idNoti).style.display = "none";
            return true;
        }

        getEle(idNoti).innerHTML = mess;
        getEle(idNoti).style.display = "block";
        return false;
    }

    checkIdExist(value, idNoti, mess, arr) {
        let isExist = false;
        for (let i = 0; i < arr.length; i++) {
            const food = arr[i];
            if (food.id === value) {
                isExist = true;
                break;
            }
        }

        if (isExist) {
            getEle(idNoti).innerHTML = mess;
            getEle(idNoti).style.display = "block";
            return false;
        }

        getEle(idNoti).innerHTML = "";
        getEle(idNoti).style.display = "none";
        return true;
    }
}

export default Validation;
