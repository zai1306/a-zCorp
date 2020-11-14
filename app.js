


const burger = document.querySelector('.burger')
        const nav = document.querySelector('nav')
        const logo = document.querySelector('.logo')
        const cross = document.querySelector('.cross')
        
        
        burger.addEventListener('click', () => {
            nav.classList.add('active')
            logo.classList.add('active')
            
        })

        cross.addEventListener('click', () => {
            nav.classList.remove('active')
            logo.classList.remove('active')

        })