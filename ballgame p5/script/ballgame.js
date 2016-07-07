var na,nb,nc,nd,prev = { num:1, x:100, y:100}, b1 = { num:1, x:100, y:100},  next = { num:1, x:0, y:0},  i=0, a = { num : 1, x : 100, y : 100}, b = { num:2, x : 300, y : 100}, c = { num:3, x : 100, y : 300}, d = { num:4, x : 300, y : 300}, button_start, graph_x = 680, graph_y, count = 1;

function setup() {

  // create canvas
  createCanvas(windowWidth, windowHeight);

  fill(0,0,200);
  
  ellipse(100,100,30,30);
  ellipse(300,100,30,30);
  ellipse(100,300,30,30);
  ellipse(300,300,30,30);

  na = createElement('h6','A');
  na.position(80,90);
  nb = createElement('h6','B');
  nb.position(340,90);
  nc = createElement('h6','C');
  nc.position(80,340);
  nd = createElement('h6','D');
  nd.position(340,340);

  na = createElement('h6','A');
  na.position(620,140);
  nb = createElement('h6','B');
  nb.position(620,240);
  nc = createElement('h6','C');
  nc.position(620,340);
  nd = createElement('h6','D');
  nd.position(620,440); 

  line(650,500,2000,500);
  line(650,500,650,100);

  button_start = createButton('Throw');
  button_start.position(500, 200);
  button_start.mouseClicked(pass);
  button_start.style("color","white");
  button_start.style("font-family","Comic Sans MS", "Arial", "sans-serif");
  button_start.style("background-color","black");
}

function pass(){

  do
  {
  next.num = Math.floor(Math.random()*4)+1;
  } 
  while(next.num == b1.num);

  switch(next.num)
    {
    case 1:
{ 
    next = a;
    graph_y = 150;
    break;
}
    case 2:
{
    next = b;
    graph_y = 250;
    break;
}
    case 3:
{
    next = c;
    graph_y = 350;
    break;
} 
    case 4:
{
    next = d;
    graph_y = 450;
    break;
}
    }

  stroke(0);
    
    fill(0,255,0);
    ellipse(graph_x,graph_y,8,8);
    graph_x = graph_x + 30;
    line(graph_x-30,graph_y+8,graph_x-30,500);
    document.getElementById('display').innerHTML = "Throw #" + count;
    count++;
    
  noStroke();

    prev.num = b1.num;
    prev.x = b1.x;
    prev.y = b1.y;
    b1.num = next.num;
    b1.x = next.x;
    b1.y = next.y;
    fill(0,0,200);
    ellipse(prev.x,prev.y,15,15);
    fill(200,0,0);
    ellipse(b1.x,b1.y,15,15);
} 
