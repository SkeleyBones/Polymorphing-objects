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
let Hero4 = new Lawbringer("Lb","parry counters","parry moves","Ad mortem inimicus!!!")
let Hero5 = new Centurion("Cent","charged heavies","cutscene","Incredibilies, Lmao git bodied")
let Hero6 = new Gladiator("Glad","Stamina heavy mix ups","toe stab, zone","Gonna git them toes")
let Hero7 = new BlackPrior("Bp","bash hero,counter attacks","Bullwark stance","Daarknesh.")
// Vikings
let Hero8 = new Raider("Raider","Everything","Flashbang","You are Raider... Legendary!")
let Hero9 = new Warlord("Warlord","Trading, Simple Combos","Headbutt","No Honor")
let Hero10 = new Berzerker("Berzerker","Infinite feint combo","Hyper Armour","RAIDERRRRR!!!")
let Hero11 = new Valkyre("Valk","bash light mixups","sweep","Get Rekt Blyat")
let Hero12 = new Highlander("HL","Two stances","Offensive stance feints","DUN MY GLASS")
let Hero13 = new Shaman("Shaman","Fast attacks, Soft feints","Bite attack","")
// Samurai
// let Hero14 = new Kensei("Kensei","Soft feint mix-ups","AOE attacks","Natures wrath")
// let Hero15 = new Shugoki("Shugo","","","Call your manager!!")
// let Hero16 = new Orochi("Orochi","light attacks","","Runs away")
// let Hero17 = new Nobushi("Nobu","Defensive counter attacks, Bleeds","Hidden stance","pokes you")
// let Hero18 = new Shinobi("Shinobi","ranged attacks","multiple dashes","Teleports behind you. Nothin personel kid")
// let Hero19 = new Aramusha("Ara","","","Gucci Flip-Flops")
// let Hero20 = new Hitokiri("","","","Whispers menacingly")

// //Wu lin
// let Hero21 = new Tiandi("Tiandi","","","I AM TIANDI!!!!!!!!!!!!")
// let Hero22 = new JiangJun("JJ","","","")
// let Hero23 = new Nuxia("Nuxia","","","")
// let Hero24 = new Shaolin("","","","")

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