

/*alert('Голосуйте за Путина!');
const name = prompt("Введите ваше имя для выборов");
alert(`Здравствуйте ${name}, надеюсь, вы проголосуете за Путина!!! ( если нет - то бан)`);*/
/*var s;
do 
{
let st = prompt("введите число");
s = + st + 1;
if (isNaN(s))
 {
      alert("Некорректный ввод");
  }

} while (isNaN(s));
alert(s);*/
while (true)
{
let min=-10;
let max=10;

let a = Math.round((max-min+1)*Math.random()+min);
let b = Math.round((max-min+1)*Math.random()+min);
let d=Math.ceil(5*Math.random());


if (b==0)
b=1;
let s;
let enter;
if (a<0)
a*=-1;


  switch (d)
  {
      case 1 : s = a+b; enter = prompt(`${a} + ${b} =`); break;
      case 2 : s = a-b; enter = prompt(`${a} - ${b} =`); break;
      case 3 : s = a*b; enter = prompt(`${a} * ${b} =`); break;
      case 4 : s = a/b; enter = prompt(`${a} / ${b} =`); break;
      case 5: s=1;
               for (let i=a; i!=0;--i)
               {
                  s*=i; 
               }
               enter = prompt(`${a}!=`);


  }

  if (s==enter)
  {

    alert("Наливай дальше");
  }
  else 
  {
    alert("Хватит пить");
  }
}