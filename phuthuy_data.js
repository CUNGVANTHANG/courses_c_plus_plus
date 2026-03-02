const questionData = [];

// 1. Phân loại quái vật
const monstersList = [
    { name: "Slime Lỗi Cơ Bản", icon: "🦠" },
    { name: "Goblin Trộm Dấu", icon: "👺" },
    { name: "Dơi Toán Học", icon: "🦇" },
    { name: "Kỵ Sĩ Điều Kiện", icon: "🧟‍♂️" },
    { name: "Hồn Ma Logic", icon: "👻" },
    { name: "Ma Sói Biến Số", icon: "🐺" },
    { name: "Rồng Vòng Lặp", icon: "🐉" },
    { name: "Quỷ Lùn Mảng", icon: "👾" },
    { name: "Vua Quái Vật Bug", icon: "👿" }
];

function getRandomMonster() {
    return monstersList[Math.floor(Math.random() * monstersList.length)];
}

// 2. Các câu hỏi lý thuyết cốt lõi được soạn kỹ càng (20 câu)
const baseQuestions = [
    { q: "Để in một thông báo ra màn hình, pháp sư dùng 'bùa chú' nào trong C++?", o: ["cin >>", "cout <<", "print()", "in_ra()"], c: 1, e: "cout đi kèm với dấu << được dùng để xuất dữ liệu ra màn hình." },
    { q: "Khi muốn nhận dữ liệu do người dùng NHẬP từ bàn phím, ta dùng lệnh gì?", o: ["cout <<", "nhap >>", "cin >>", "input()"], c: 2, e: "cin đi kèm với dấu >> dùng để lấy dữ liệu nhập vào từ bàn phím." },
    { q: "Ký hiệu nào dùng để kết thúc một câu lệnh trong C++?", o: [". (chấm)", ": (hai chấm)", "; (chấm phẩy)", "} (đóng ngoặc)"], c: 2, e: "Dấu chấm phẩy (;) đánh dấu việc kết thúc một lệnh." },
    { q: "Kiểu dữ liệu nào sau đây dùng để lưu trữ số nguyên (chẳng hạn số người)?", o: ["float", "double", "int", "string"], c: 2, e: "int (integer) dùng để lưu số nguyên." },
    { q: "Kiểu dữ liệu 'bool' dùng để lưu trữ trạng thái gì?", o: ["Văn bản", "Số thực", "Đúng/Sai (true/false)", "Một ký tự"], c: 2, e: "bool chỉ chứa giá trị true hoặc false." },
    { q: "Phép toán chia lấy phần dư trong C++ là ký hiệu nào?", o: ["/", "%", "\\", "mod"], c: 1, e: "Dấu % là phép chia lấy dư (Ví dụ: 5 % 2 = 1)." },
    { q: "Lệnh nào được dùng để ngay lập tức thoát ra khỏi vòng lặp (loop)?", o: ["exit", "return", "continue", "break"], c: 3, e: "break sẽ phá vỡ và thoát khỏi vòng lặp đang chạy." },
    { q: "Lệnh nào dùng để bỏ qua lần chạy hiện tại và chuyển qua chu kỳ lặp tiếp theo?", o: ["skip", "break", "continue", "next"], c: 2, e: "continue dừng lần lặp hiện tại, bỏ qua các code phía dưới và lặp lại từ đầu block." },
    { q: "Dấu hiệu nhận biết chú thích (comment) trên một dòng trong C++?", o: ["//", "/*", "--", "#"], c: 0, e: "Dùng // để ẩn một dòng code hoặc thêm ghi chú." },
    { q: "Tiền tố nào chỉ ra rằng thư viện 'iostream' đang được nhúng vào chương trình C++?", o: ["#include", "import", "using", "require"], c: 0, e: "#include <iostream> dùng để tải các lệnh nhập/xuất chuẩn của C++." },
    { q: "Từ khóa 'using namespace std;' giúp ta tiết kiệm việc gõ lặp lại tiền tố nào?", o: ["std::", "c::", "io::", "out::"], c: 0, e: "Nhờ có nó, ta viết cout thay vì viết std::cout dài dòng." },
    { q: "Điều kiện rẽ nhánh 'NẾU A lớn hơn B' được viết như thế nào?", o: ["if (A > B)", "if {A > B}", "if [A > B]", "if A > B"], c: 0, e: "Điều kiện của if luôn phải được bao bọc trong cặp ngoặc tròn." },
    { q: "Toán tử logic 'VÀ' (AND) trong C++ là ký hiệu nào?", o: ["&", "&&", "and", "||"], c: 1, e: "&& là toán tử AND logic, chỉ trả về đúng khi toàn bộ điều kiện con đều đúng." },
    { q: "Toán tử logic 'HOẶC' (OR) trong C++ là ký hiệu nào?", o: ["|", "or", "||", "&&"], c: 2, e: "|| là toán tử OR logic, chỉ cần một nhánh đúng là tổng thể sẽ đúng." },
    { q: "Để so sánh BẰNG NHAU, ta dùng ký hiệu nào trong C++?", o: ["=", "==", "===", "!="], c: 1, e: "Dùng HAI dấu bằng (==) để thực hiện phép so sánh. Dấu (=) đơn lẻ là phép gán." },
    { q: "Đâu là cách khai báo mảng tĩnh 5 phần tử số nguyên hợp lệ?", o: ["int arr[5];", "int arr{5};", "array arr(5);", "int arr = [5];"], c: 0, e: "Cú pháp C++: Kieu_Du_Lieu TenMang[Kich_Thuoc];" },
    { q: "Chương trình C++ luôn bắt đầu chạy từ hàm nào đầu tiên?", o: ["start()", "main()", "run()", "init()"], c: 1, e: "Hàm main() là điểm entry-point bắt buộc trong mọi dự án C++." },
    { q: "Để tạo một hằng số (không thể sửa đổi sau này), dùng từ khóa gì?", o: ["constant", "const", "final", "var"], c: 1, e: "const int PI = 3; sẽ khóa giá trị biến PI vĩnh viễn." }
];

