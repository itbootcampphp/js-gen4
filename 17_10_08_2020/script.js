let blog = {
    title: 'Moj blog',
    content: 'Sadrzaj mog prvog bloga',
    author: 'Pera Peric'
};

let blog2 = {
    title: 'Moj drugi blog',
    content: 'Sadrzaj mog drugog bloga',
    author: 'Mika Mikic',
    likes: 50,
    dislikes: 2
};

let blog3 = {
    naslov: 'Treci blog',
    content: 'Ovo je treci blog........',
    likes: 2
};

console.log(blog);
console.log(typeof blog);
console.log(blog2);
console.log(blog.title);
console.log(blog.author);
console.log(blog['content']);
console.log(blog3.naslov);
blog3.naslov = "Treci jubilarni blog";
blog3.title = "Treci jubilarni blog";
console.log(blog3);

blog3 = {
    title: 'Moj treci blog',
    content: 'Bla bla bla...'
};

let user = {
    username: 'peraperic',
    age: 30,
    blogs: ['Blog o mafinima', 'Blog o torti', 'Blog o lazanjama'],
    login: function() {
        console.log(this);
        console.log('Ulogovani ste ' + this.username); // this - objekat koji ce pozvati metodu
    },
    /*
    logout: () => {
        console.log(this); // this u arrow funkciji je Window objekat!
        // Zato metode objekata NIKADA necemo pisati preko arrow funkcija
        // Jer ne mozemo da pristupimo svojstvima objekta
        console.log('Izlogovani ste ' + this.username);
    },
    */
    logout: function() {
        console.log(this);
        console.log('Izlogovani ste ' + this.username);
    },
    logBlogs: function() {
        let sviBlogovi = this.blogs;
        sviBlogovi.forEach(blog => {
            console.log(blog);
        });
    }
};

console.log(this);

let user2 = {
    username: 'mikamikic',
    age: 41,
    blogs: ['Blog o psima'],
    login: function(lang) {
        let u = this.username;
        if(lang === true) {
            console.log(`Cestitamo ${u}, ulogovani ste`);
        }
        else {
            console.log(`Congratulations ${u}, you're logged in`);
        }
    },
    logout: function() {
        console.log(this);
        console.log('Izlogovani ste ' + this.username);
    },
    logBlogs: function() {
        let sviBlogovi = this.blogs;
        sviBlogovi.forEach(blog => {
            console.log(blog);
        });
    }
}

/*
function add(x, y) {
    return x + y;
}
add(5, 7);
*/

console.log(user.age);
user.login();
console.log(user2.age);
user2.login(true);
user2.login(false);

user.logout();
user.logBlogs();

user2.logout();
user2.logBlogs();

let dan = {
    datum: "2020/08/10",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperature: [18, 20, 19, 25, 32, 28, 20, 18],
    prosek: function() {
        let sveTemperature = this.temperature;
        let pros = 0;
        sveTemperature.forEach(t => {
            pros += t;
        });
        pros /= sveTemperature.length;
        return pros;
    },
    brojIznadProseka: function() {
        let pros = this.prosek();
        let sveTemperature = this.temperature;
        let broj = 0;
        sveTemperature.forEach(t => {
            if(t > pros) {
                broj++;
            }
        });
        return broj;
    },
    /*
    ledeniDan: function() {
        let sveTemperature = this.temperature;
        let result = true;
        sveTemperature.forEach(t => {
            if(t >= 0) {
                result = false;
            }
        });
        return result;
    }*/
    ledeniDanLazar: function() {
        let sveTemperature = this.temperature;
        let counter = 0;
        sveTemperature.forEach(t => {
            if(t >= 0) {
                counter++;
            }
        });
        if(counter > 0) {
            return false;
        }
        else {
            return true;
        }
    },
    tropskiDanLazar: function() {
        let sveTemperature = this.temperature;
        let counter = 0;
        sveTemperature.forEach(t => {
            if(t >= 24) {
                counter++;
            }
        });
        if(counter == sveTemperature.length) {
            return true;
        }
        else {
            return false;
        }
    }
};

console.log(dan.temperature);
console.log(`Prosecna temperatura za dan 
    ${dan.datum} iznosi: ${dan.prosek()}`);
console.log(dan.brojIznadProseka());
console.log(dan.ledeniDanLazar());
console.log(dan.tropskiDanLazar());