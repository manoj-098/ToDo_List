 const input=document.getElementById("input");
        const ul=document.getElementById("ul");

        //Array for storing the inputs
        let todos=[];

        document.getElementById("btn").addEventListener('click',
        function()
        {
            //Adding input to the array
            if(input.value!=''){
            todos.push(input.value);
            addTodo(input.value);
            input.value='';
            }
            else
            {
                alert("Enter Something");
            }
        }
        );
        function addTodo(todo)
        {
            let li=document.createElement("li");
            let para=document.createElement("p");
            let btn1=document.createElement("button");
            let btn2=document.createElement("button");
            btn1.innerHTML="<img src='images/tick.svg' class='img'/>";
            btn2.innerHTML="<img src='images/delete.svg' class='img'/>";

            //Appending attributes
            li.appendChild(btn1);
            console.log(todos);
            para.innerHTML=input.value;
            li.appendChild(para);
            li.appendChild(btn2);
            ul.appendChild(li);
        
             //Functionalities of button
            let click=1;
            btn1.addEventListener('click',
            function()
            {
        
            if(click==0)
        {
              para.style.textDecoration="none";
              li.style.opacity=1;
              btn1.innerHTML="<img src=images/tick.svg class='img'/>";
              click=1;
        }
        else{
            let click=clicked();
            para.style.textDecoration="line-through";
            li.style.opacity=0.5;
            btn1.innerHTML="<img src=images/unselect.svg class='img'/>";
            Remove(todo);
        }
        
    }
    );
    function clicked()
    {
          click=0;
    }

            

            btn2.addEventListener('click',
            function()
            {
                li.remove();
                Remove(todo);
            }
            );
        }

        function Remove(todo)
        {
            
            let index=todos.indexOf(todo);
            if(index>=0)
            {
            todos.splice(index,1);
            console.log(todos);
    
            }

        }
