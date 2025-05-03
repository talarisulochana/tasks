 const App=document.getElementById("Data");
 const greet=document.createElement("p")
 greet.innerText="Hello World!"
    greet.style.color="red"
    greet.style.fontSize="30px"
    App.appendChild(greet)


    const images=document.createElement("img")
    images.src = "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg";
    images.style.width="400px"
    images.style.height="400px"
      images.style.margin="30px"
    images.style.borderRadius="5%"
    App.appendChild(images)

      const button=document.createElement("button")
      button.innerText="Click Me"
      button.style.width="100px" 
      button.style.height="50px"
      button.style.backgroundColor="blue"
      button.style.color="white"
      button.style.border="none"
      button.style.borderRadius="5px"
      button.style.cursor="pointer"
      button.style.margin="30px"


      button.addEventListener("click",function(){
        alert("image clicked")
         const newImage=document.createElement("img")
         newImage.src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg"
         newImage.style.width="400px"
         newImage.style.height="400px"
         newImage.style.margin="30px"
         newImage.style.borderRadius="5%"
         App.appendChild(newImage)
      })
      App.appendChild(button)
