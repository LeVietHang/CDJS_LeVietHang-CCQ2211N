// Khởi tạo danh sách môn học
let subjects = [];

// Hàm thêm môn học vào danh sách
function addSubject() {
    const subjectInput = document.getElementById('subjectName');
    const subjectName = subjectInput.value.trim();

    // Kiểm tra xem tên môn học có được nhập vào không
    if (subjectName !== '') {
        // Thêm môn học vào danh sách
        subjects.push(subjectName);

        // Hiển thị danh sách môn học mới
        displaySubjects();

        // Xóa nội dung trong input sau khi thêm
        subjectInput.value = '';
    } else {
        alert('Tên môn học không được để trống');
    }
}

// Hàm hiển thị danh sách môn học
function displaySubjects() {
    const subjectList = document.getElementById('subjectList');
    // Xóa nội dung cũ của danh sách
    subjectList.innerHTML = '';

    // Thêm mỗi môn học vào danh sách ul li
    subjects.forEach(function(subject) {
        const li = document.createElement('li');
        li.textContent = subject;
        
        // Tạo nút xóa cho mỗi môn học
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';
        deleteButton.onclick = function() {
            deleteSubject(subject);
        };
        
        // Thêm nút xóa vào mỗi môn học
        li.appendChild(deleteButton);

        // Thêm môn học vào danh sách
        subjectList.appendChild(li);
    });
}

// Hàm xóa môn học khỏi danh sách
function deleteSubject(subject) {
    const index = subjects.indexOf(subject);
    if (index !== -1) {
        subjects.splice(index, 1); // Xóa môn học khỏi danh sách
        displaySubjects(); // Hiển thị danh sách cập nhật
    }
}

// Gọi hàm hiển thị danh sách khi tải trang
displaySubjects();