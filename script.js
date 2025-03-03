const poemLines = [
  "Em Mây ơi, trong gió chiều thoảng qua,",
  "Như cánh mây trôi giữa trời rộng bao la,",
  "Giữa bao nỗi nhớ, khúc ca nhẹ nhàng vang vọng,",
  "Em mang theo ước mơ, như lời ru của tự do.",
  "",
  "Ngày 8/3 đến, như nốt nhạc cũ vang vọng,",
  "Chúc em được an yên trong những phút trôi qua,",
  "Bước qua mưa giông, tìm lại ánh trăng rằm dịu hiền,",
  "Giữ trọn những khúc ca không lời của cuộc đời.",
  "",
  "Dẫu đời là dòng sông lặng lẽ trôi mãi,",
  "Những phút giây lắng đọng, những nỗi niềm riêng,",
  "Em như tiếng đàn ngân nga giữa đêm khuya,",
  "Mềm mại nhưng kiên cường, tỏa sáng giữa mây trôi.",
  "",
  "Gửi em, lời chúc nhẹ nhàng của tâm hồn,",
  "Như giai điệu trầm tư, in đậm theo thời gian,",
  "Hãy sống tự do, như cánh mây bay xa,",
  "Và tìm thấy bình yên, trong từng nhịp đập yêu thương.",
  // "Trong sáng ban mai của mùa xuân,",
  // "Hồng Thơm ơi, em như đóa hoa mới nở,",
  // "Từng cánh bay theo gió, nhẹ nhàng,",
  // "Là khúc ca sống mãi, rộn rã khúc thơ.",
  // "",
  // "Ngày 8/3 mở ra vần thơ mới,",
  // "Chúc em sống trọn từng phút yêu đương,",
  // "Dù bão giông, dẫu phong ba thử thách,",
  // "Hãy giữ trong tim ánh sáng tự do.",
  // "",
  // "Gió xuân mang theo hương của mộng mơ,",
  // "Như lời thì thầm của đời chưa biết mỏi,",
  // "Hồng Thơm, em là vầng trăng dịu dàng,",
  // "Soi rạng con đường yêu thương không phai.",
  // "",
  // "Hãy sống hết mình, như Xuân Diệu từng nói,",
  // "Mỗi bước chân là vần thơ, là ước mơ bay cao,",
  // "Ngày này, chúc em tìm được hạnh phúc,",
  // "Trong từng khoảnh khắc, như cánh buồm khơi xa.",
];

const poemContainer = document.getElementById("poem-container");
const startButton = document.getElementById("start-button");
const heartContainer = document.getElementById("heart-container");
// const message = document.getElementById("message");

function typePoem() {
  let index = 0;
  let charIndex = 0;
  let currentLine = "";

  function typeChar() {
    if (index < poemLines.length) {
      if (charIndex < poemLines[index].length) {
        currentLine += poemLines[index][charIndex];
        poemContainer.innerHTML = currentLine + "<br>";
        charIndex++;
        setTimeout(typeChar, 50);
      } else {
        currentLine += "<br>";
        index++;
        charIndex = 0;
        setTimeout(typeChar, 300);
      }
    } else {
      setTimeout(() => {
        startButton.style.display = "block";
      }, 500);
    }
  }

  typeChar();
}

// Chạy typing khi tải trang
window.onload = function () {
  typePoem();
};

startButton.addEventListener("click", function () {
  const boxStyle = document.getElementById("box");
  boxStyle.style.background = "none";
  boxStyle.style.boxShadow = "none";
  document.getElementById("single-flower").style.display = "none";
  document.getElementById("poem-wrapper").style.display = "none";
  this.style.display = "none";
  generateHeartFlowers();
});

function generateHeartFlowers() {
  // message.style.display = "block";
  // heartContainer.innerHTML = ""; // Xóa nội dung cũ nếu có
  heartContainer.style.display = "flex";

  const heartPoints = generateHeartShape(100); // Thêm nhiều bông hoa hơn

  heartPoints.forEach((point, index) => {
    setTimeout(() => {
      const flower = document.createElement("img");
      flower.src = "flower.png"; // Đảm bảo file tồn tại
      flower.className = "flower";
      flower.style.position = "absolute";
      flower.style.left = `${point.x}px`;
      flower.style.top = `${point.y}px`;
      flower.style.opacity = "0";
      flower.style.transition = "opacity 0.5s ease-in-out";
      heartContainer.appendChild(flower);

      setTimeout(() => {
        flower.style.opacity = "1"; // Hiện dần lên
      }, 100);
    }, index * 50);
  });

  setTimeout(() => {
    document.getElementById("heart-image").style.opacity = "1"; // Hiển thị ảnh trong trái tim
    document.getElementById("message").style.display = "block"; // Hiển thị chữ
  }, 100);

  // setTimeout(() => {
  //   message.style.display = "block"; // Hiển thị dòng chữ
  // }, heartPoints.length * 50 + 500);
}

function generateHeartShape(numPoints) {
  let points = [];
  let centerX = 105; // Căn giữa theo chiều ngang
  let centerY = 100; // Căn giữa theo chiều dọc

  for (let i = 0; i < numPoints; i++) {
    let t = Math.PI * 5 * (i / numPoints);
    let x = 16 * Math.pow(Math.sin(t), 3);
    let y = -(
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t)
    );
    points.push({
      x: centerX + x * 10,
      y: centerY + y * 10,
    });
  }
  return points;
}
