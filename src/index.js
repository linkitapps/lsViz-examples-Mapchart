import "./styles.css";

// 데이터
// 세계 샘플 데이터
// location 은 geojson 에 정의된 지역 명칭
// priority 는 우선 순위, 값이 클 수록 차트가 겹칠 경우 위에 나옴
var data = [
  {
    name: "오스트레일리아",
    data: [["항목1", 216], ["항목2", 442], ["항목3", 428]],
    location: "Australia",
    priority: 1
  },
  {
    name: "캐나다",
    data: [["항목1", 288], ["항목2", 583], ["항목3", 561]],
    location: "Canada",
    priority: 2
  },
  {
    name: "사우디아라비아",
    data: [["항목1", 1038], ["항목2", 1836], ["항목3", 1752]],
    location: "Saudi Arabia",
    priority: 3
  },
  {
    name: "미국",
    data: [["항목1", 32200], ["항목2", 51000], ["항목3", 49300]],
    location: "USA",
    priority: 4
  },
  {
    name: "인도",
    data: [["항목1", 995], ["항목2", 1601], ["항목3", 1587]],
    location: "India",
    priority: 5
  },
  {
    name: "러시아",
    data: [["항목1", 21964], ["항목2", 29490], ["항목3", 29733]],
    location: "Russia",
    priority: 6
  },
  {
    name: "남아프리카공화국",
    data: [["항목1", 216], ["항목2", 442], ["항목3", 428]],
    location: "South Africa",
    priority: 7
  },
  {
    name: "터키",
    data: [["항목1", 288], ["항목2", 583], ["항목3", 561]],
    location: "Turkey",
    priority: 8
  },
  {
    name: "아르헨티나",
    data: [["항목1", 1038], ["항목2", 1836], ["항목3", 1752]],
    location: "Argentina",
    priority: 9
  },
  {
    name: "브라질",
    data: [["항목1", 294], ["항목2", 471], ["항목3", 438]],
    location: "Brazil",
    priority: 10
  },
  {
    name: "멕시코",
    data: [["항목1", 3943], ["항목2", 7229], ["항목3", 7096]],
    location: "Mexico",
    priority: 11
  },
  {
    name: "프랑스",
    data: [["항목1", 6921], ["항목2", 10153], ["항목3", 9654]],
    location: "France",
    priority: 12
  },
  {
    name: "독일",
    data: [["항목1", 5558], ["항목2", 8057], ["항목3", 7874]],
    location: "Germany",
    priority: 13
  },
  {
    name: "이탈리아",
    data: [["항목1", 8292], ["항목2", 11783], ["항목3", 11839]],
    location: "Italy",
    priority: 14
  },
  {
    name: "영국",
    data: [["항목1", 11939], ["항목2", 16675], ["항목3", 16929]],
    location: "England",
    priority: 15
  },
  {
    name: "중국",
    data: [["항목1", 13202], ["항목2", 17478], ["항목3", 18135]],
    location: "China",
    priority: 16
  },
  {
    name: "인도네시아",
    data: [["항목1", 458], ["항목2", 845], ["항목3", 815]],
    location: "Indonesia",
    priority: 17
  },
  {
    name: "일본",
    data: [["항목1", 216], ["항목2", 442], ["항목3", 428]],
    location: "Japan",
    priority: 18
  },
  {
    name: "대한민국",
    data: [["항목1", 3281], ["항목2", 7276], ["항목3", 8189]],
    location: "South Korea",
    priority: 19
  }
];

// 옵션
var options = {
  theme: "dark", // theme: light, dark
  region: "World", // 우리나라: Korea, 세계: World
  chartType: "pie", // 파이차트: pie, 버블차트: bubble
  scale: 100, // 지도 scale (zoom 정도). 우리나라 지도는 5500 정도에서 숫자 크기를 조절하면 적당함.
  title: "세계 통계 지도" // 제목
};

// 차트 생성
var chart = new LsViz("Mapchart", "chart", data, options);
