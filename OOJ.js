// // create a function that console logs any argument given
// function display (content){
// console.log(content);
// }

// // create a function that takes a name(string) as a parameter
// // and returns "hi my name is (perameter given)"
// function name (name){
//     return "my name is " + name + ".";
//     }
    
    // Create three functions that describe the powers of a ninja
    // you would like to create

// display(name("Shinobi"));
// display(power1("Quad dash"));
// display(power2("ranged guardbreak"));
// display(power3("teleports behind you."));


// Object oriented programming
//  - Incapsulation

// OOP Incapsulation: grouping all behavior inside of an object
const hero = {
    name (name){
        return "my name is " + name + ".";
    },
    technique (technique){
        return "Using " + technique + ".";
    },
    quirk (quirk){
        return "Using " + quirk + ".";
    },
    meme (meme){
        return meme + " nothin personell kid.";
    }
}

// display(ninja.name("Shinobi"));
// display(ninja.power1("Quad dash"));
// display(ninja.power2("ranged guardbreak"));
// display(ninja.power3("teleports behind you."));


// create a class for instantiating ninja's
// OOP Abstraction: hiding complexity
class Hero{
    constructor(name, technique, quirk, meme){
        this.nameInside      = name;
        this.techniqueInside = technique;
        this.quirkInside     = quirk;
        this.memeInside      = meme;
    }

    name(){
        return "hi, My name is " + this.nameInside + "."
    }
    technique (){
        return "My play style revolves around " + this.techniqueInside + ".";
    }
    quirk (){
        return "My quirk is " + this.quirkInside + ".";
    }
    meme (){
        return this.memeInside + ".";
    }
}
// let Hero = new ("","","","")
// Knights
let Hero1 = new Warden("Warden","Vortex","chain bashes","Get em in the vortex.")
let Hero2 = new Conqueror("Conq","bashing","Fullblock upercut","RAH!!!")
let Hero3 = new PeaceKeeper("Pk","light attacks","sticking bleed attacks","Taking your kidneys.")
let Hero = new Lawbringer("Lb","parry counters","parry moves","Ad mortem inimicus!!!")
let Hero = new Centurion("Cent","charged heavies","cutscene","Incredibilies, Lmao git bodied")
let Hero = new Gladiator("Glad","Stamina heavy mix ups","toe stab, zone","Gonna git them toes")
let Hero = new BlackPrior("Bp","bash hero,counter attacks","Bullwark stance","Daarknesh.")
// Vikings
let Hero = new Raider("Raider","Everything","Flashbang","You are Raider... Legendary!")
let Hero = new Warlord("Warlord","Trading, Simple Combos","Headbutt","No Honor")
let Hero = new Berzerker("Berzerker","Infinite feint combo","Hyper Armour","RAIDERRRRR!!!")
let Hero = new Valkyre("Valk","bash light mixups","sweep","Get Rekt Blyat")
let Hero = new Highlander("HL","Two stances","Offensive stance feints","DUN MY GLASS")
let Hero = new Shaman("Shaman","Fast attacks, Soft feints","Bite attack","")
// Samurai
let Hero = new Kensei("Kensei","Soft feint mix-ups","","Natures wrath")
let Hero = new Shugoki("Shugo","","","Call your manager!!")
let Hero = new Orochi("Orochi","light attacks","","Runs away")
let Hero = new Nobushi("Nobu","Defensive counter attacks, Bleeds","Hidden stance","pokes you")
let Hero = new Shinobi("Shinobi","ranged attacks","multiple dashes","Teleports behind you. Nothin personel kid")
let Hero = new Aramusha("Ara","","","Gucci Flip-Flops")
let Hero = new Hitokiri("","","","Whispers menacingly")

//Wu lin
let Hero = new Tiandi("Tiandi","","","I AM TIANDI!!!!!!!!!!!!")
let Hero = new JiangJun("JJ","","","")
let Hero = new Nuxia("Nuxia","","","")
let Hero = new Shaolin("","","","")

display(Hero.name());
display(Hero.technique());
display(Hero.Quirk());
display(Hero.meme());

//OOP  Polymorphism
// class Warden extends Hero {
//     constructor(name, technique, quirk, meme){
//         super(name, technique, quirk, meme)
//         this.faction = "knights";
//     }
//     combo(){
//         return "Activate: " + super.technique() + " Combo with " + super.quirk()
//     }
// }
// let Hero1 = new Warden("Warden","Vortex","chain bashes","Get em in the vortex.")