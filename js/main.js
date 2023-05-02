// Exercise 1
// Khối 1: input(markPoint, selectArea, selectObjec, markOne, markTwo, markThree)
// Khối 2:
// B1: tạo hàm và gán hàm vào button
// B2: trong hàm lấy giá trí nhập từ bán phím và tạo công thức tính 
//     totalObject =  markOne + markTwo + markThree
//     totalMark = totalObject + selectArea + selectObject
// B3: so sánh totalMark và markPoint
//     totalMark >= markPoint ---> Bạn đã đậu. Tổng điểm
//     totalMark < markPoint && totalObject != 0  ---> Bạn đã rớt. Tổng điểm
//     markOne == 0 || markTwo == 0 || markThree == 0 ---> Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0
//     còn lại ---> Nhập sai cú pháp mời nhập lại
// Khối 3: output (result1) kết quả đậu/rớt và tổng điểm 
function click1() {
    var markPoint = Number(document.getElementById("markPoint").value)
    var selectArea = Number(document.getElementById("selectArea").value)
    var selectObject = Number(document.getElementById("selectObject").value)
    var markOne = Number(document.getElementById("markOne").value)
    var markTwo = Number(document.getElementById("markTwo").value)
    var markThree = Number(document.getElementById("markThree").value)
    var totalObject,totalMark = 0
         totalObject =  markOne + markTwo + markThree
         totalMark = totalObject + selectArea + selectObject
    
    if (totalMark >= markPoint && markOne != 0 && markTwo != 0 && markThree != 0) {
        document.getElementById("result1").innerHTML = "Bạn đã đậu. Tổng điểm: " + totalMark
    } else if (totalMark < markPoint && totalObject != 0) {
        document.getElementById("result1").innerHTML = "Bạn đã rớt. Tổng điểm: " + totalMark
    } else if (markOne == 0 || markTwo == 0 || markThree == 0) {
        document.getElementById("result1").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
    } else {
        document.getElementById("result1").innerHTML = "Nhập sai cú pháp mời nhập lại"
    }
}

// Exercise 2
// Khối 1: input(name, kw)
// Khối 2:
// B1: tạo hàm và gán hàm vào button
// B2: trong hàm lấy giá trí nhập từ bán phím và tạo công thức tính   
// B3: so sánh 
//    0 < kw <= 50 ---> totalKw = kw * 500
//    50 < kw <= 100 ---> totalKw = 50 * 500 + ( kw - 50 ) * 650
//    100 < kw <= 200 ---> totalKw = 50 * 500 + 50 * 650 + ( kw - 100 ) * 850
//    200 < kw <= 350 ---> totalKw = 50 * 500 + 50 * 650 + 100 * 850 + ( kw - 200 ) * 1100
//    kw > 350 ---> totalKw = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + ( kw - 350 ) * 1300
// Khối 3: output (result1) tiền điện
function click2() {
    var name = document.getElementById("name").value
    var kw = Number(document.getElementById("kw").value)

    var totalKw = 0 ;

    if (kw > 0) {
        if (kw > 0 && kw <= 50) {
            totalKw = kw * 500
        } else if (kw > 50 && kw <= 100) {
            totalKw = 50 * 500 + ( kw - 50 ) * 650
        } else if (kw > 100 && kw <= 200) {
            totalKw = 50 * 500 + 50 * 650 + ( kw - 100 ) * 850
        } else if ( kw > 200 && kw <= 350) {
            totalKw = 50 * 500 + 50 * 650 + 100 * 850 + ( kw - 200 ) * 1100
        } else {
            totalKw = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + ( kw - 350 ) * 1300
        }
    
        document.getElementById("result2").innerHTML = "Họ tên: " + name + ' ' + "Tiền điện: " + totalKw.toLocaleString()
    } else {
        alert(" số kw không hợp lệ")
    }

    }
