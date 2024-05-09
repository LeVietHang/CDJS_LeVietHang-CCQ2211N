function convert() {
    // Lấy giá trị và đơn vị đầu vào từ người dùng
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;

    // Lấy đơn vị đích từ người dùng
    const toUnit = document.getElementById('toUnit').value;

    // Chuyển đổi giá trị sang đơn vị đích
    let result;
    if (fromUnit === 'm') {
        if (toUnit === 'ft') {
            result = value * 3.28084;
        } else if (toUnit === 'inch') {
            result = value * 39.3701;
        } else {
            result = value;
        }
    } else if (fromUnit === 'ft') {
        if (toUnit === 'm') {
            result = value / 3.28084;
        } else if (toUnit === 'inch') {
            result = value * 12;
        } else {
            result = value;
        }
    } else if (fromUnit === 'inch') {
        if (toUnit === 'm') {
            result = value / 39.3701;
        } else if (toUnit === 'ft') {
            result = value / 12;
        } else {
            result = value;
        }
    }

    // Hiển thị kết quả
    document.getElementById('result').textContent = `Kết quả: ${result} ${toUnit}`;
}