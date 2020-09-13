const button = document.getElementById('button')


// NOTE: Works
button.addEventListener(
  'click',
  (function () {
    let count = 0

    return function () {
      count += 1

      if (count === 2) {
        alert('This alert appears every other press!')
        count = 0
      }
    }
  })()
)

// NOTE: Doesn't work
// button.addEventListener('click', function () {
//   let count = 0

//   return function () {
//     count += 1

//     if (count === 2) {
//       alert('This alert appears every other press!')
//       count = 0
//     }
//   }
// })