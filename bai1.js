function xuLyChuoi(chuoi) {

    // strim xoa ki tu trang 2 ben
    str = strim.chuoi();
    // Xóa bỏ ký tự trắng ở đầu, cuối chuỗi và giữa 2 từ chỉ còn 1 khoảng trắng
    chuoi = chuoi.trim().replace(/\s+/g, ' ');

       // chuyen chuoi ve in hoa
       chuoi = chuoi.toLowerCase();

    // Chuyển đổi ký tự đầu của mỗi từ thành in HOA
    chuoi = chuoi.toLowerCase().replace(/(^|\s)\S/g, function(firstLetter) {
        return firstLetter.toUpperCase();
    });

    return chuoi;
}

// Ví dụ 
var chuoiVao = "   javascript Xử lý  chuỗi  bất   kỳ  ";
var chuoiXuLy = xuLyChuoi(chuoiVao);
console.log(chuoiXuLy);


// XOA, CHUYEN DOI  ->> DÙNG REPLACE
