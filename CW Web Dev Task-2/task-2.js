
fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
  .then(response => response.json())
  .then(APIData => {

    APIData.forEach(entry => {
      console.log(entry.points);  
  });

    
    sorted_data = APIData.sort((a, b) => b.points - a.points);

    console.log(sorted_data[3].points)

    const pic2 = document.getElementById('ellipse2');
    pic2.src = sorted_data[1].avatar;
    const name2 = document.getElementById('n2');
    name2.textContent = sorted_data[1].name;
    const points2 = document.getElementById('num2');
    points2.textContent = sorted_data[1].points;

    const pic1 = document.getElementById('ellipse1');
    pic1.src = sorted_data[0].avatar;
    const name1 = document.getElementById('n1');
    name1.textContent = sorted_data[0].name;
    const points1 = document.getElementById('num1');
    points1.textContent = sorted_data[0].points;

    const pic3 = document.getElementById('ellipse3');
    pic3.src = sorted_data[2].avatar;
    const name3 = document.getElementById('n3');
    name3.textContent = sorted_data[2].name;
    const points3 = document.getElementById('num3');
    points3.textContent = sorted_data[2].points;



    
   new_data=sorted_data.splice(0,3);
   console.log(new_data);
   console.log(sorted_data);
   

   const container = document.getElementById('rectangles');
     sorted_data.forEach((data, index) => {
      const rectDiv = document.createElement('div');
      rectDiv.id = `rect${index + 4}`;
      rectDiv.style.cssText= " background-color: #D2D4F2;width: 100%;height:100px;top: 400px;position: relative ; margin: 10px; margin-left: 0px;"
      container.appendChild(rectDiv);
    
    
      const imgElement = document.createElement('img');
      imgElement.src = data.avatar;
      imgElement.id = `ellipse${index + 4}`;
      imgElement.style.cssText="width: 75px;height: 75px;top: 10px;left: 150px ;position: absolute;border-radius: 50%;border: 5px white solid;"
      rectDiv.appendChild(imgElement);
    
    
      const slSpan = document.createElement('span');
      slSpan.textContent = index + 4;
      slSpan.id = `sl${index + 4}`;
      slSpan.style.cssText = "left: 20px; position: absolute; top: 30px ;font-size: 25px ; font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif ;";
      rectDiv.appendChild(slSpan);
    
      const nameSpan = document.createElement('span');
      nameSpan.textContent = data.name;
      nameSpan.id = `n${index + 4}`;
      nameSpan.style.cssText = "left: 300px; position: absolute; top: 30px ;font-size: 35px ;";
      rectDiv.appendChild(nameSpan);
    
      const pointsSpan = document.createElement('span');
      pointsSpan.textContent = data.points;
      pointsSpan.id = `num${index + 4}`;
      pointsSpan.style.cssText = "left: 1150px; position: absolute; top: 30px ;font-size: 35px ;";
      rectDiv.appendChild(pointsSpan);
    });

  })
  .catch(error => {
    console.log('Error fetching JSON data:', error);
  });
