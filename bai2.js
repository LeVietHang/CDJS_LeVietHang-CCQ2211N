function str_limit(str,limit=11)
{
    //xoa tag HTML
    str =str.replace(/<[^>]*>/g," ");
    // Xóa bỏ ký tự trắng ở đầu, cuối chuỗi và giữa 2 từ chỉ còn 1 khoảng trắng
    str = str.trim().replace(/\s+/g, ' ');
    //chuyen ve in hoa
    str = str.toLowerCase();  
    //chuyen ky tu dau ve in hoa
    const mang = str.split(" ");
    const mangmoi =mang.slice(0,limit);
    str = mangmoi.join(" ");
    return str;

}
let str= "  chao em   em xinh qua choi   em an com chua nha  ";
console.log(str.length);
str=str_limit(str);
console.log(str);

//-slice(): Lấy một phần chuỗi con từ chuỗi gốc.
//-join(): Nối các chuỗi con trong một mảng thành một chuỗi mới.
//-split(): Chia chuỗi thành một mảng các chuỗi con dựa trên một ký tự phân cách.
// XOA, CHUYEN DOI  ->> DÙNG REPLACE