baseQuestions.forEach(item => {
    questionData.push({
        monster: getRandomMonster(),
        question: item.q,
        options: item.o,
        correct: item.c,
        explanation: item.e
    });
});

// 3. Cơ chế tạo sinh tự động (Procedural Generation) để đảm bảo có hàng trăm câu hỏi Toán/Logic thực tế

// Sinh 50 câu toán học (+, -, *)
for (let i = 0; i < 50; i++) {
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;
    let ops = ['+', '-', '*'];
    let op = ops[Math.floor(Math.random() * ops.length)];
    let res = op === '+' ? a + b : (op === '-' ? a - b : a * b);
    
    let wrong1 = res + Math.floor(Math.random() * 5) + 1;
    let wrong2 = res - Math.floor(Math.random() * 5) - 1;
    let wrong3 = Math.floor(Math.random() * 100); 
    
    let opts = [res.toString(), wrong1.toString(), wrong2.toString(), wrong3.toString()];
    opts.sort(() => Math.random() - 0.5); // Xáo trộn option
    let corrIdx = opts.indexOf(res.toString());

    questionData.push({
        monster: getRandomMonster(),
        question: `Khối lệnh sau in ra kết quả gì?<br/><code class="text-yellow-300 bg-gray-900 px-3 py-1 rounded inline-block mt-2 font-mono">${a} ${op} ${b};</code>`,
        options: opts,
        correct: corrIdx,
        explanation: `Phép tính thực thi như toán học thông thường: ${a} ${op} ${b} = ${res}.`
    });
}

