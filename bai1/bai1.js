//Đọc dữ liệu từ file in.txt
var fs = require('fs');
var data = fs.readFileSync('in.txt', 'utf8');
var lines = data.split("\n");

//Khai báo tọa độ 4 gốc O, A, B, C
var O = [0, 0];
var A = [5, 10];
var B = [A[0] - 5, A[1] + 5];
// var B = [-5, 5];
var C = [-3, 13];

//Khai báo tọa độ 3 điểm X, Y, Z
var X = lines[0].split(" ").map(function(x) { return parseInt(x) });
var Y = lines[1].split(" ").map(function(x) { return parseInt(x) });
var Z = lines[2].split(" ").map(function(x) { return parseInt(x) });

//Tính tọa độ theo hệ tọa độ O
X = [X[0] + A[0], X[1] + A[1]];
Y = [Y[0] + B[0], Y[1] + B[1]];
Z = [Z[0] + C[0], Z[1] + C[1]];

//Tính giá trị của các vector XY, XZ, YZ

var XY = [Y[0] - X[0], Y[1] - X[1]];
var XZ = [Z[0] - X[0], Z[1] - X[1]];
var YZ = [Z[0] - Y[0], Z[1] - Y[1]];




//Xuất kết quả ra file out.txt
var output = XY.join(" ") + "\n" + XZ.join(" ") + "\n" + YZ.join(" ");
fs.writeFileSync('out.txt', output);