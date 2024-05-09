function generateURL() {
  var inputString = document.getElementById("inputString").value;
  var urlFriendlyString = convertToURLFriendly(inputString);
  document.getElementById("urlOutput").innerText = urlFriendlyString;
}

function convertToURLFriendly(inputString) {
  // Loại bỏ khoảng trắng
  var khoangtrang = inputString.trim().replace(/\s+/g, "_");

  // Loại bỏ thẻ (tag)
  var tag = khoangtrang.replace(/<\/?[^>]+(>|$)/g, "");

  // Loại bỏ các ký tự đặc biệt
  var urlFriendlyString = tag.replace(/[^\w\s-]/g, "");

  // Thay thế khoảng trắng bằng dấu gạch dưới (_) hoặc dấu gạch ngang (-)
  urlFriendlyString = urlFriendlyString.replace(/\s+/g, "_");

  return urlFriendlyString;
}
