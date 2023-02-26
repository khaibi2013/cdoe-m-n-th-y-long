    // lấy về button
    var button = document.getElementById('button');
    //gán sự kiện click 
    button.addEventListener("click", function(){
        //Lấy tất cả các class của button và chuyển thành chuỗi
        var allClass = this.classList.toString();
    // kiểm tra nếu chưa tồn tại class active thì thêm class active
    if (allClass.indexOf('active') == -1) {
        this.classList += ' active';
        }
    //Thêm hoặc xóa class fa-thumbs-down
    this.classList.toggle("fa-thumbs-down");
    });
