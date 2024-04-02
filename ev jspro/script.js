window.addEventListener("DOMContentLoaded", () => {


    const movieDB = {
        movies: [
            "Logan",
            "Titanic",
            "Bəyin oğurlanması",
            "Xaç atası",
            "Avatar"
        ]
    }

    const reklam = document.querySelectorAll('.promo_adv img');
    const janr = document.querySelector('.promo_genre');
    const bg = document.querySelector('.promo_bg');
    const kino = document.querySelector('.promo_interactive-list');
    const kinoAdlari = document.querySelector('.promo_interactive-item')
    const addForm = document.querySelector('form.add');
    const addInput = document.querySelector('.adding_input');
    const addInputGenre = document.querySelector('.adding_input_genre');
    const checkBox = document.querySelector('[type="checkbox"]');
    const sevimliFilm = document.querySelector('.promo_title');
    const logo = document.querySelector('.header_logo');
    // const sil = document.querySelectorAll('.delete');

    const deleteAdv = (del) => {
        del.forEach(e => {
            e.remove();
        });
    }



    const saytDeyis = () => {

        janr.innerHTML = `Drama`;
        bg.style.backgroundImage = 'url(img/bg.jpg)';

    };

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let newFilm = addInput.value;
        let newGenre = addInputGenre.value;
        const favorite = checkBox.checked;
        if (addInputGenre.value, addInput.value == 0) {
            addInput.style.borderColor = "red";
            addInputGenre.style.borderColor = "red";
        }
        else{ addInput.style.borderColor = "#8ca3ff";
        addInputGenre.style.borderColor = "#8ca3ff";
    if (favorite) {
        addInput.style.borderColor = "green";
        addInputGenre.style.borderColor = "green";
    } }

        if (newFilm) {
            if (newFilm.length >= 15) {
                newFilm = `${newFilm.substring(0, 16)}...`
            }

            movieDB.movies.push(newFilm);
            createMovieList(movieDB.movies, kino);
            arrSort(movieDB.movies);
        }
        
        if (favorite) {
            console.log(`${newFilm} sevimliye elave edildi`);

            if (newFilm.length,newGenre.length > 0) {
                sevimliFilm.innerHTML = `${newFilm}`;
                janr.innerHTML = `${newGenre}`;
            }  
            if (newFilm.length,newGenre.length < 1) {
                
                
            }
        }
        e.target.reset();



    });
// logo.addEventListener('click', ()=>{ 
// document.body.style.backgroundColor = "#1f1f1f";
// kinoAdlari.style.color = 'white';


// })


    const arrSort = (kino) => {
        kino.sort();
    }

    arrSort(movieDB.movies);

    const createMovieList = (kinoYarat, anaElement) => {
        anaElement.innerHTML = '';

        kinoYarat.forEach((e, i) => {
            kino.innerHTML += `
        <li class="promo_interactive-item">${i + 1}. ${e}
            <div class="delete"></div>
        </li>
        `
        });

     document.querySelectorAll('.delete').forEach((btn, i)=> {
    btn.addEventListener('click', () =>{
    btn.parentElement.remove();
    movieDB.movies.splice(i, 1);
    createMovieList(kinoYarat, anaElement);
    })
    
    });
    }

    createMovieList(movieDB.movies, kino);
    saytDeyis();
    deleteAdv(reklam);

});