
let allLights = document.getElementById('traffic-light');
let allButtons = document.getElementById('controls');

let stopButton = document.getElementById('stopButton');
let stopLight = document.getElementById('stopLight')

let slowButton = document.getElementById('slowButton')
let slowLight = document.getElementById('slowLight')

let goButton = document.getElementById('goButton')
let goLight = document.getElementById('goLight')




//toggle buttons
stopButton.addEventListener('click', () => {
stopLight.classList.toggle('stop')
})

slowButton.addEventListener('click', () => {
  slowLight.classList.toggle('slow')
  })

goButton.addEventListener('click', () => {
    goLight.classList.toggle('go')
    })

//enter
stopButton.addEventListener('mouseenter', () =>{
  console.log(`Entered ${stopButton.innerText} button`)
})

slowButton.addEventListener('mouseenter', () =>{
  console.log(`Entered ${slowButton.innerText} button`)
})

goButton.addEventListener('mouseenter', () =>{
  console.log(`Entered ${goButton.innerText} button`)
})
//leave
stopButton.addEventListener('mouseleave', () =>{
  console.log(`Left ${stopButton.innerText} button`)
})

slowButton.addEventListener('mouseleave', () =>{
  console.log(`Left ${slowButton.innerText} button`)
})

goButton.addEventListener('mouseleave', () =>{
  console.log(`Left ${goButton.innerText} button`)
});

// [stopButton, slowButton, goButton].forEach((button) => {
//   button.addEventListener('mouseenter', () => {
//     console.log(`Entered ${button.innerText} button`);
//   });
  //button.addEventListener('mouseleave', )
// });

// [stopButton, goButton, slowButton].forEach((button) => {
//   button.addEventListener('click', () => {
//     if(goLight.classList.value === 'bulb'){
//       console.log(`${button.innerText} off`)
//     }else{
//       console.log(`${button.innerText} on`)
//     }
//   })
// });

// [stopButton, slowButton, goButton].forEach((i) => {
//   i.addEventListener("click", () => {
//     event.stopPropagation();
//     if (goLight.classList.value === "bulb" && i.id === 'goLight') {
//       console.log(`${i.innerText} off`);
//     }else if(goLight.classList.value !== "bulb" && i.id  === 'goLight'){
//       console.log(`${i.innerText} on`);
//     }else if(slowLight){}

//   })
// });

allButtons.addEventListener('click', function() {
console.log(event.children.innerText);
  if(allButtons.slowButton)
  console.log('test')
    
  }
  );
