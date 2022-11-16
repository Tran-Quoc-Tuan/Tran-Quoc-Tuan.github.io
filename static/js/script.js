HOST = 'http://127.0.0.1:5000';
function getURL(path) {
    return `${HOST}${path}`;
}

const samplePosts = {
    'trending': [
        {
            'title': 'Mô hình quan hệ - thực thể (Entity – Relationship Model)',
            'content_short': 'Mô hình quan hệ thực thể (Entity Relationship model - E-R) được CHEN giới thiệu vào năm 1976 là một mô hình được sử dụng rộng rãi trong các bản thiết kế cơ sở dữ liệu ở mức khái niệm, được xây dựng dựa trên việc nhận thức thế giới thực thông qua tập các đối tượng được gọi là các thực thể và các mối quan hệ giữa các đối tượng này.So với mô hình mạng thì mô hình quan hệ thực thể có nhiều ưu điểm...',
            'update_at': '2022 - 11 - 12T16: 43: 01.000000Z',
            'author': {
                'name': 'Tran Viet Ha',
                'avatar': 'https://images.viblo.asia/avatar/a9605d81-5408-4ae1-8525-d243e174d3ef.jpg',
                'url': 'https://viblo.asia/u/tran.viet.ha'
            },
            'url': 'https://viblo.asia/p/mo-hinh-quan-he-thuc-the-entity-relationship-model-oOVlYEenl8W'
        },
        {
            'title': 'Sử dụng trigger trong SQL qua ví dụ cơ bản.',
            'content_short': 'Trigger là gì ?\nHiểu đơn giản thì Trigger là một stored procedure không có tham số. Trigger thực thi một cách tự động khi một trong ba câu lệnh Insert, Update, Delete làm thay đổi dữ liệu trên bảng có chứa trigger. : D\nCú pháp của Trigger\nTrigger dùng làm gì?\n- Trigger thường được sử dụng để kiểm tra ràng buộc(check constraints) trên nhiều quan hệ(nhiều bảng / table) hoặc trên nhiều dòng(nhiều...',
            'update_at': '2022 - 11 - 12T16: 56: 02.000000Z',
            'author': {
                'name': 'Phạm Anh Tuấn',
                'avatar': 'https://images.viblo.asia/avatar/57610019-3995-4713-8b3d-d8f6096f9593.jpg',
                'url': 'https://viblo.asia/u/tuanbacyen'
            },
            'url': 'https://viblo.asia/p/su-dung-trigger-trong-sql-qua-vi-du-co-ban-aWj538APK6m'
        },
        {
            'title': 'Thuật ngữ trong Frontend - Optimization',
            'content_short': 'Tại sao nên đọc bài này?\n\n- Dành cho các bạn mới tiếp cận và thấy quá nhiều thuật ngữ mới\n- Dành cho các bạn có thể đã làm FE một thời gian rồi nhưng đôi khi vẫn không biết có một thứ như vậy tồn tại trên đời\n- Có vài keyword để tối ưu performance cho website\n\nCác thuật ngữ phổ biến\n\nTrong bài này mình sẽ nói về các thuật ngữ liên quan tới optimization nhé!\n\nCode split\n\nHiểu một cách đơn giản t...',
            'update_at': '2022-11-12T16:57:01.000000Z',
            'author': {
                'name': 'Thanh Le',
                'avatar': 'https://images.viblo.asia/avatar/85a70648-bb1a-4c7b-b67e-97909f987b27.jpg',
                'url': 'https://viblo.asia/u/thanhle27'
            },
            'url': 'https://viblo.asia/p/thuat-ngu-trong-frontend-optimization-2oKLn2YgLQO'
        },
        {
            'title': 'Case Study tối ưu sử dụng Partition và Index để tối ưu câu lệnh từ 30 phút xuống còn 0.01s như thế nào?',
            'content_short': 'Đây là một bài toán tối ưu thực tế , tôi đã áp dụng kỹ thuật tối ưu này cho rất nhiều doanh nghiệp lớn: hệ thống Core chứng khoán, cơ sở dữ liệu core billing của đơn vị viễn thông lớn, hệ thống của ngân hàng... Bạn có thể xem danh sách các dự án tôi thực hiện tại đây: https://wecommit.com.vn/du-an/\xa0\n\nVới bộ dữ liệu giả lập trong bài viết, bạn c...', 'update_at': '2022-11-12T16:53:02.000000Z', 'author': {
                'name': 'Trần Quốc Huy',
                'avatar': 'https://images.viblo.asia/avatar/1e50a7d8-c509-4b33-9e5e-635a2ac4638a.jpg',
                'url': 'https://viblo.asia/u/tranquochuy'
            }, 'url': 'https://viblo.asia/p/case-study-toi-uu-su-dung-partition-va-index-de-toi-uu-cau-lenh-tu-30-phut-xuong-con-001s-nhu-the-nao-WR5JRDXdVGv'
        },
        {
            'title': 'Phân tích thiết kế hệ thống thông tin sử dụng biểu đồ UML (Phần 1)',
            'content_short': '1.Giới Thiệu\n\nNgôn ngữ mô hình hóa thống nhất (tiếng Anh: Unified Modeling Language, viết tắt thành UML) là một ngôn ngữ mô hình gồm các ký hiệu đồ họa mà các phương pháp hướng đối tượng sử dụng để thiết kế các hệ thống thông tin một cách nhanh chóng.\n\nCách xây dựng các mô hình trong UML phù hợp mô tả các hệ thống thông tin cả về cấu trúc cũng như hoạt động. Cách tiếp cận theo mô hình của UML g...',
            'update_at': '2022-11-12T16:48:01.000000Z',
            'author': {
                'name': 'Hoang Van Trinh',
                'avatar': 'https://images.viblo.asia/avatar/cd23c07f-e799-46b4-9325-1e2e81ed6a80.jpg',
                'url': 'https://viblo.asia/u/Trinh.Pro'
            },
            'url': 'https://viblo.asia/p/phan-tich-thiet-ke-he-thong-thong-tin-su-dung-bieu-do-uml-phan-1-PjxMe6yNG4YL'
        }
    ],
    'newest': [
        {
            'title': 'Training lại Tesseract với dữ liệu được Custom',
            'content_short': 'Lời mở đầu\nXin chào mọi người, bài dịch lần này mình muốn chia sẻ với anh em một chủ đề thú vị liên quan đến Optical Character Recognize (OCR). Đây đã và đang là một công nghệ hot và có rất nhiều paper xoay quanh việc tăng độ chính xác cho OCR nhưng vẫn đảm bảo tốc độ runtime. Trong OCR, mình tạm chia một cách dễ dàng gồm OCR trên văn bản có cấu trúc và không có cấu trúc. Nhưng bài dịch này tập...',
            'update_at': '2022-11-12T16:33:01.000000Z',
            'author': {
                'name': 'nguyen trong nhan',
                'avatar': 'https://images.viblo.asia/avatar/96bd97d9-5a06-421e-9b71-da7f14f348bf.png',
                'url': 'https://viblo.asia/u/nhan0944'
            },
            'url': 'https://viblo.asia/p/training-lai-tesseract-voi-du-lieu-duoc-custom-MkNLrZqbLgA'
        },
        {
            'title': 'Laravel seeder - Truyền tham số vào seeder',
            'content_short': "Trong quá trình làm việc mình đã gặp nhiều trường hợp cập nhật lại dữ liệu cho 1 table bằng cách sử dụng seeder. Vậy làm thế nào để chúng ta có thể thêm các tham số tùy chỉnh khi chạy seeder?.\n\n1. Truyền tham số trực tiếp trong command khi chạy\n\n1.1 Sử dụng command->ask('key')\n\nTrong file seeder hãy sử dụng phương thức ask('SEEDKEY', 'defaultvalue'), lệnh này sẽ yêu cầu nhập giá trị khi chạy se...",
            'update_at': '2022 - 11 - 12T16: 22: 01.000000Z',
            'author': {
                'name': 'Cong Thanh',
                'avatar': 'https://imagecarousel-items.viblo.asia/avatar/cf9c7285-69e2-4ea6-93c7-a2527297d59c.JPG',
                'url': 'https://viblo.asia/u/viblo.d.c.thanh'
            },
            'url': 'https://viblo.asia/p/laravel-seeder-truyen-tham-so-vao-seeder-vlZL9N6dVQK'
        },
        {
            'title': 'Blog#35: Configure VSCode để Debug trong NodeJS 😊 (Series: Bí kíp Javascript - PHẦN 30)',
            'content_short': '![](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/307d9845-da8f-481a-813b-9d46676dd4fe/davvbty-1afef539-3495-44ce-a49f-0b2d748c30fa.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMwN2Q5ODQ1LWRhOGYtNDgxYS04MTNiLTlkNDY2NzZkZDRmZVwvZGF2dmJ0eS0xYWZlZjUzOS0zNDk1LTQ0Y2UtYTQ5Zi0wYjJkNzQ4YzMwZmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ChYuezv5Y5vRPkBN15RDAgJQaD8ZPeBiOqDN9P_Dk6Y)\n\n\n\nMình là TUẤN hiện đang là một Full-stack Developer tại Tokyo �.. Nếu bạn thấy Blog này hay xin hãy cho mình một like và đăng ký để ủng hộ mình nhé 😊.\n\nNếu bạn là một người thích sử dụng VSCode để phát triển các app NodeJS, bạn có thể đã trải qua nỗi đau của việc Debug nó. Mặc dù đối với ứng dụng nhỏ hơn, việc xem qua code, so sánh dữ liệu với code và phân tích có thể dễ dàng hơn, nhưng có thể ...',
            'update_at': '2022-11-12T15:26:01.000000Z',
            'author': {
                'name': 'NGUYỄN ANH TUẤN',
                'avatar': 'https://images.viblo.asia/avatar/82afa6c9-073b-419a-aceb-ae889b85c554.jpg',
                'url': 'https://viblo.asia/u/Clarence161095'
            },
            'url': 'https://viblo.asia/p/blog35-configure-vscode-de-debug-trong-nodejs-series-bi-kip-javascript-phan-30-2oKLn2g1LQO'
        },
        {
            'title': '[Phần 1]Sử dụng RabbitMQ trong C# (.NET) (lý thuyết tổng quan)',
            'content_short': 'Hi mọi người,\n\nHôm nay mình sẽ chia sẻ về cách sử dụng RabbitMQ trong C# .Net 6.\nBài viết sẽ giới thiệu các kiến thức cơ bản nhất về RabbitMQ và thực hành sử dụng RabbitMQ trong ứng dụng .NET 6.\n\nKhông để mọi người chờ lâu, cùng bắt đầu nào!\n\n1. Message Queue là gì?\n\n- Message queue là một hàng đợi chứa các message, cho phép các ứng dụng có thể giao tiếp với nhau thông qua việc gửi message vào ...',
            'update_at': '2022 - 11 - 12T16: 18: 02.000000Z',
            'author': {
                'name': 'LongNguyen',
                'avatar': 'https://images.viblo.asia/avatar/2efb398a-7314-4ab9-884e-ddb08176277c.jpg',
                'url': 'https://viblo.asia/u/LongNguyenLK'
            },
            'url': 'https://viblo.asia/p/phan-1su-dung-rabbitmq-trong-c-net-ly-thuyet-tong-quan-Ny0VG9DzJPA'
        },
        {
            'title': 'Chương 4: STACKS - Problems & Solutions(15-29)',
            'content_short': 'Problem-15\nLàm thế nào để triển khai 3 stack trong một array?\n\nSolution: Đối với vấn đề này, có thể có những cách khác nhau để giải quyết nó. Dưới đây là một cách và nó hoạt động miễn là có một không gian trống trong mảng.\n\nĐể thực hiện 3 stack, chúng ta giữ các thông tin sau.\n * Chỉ số của ngăn xếp đầu tiên(Top 1): chỉ số này cho biết kích thước của ngăn xếp đầu tiên.\n * Chỉ số của ngăn xếp thứ...',
            'update_at': '2022 - 11 - 12T16: 52: 01.000000Z',
            'author': {
                'name': 'Đặng An',
                'avatar': 'https://images.viblo.asia/avatar/0513acb6-6368-4076-b2bb-b69caa09db91.jpg',
                'url': 'https://viblo.asia/u/AnDQT'
            },
            'url': 'https://viblo.asia/p/chuong-4-stacks-problems-solutions15-29-Yym40ZwAL91'
        }]
};

const sampleBackground = [
    "image/20220911.jpg",
    "image/20220912.jpg",
    "image/20220913.jpg",
    "image/20220914.jpg",
    "image/20220915.jpg",
    "image/20220916.jpg",
    "image/20220917.jpg",
    "image/20220918.jpg",
    "image/20220919.jpg",
    "image/20220920.jpg",
    "image/20220921.jpg",
    "image/20220922.jpg",
    "image/20220923.jpg",
    "image/20220924.jpg",
    "image/20220925.jpg",
    "image/20221014.jpg",
    "image/20221016.jpg",
    "image/20221021.jpg"
];

function forDev_resetPath(imagePath) {
    return '../' + imagePath;
}

function setFirstItemIsActive(carousel) {
    if (!carousel.length) return;
    carousel.children('.carousel-item')[0].classList.add('active');
}

function defaultAvatar(e) {
    e.src = 'https://viblo.asia/images/mm.png';
}
