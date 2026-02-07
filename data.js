<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ExoExams</title>

<style>
body{
  margin:0;
  font-family:Arial;
  background:linear-gradient(135deg,#0f2027,#203a43,#2c5364);
  color:white;
  text-align:center;
}

h1{
  margin-top:40px;
}

.search-box{
  margin-top:20px;
}

input{
  padding:10px;
  width:250px;
  border:none;
  border-radius:6px;
}

button{
  padding:10px 20px;
  border:none;
  border-radius:6px;
  cursor:pointer;
  margin-left:5px;
}

.search-btn{
  background:#00c6ff;
  color:black;
}

.cards{
  margin-top:40px;
}

.card{
  display:inline-block;
  background:white;
  color:black;
  padding:15px 30px;
  margin:15px;
  border-radius:10px;
  cursor:pointer;
  font-size:18px;
}

.years{
  margin-top:25px;
}

.year-btn{
  background:white;
  color:black;
  margin:10px;
}
</style>
</head>

<body>

<h1>ExoExams</h1>

<div class="search-box">
  <input type="text" id="searchInput" placeholder="Search exam (jee 2024)">
  <button class="search-btn" onclick="searchPaper()">Search</button>
</div>

<div id="searchResult" class="years"></div>

<div class="cards">
  <div class="card" onclick="showYears('jee')">JEE</div>
  <div class="card" onclick="showYears('neet')">NEET</div>
</div>

<div id="yearContainer" class="years"></div>

<script>

const papers = {
  jee:{
    "2024":"pepar/jee/2024.pdf",
    "2023":"pepar/jee/2023.pdf",
    "2022":"pepar/jee/2022.pdf"
  },
  neet:{
    "2024":"pepar/neet/2024.pdf",
    "2023":"pepar/neet/2023.pdf",
    "2022":"pepar/neet/2022.pdf"
  }
};

function searchPaper(){
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultDiv = document.getElementById("searchResult");
  resultDiv.innerHTML = "";

  for(let exam in papers){
    for(let year in papers[exam]){
      if(input.includes(exam) && input.includes(year)){
        resultDiv.innerHTML = `
          <button class="year-btn" onclick="openPaper('${papers[exam][year]}')">
          ${exam.toUpperCase()} ${year}
          </button>`;
        return;
      }
    }
  }

  resultDiv.innerHTML = "No paper found.";
}

function showYears(exam){
  const container = document.getElementById("yearContainer");
  container.innerHTML = "";

  for(let year in papers[exam]){
    container.innerHTML += `
      <button class="year-btn" onclick="openPaper('${papers[exam][year]}')">
      ${year}
      </button>`;
  }
}

function openPaper(path){
  window.open(path,"_blank");
}

</script>

</body>
</html>
