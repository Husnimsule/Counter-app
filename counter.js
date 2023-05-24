const Counter = document.querySelector('#Counter')
const btn = document.querySelectorAll('.btn-increment')

let count = 0

btn .forEach((btn) => {
    btn.addEventListener('click', (e)  => {
       const styles = e.currentTarget.classList

     if (styles.contains('increment')){
        count++
       } 
       else if (styles.contains('decrement')){
        count--
    }
    else {
         count = 0
    }
    Counter.textContent = count
    
})

});