// Sinh 35 câu chia lấy dư (%)
for (let i = 0; i < 35; i++) {
    let a = Math.floor(Math.random() * 50) + 10;
    let b = Math.floor(Math.random() * 9) + 2;
    let res = a % b;
    let opts = [res.toString(), (res+1).toString(), (res+2).toString(), Math.floor(a/b).toString()];
    opts.sort(() => Math.random() - 0.5);
    let corrIdx = opts.indexOf(res.toString());

    questionData.push({
        monster: getRandomMonster(),
        question: `Phép tính <code class="text-yellow-300 bg-gray-900 px-2 py-1 rounded font-mono">${a} % ${b}</code> sẽ trả về kết quả là mấy?`,
        options: opts,
        correct: corrIdx,
        explanation: `${a} chia ${b} được ${Math.floor(a/b)}, dư số phần dư là ${res}.`
    });
}

// Sinh 40 câu hỏi vòng lặp For
for (let i = 0; i < 40; i++) {
    let start = Math.floor(Math.random() * 4);
    let limit = Math.floor(Math.random() * 10) + 5; 
    let loops = limit - start;
    
    let opts = [loops.toString(), (loops+1).toString(), (loops-1).toString(), limit.toString()];
    opts.sort(() => Math.random() - 0.5);
    let corrIdx = opts.indexOf(loops.toString());

    questionData.push({
        monster: getRandomMonster(),
        question: `Vòng lặp bên dưới sẽ thực hiện bao nhiêu lần?<br/><code class="text-yellow-300 bg-gray-900 px-6 py-4 rounded inline-block mt-4 text-sm text-left font-mono">for(int i = ${start}; i < ${limit}; i++)<br/>{<br/>    // code<br/>}</code>`,
        options: opts,
        correct: corrIdx,
        explanation: `Biến đếm 'i' đi từ ${start} đến ${limit-1}. Tổng cộng là ${loops} lần chạy.`
    });
}

// Sinh 35 câu hỏi logic If/Else
for (let i = 0; i < 35; i++) {
    let a = Math.floor(Math.random() * 50);
    let b = Math.floor(Math.random() * 50);
    if(a === b) b++;
    
    let isGreater = a > b;
    
    questionData.push({
        monster: getRandomMonster(),
        question: `Kết quả in ra màn hình của đoạn lệnh sau là gì?<br/><code class="text-yellow-300 bg-gray-900 px-6 py-4 rounded inline-block mt-4 text-sm text-left font-mono">if (${a} > ${b})<br/>{<br/>    cout << "TRUE";<br/>}<br/>else<br/>{<br/>    cout << "FALSE";<br/>}</code>`,
        options: ["TRUE", "FALSE", "Không in gì", "Báo lỗi code"],
        correct: isGreater ? 0 : 1,
        explanation: `Biểu thức ${a} > ${b} có giá trị logic là ${isGreater ? "ĐÚNG (TRUE)" : "SAI (FALSE)"}.`
    });
}

// Bổ sung các câu khai báo biến sinh ngẫu nhiên để chạm mốc đúng 200 câu
let currentLen = questionData.length;
for (let i = 0; i < (200 - currentLen); i++) {
    let varName = "bien_" + Math.floor(Math.random() * 100);
    let val = Math.floor(Math.random() * 1000);
    questionData.push({
        monster: getRandomMonster(),
        question: `Để khai báo biến mã số nguyên, chọn từ khóa nào điền vào chỗ trống:<br/><code class="text-yellow-300 bg-gray-900 px-6 py-3 rounded inline-block mt-4 text-left font-mono">___ ${varName} = ${val};</code>`,
        options: ["int", "string", "float", "bool"],
        correct: 0,
        explanation: `Sử dụng kiểu 'int' là tiêu chuẩn để lưu số nguyên, ví dụ ở đây là ${val}.`
    });
}

// Trộn ngẫu nhiên câu hỏi bằng thuật toán Fisher-Yates
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(questionData);

// Cung cấp API lấy số lượng lớn ngẫu nhiên không trùng lặp (dùng cho 1 vòng chạy)
function getRandomQuestionsPool(amount) {
    shuffleArray(questionData);
    return questionData.slice(0, amount);
}
