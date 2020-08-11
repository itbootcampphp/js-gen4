console.log("Nizovi objekata");

let blog1 = {
    title: "Akvarel",
    likes: 70,
    dislikes: 7
};

let blog2 = {
    title: "Ulje na platnu",
    likes: 150,
    dislikes: 10
};

let blog3 = {
    title: "Vitraž",
    likes: 30,
    dislikes: 40
};

let arrBlogs = [blog1, blog2, blog3];
console.log(arrBlogs);
/*
Napisati foreach petlju koja ispisuje sve naslove iz niza objekata
*/
arrBlogs.forEach( blog => {
    console.log(blog.title);
});

console.log(arrBlogs[0]);
console.log(arrBlogs[0].likes);
arrBlogs[0].title = "Akvarel vodenim bojama";
console.log(arrBlogs[0].title);

/*
Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova
*/
let sumLikes = arr => {
    let sum = 0;
    arr.forEach( blog => {
        sum += blog.likes;
    });
    return sum;
}
console.log("Ukupan broj lajkova je: " + sumLikes(arrBlogs));

/*
Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
*/
let liskesDislikes = arr => {
    arr.forEach( blog => {
        if(blog.likes >= 2*blog.dislikes){
            console.log(blog.title);
        }
    });
}
liskesDislikes(arrBlogs);

let title = 'Naslov!';
console.log(title[title.length-1]);

console.log("ITBootcamp".slice(1,4));
console.log("ITBootcamp".substr(1,4));

let user1 = {
    name: "Jelena",
    age: 25,
    blogs: [blog1]
};

let user2 = {
    name: "Stefan",
    age: 13,
    blogs: [blog2, blog3]
}

let users = [user1, user2];

/*
Ispisati imena onih autora koji imaju ispod 18 godina
*/
users.forEach( user => {
    if(user.age < 18){
        console.log(user.name);
    }
});

/*
Ispisati naslove onih blogova koji imaju više od 50 lajkova
*/
users.forEach( user => {
    let userBlogs = user.blogs;
    userBlogs.forEach( blog => {
        if(blog.likes > 50){
            console.log(blog.title);
        }
    });
});

/*
Ispisati sve blogove autora čiji je username ’Stefan’
*/
users.forEach( user => {
    if(user.name == "Stefan"){
        let b = user.blogs;
        b.forEach( blog => {
            console.log(blog.title);
        });
    }
});

/*
Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
*/
users.forEach( user => {
    let sum = 0;
    let b = user.blogs;
    b.forEach( blog => {
        sum += blog.likes;
    });
    if(sum >= 100){
        console.log(user.name);
    }
});

/*
Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
*/
let sum = 0;
let br = 0;
users.forEach( user => {
    let b = user.blogs;
    b.forEach( blog => {
        sum += blog.likes;
        br++;
    });
});
let avgLikes = sum / br;
users.forEach( user => {
    let b = user.blogs;
    b.forEach( blog => {
        if(blog.likes > avgLikes){
            console.log(blog.title + " autora " + user.name);
        }
    });
});

///////////////////////////////////////

let dan1 = {
    datum: "2020-08-10",
    kisa: true,
    sunce: true,
    oblaci: true,
    temperature: [18, 20, 26, 29, 30, 32, 25],
    avgTemperature: function(){
        let s = 0;
        for(let i=0; i<this.temperature.length; i++){
            s += this.temperature[i];
        }
        return s/this.temperature.length;
    }
};
console.log(dan1.avgTemperature());

let dan2 = {
    datum: "2020-08-11",
    kisa: false,
    sunce: true,
    oblaci: false,
    temperature: [20, 25, 29, 30, 32, 25],
    avgTemperature: function(){
        let s = 0;
        for(let i=0; i<this.temperature.length; i++){
            s += this.temperature[i];
        }
        return s/this.temperature.length;
    }
};

let dan3 = {
    kisa: false,
    sunce: true,
    oblaci: true,
    datum: "2020-08-12",
    temperature: [22, 35, 22],
    avgTemperature: function(){
        let s = 0;
        for(let i=0; i<this.temperature.length; i++){
            s += this.temperature[i];
        }
        return s/this.temperature.length;
    }
};

let dan4 = {
    kisa: true,
    sunce: false,
    oblaci: true,
    datum: "2020-08-13",
    temperature: [18, 20, 26, 29, 30, 32, 25],
    avgTemperature: function(){
        let s = 0;
        for(let i=0; i<this.temperature.length; i++){
            s += this.temperature[i];
        }
        return s/this.temperature.length;
    }
};

let dani = [dan1, dan2, dan3, dan4];

// 5 4 3 5
/*
if(niz[i] > max)
max = 5
ind = 0

if(niz[i] >= max)
max = 5 // max = 5
ind = 0 // ind = 3
*/

/*
Napraviti arrow funkciju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
*/
// a) Ispisati prvi od njih
let najviseMerenja = arrDani => {
    let maxMerenja = arrDani[0].temperature.length;
    let maxDatum = arrDani[0].datum;
    arrDani.forEach( dan => {
        if(dan.temperature.length > maxMerenja){
            maxMerenja = dan.temperature.length;
            maxDatum = dan.datum;
        }
    });
    return maxDatum;
}
console.log(najviseMerenja(dani));

// b) Ispisati poslednji od njih
let najviseMerenjaPoslednji = arrDani => {
    let maxMerenja = arrDani[0].temperature.length;
    let maxDatum = arrDani[0].datum;
    arrDani.forEach( dan => {
        if(dan.temperature.length >= maxMerenja){
            maxMerenja = dan.temperature.length;
            maxDatum = dan.datum;
        }
    });
    return maxDatum;
}
console.log(najviseMerenjaPoslednji(dani));


/*
    Napraviti arrow funkciju koja računa koliko je bilo dana sa natprosečnom temperaturom
*/
let avgTotalTemp = arrDani => {
    let sum = 0;
    let br = 0;
    arrDani.forEach( dan => {
        let nizTemp = dan.temperature;
        nizTemp.forEach( temp => {
            sum += temp;
            br++;
        });
    });
    return sum/br;
}

let dayAvg = arrDani => {
    let avgTotal = avgTotalTemp(arrDani);
    let br = 0;
    arrDani.forEach(dan => {
        if(dan.avgTemperature() > avgTotal){
            br++;
        }
    });
    return br;
}

console.log(dayAvg(dani));


