
const slide1Next=()=>{
    document.getElementById("slide1").style.display="none";
    document.getElementById("slide2").style.display="flex";
    document.getElementById("slide4").style.display="flex";
}
const slide1Prev=()=>{
    document.getElementById("slide1").style.display="none";
    document.getElementById("slide4").style.display="flex";
}
const slide2=()=>{
    console.log("Clicked");
}
const slide2Prev=()=>{
    
    document.getElementById("slide1").style.display="flex";
    document.getElementById("slide2").style.display="none"; 
}
const slide2Next=()=>{
    document.getElementById("slide2").style.display="none";
    document.getElementById("slide3").style.display="flex";
}
const slide3Next=()=>{
    document.getElementById("slide3").style.display="none";
    document.getElementById("slide4").style.display="flex";
}
const slide3Prev=()=>{
    document.getElementById("slide3").style.display="none";
    document.getElementById("slide2").style.display="flex";
}
const slide4Next=()=>{
    document.getElementById("slide4").style.display="none";
    document.getElementById("slide1").style.display="flex";
}
const slide4Prev=()=>{
    document.getElementById("slide4").style.display="none";
    document.getElementById("slide3").style.display="flex";
    document.getElementById("slide2").style.display="flex";
}



const changeBg=(no)=>
{
    let movieBox1=document.getElementById("spiderMan");
    let movieBox2=document.getElementById("pushpa");
    let movieBox3=document.getElementById("bellbottom");
    let movieBox4=document.getElementById("sooryavanshi");
    let movieBox5=document.getElementById("83");
    let movieBox6=document.getElementById("attack");
    let movieBox7=document.getElementById("atarangi");
    let movieBox8=document.getElementById("eternals");
    let movieBox9=document.getElementById("venom");
    let movieBox10=document.getElementById("kgf");
    let movieBox11=document.getElementById("baaghi");
    let movieBox12=document.getElementById("kong");
    let movieBox13=document.getElementById("wonderwomen");
    let movieBox14=document.getElementById("aquaman");
    let movieBox15=document.getElementById("infinitywar");
    let movieBox16=document.getElementById("endgame");
    let movieBox17=document.getElementById("cm");
    let movieBox18=document.getElementById("thor");
    let movieBox19=document.getElementById("blackp");
    let movieBox20=document.getElementById("cacw");
    let movieBox21=document.getElementById("aaou");
    switch (no) {
        case 1:
            movieBox1.style.background="url(assets/moviePosters/spiderMan2.jpg)"
            movieBox1.style.backgroundSize="cover";
            break;
    
        case 2:
            movieBox2.style.background="url(assets/moviePosters/pushpa2.jpg)"
            movieBox2.style.backgroundSize="cover";
            break;
        case 3:
            movieBox3.style.background="url(assets/moviePosters/bellbottom2.jpg)"
            movieBox3.style.backgroundSize="cover";
            break;
        case 4:
            movieBox4.style.background="url(assets/moviePosters/soryavanshi2.jpg)"
            movieBox4.style.backgroundSize="cover";
            break;
        case 5:
            movieBox5.style.background="url(assets/moviePosters/832.jpg)"
            movieBox5.style.backgroundSize="cover";
            break;
            
        case 6:
            movieBox6.style.background="url(assets/moviePosters/attack2.jpg)"
            movieBox6.style.backgroundSize="cover";
            break;

        case 7:
            movieBox7.style.background="url(assets/moviePosters/atrangi2.jpg)"
            movieBox7.style.backgroundSize="cover";
            break;
        case 8:
            movieBox8.style.background="url(assets/moviePosters/eternals2.jpg)"
            movieBox8.style.backgroundSize="cover";
            break;
        case 9:
            movieBox9.style.background="url(assets/moviePosters/venom2.jpg)"
            movieBox9.style.backgroundSize="cover";
            break;
        case 10:
            movieBox10.style.background="url(assets/moviePosters/kgf2.jpg)"
            movieBox10.style.backgroundSize="cover";
            break;
        case 11:
            movieBox11.style.background="url(assets/moviePosters/baaghi2.jpg)"
            movieBox11.style.backgroundSize="cover";
            break;
        case 12:
            movieBox12.style.background="url(assets/moviePosters/kong2.jpg)"
            movieBox12.style.backgroundSize="cover";
            break;
        case 13:
            movieBox13.style.background="url(assets/moviePosters/wonderwoman2.jpg)"
            movieBox13.style.backgroundSize="cover";
            break;
        case 14:
            movieBox14.style.background="url(assets/moviePosters/aquaman2.jpg)"
            movieBox14.style.backgroundSize="cover";
            break;
        case 15:
            movieBox15.style.background="url(assets/moviePosters/inifinitywar2.jpg)"
            movieBox15.style.backgroundSize="cover";
            break;
        case 16:
            movieBox16.style.background="url(assets/moviePosters/endgame2.jpg)"
            movieBox16.style.backgroundSize="cover";
            break;
        case 17:
            movieBox17.style.background="url(assets/moviePosters/cm2.jpg)"
            movieBox17.style.backgroundSize="cover";
            break;
        case 18:
            movieBox18.style.background="url(assets/moviePosters/thor2.jpg)"
            movieBox18.style.backgroundSize="cover";
            break;
        case 19:
            movieBox19.style.background="url(assets/moviePosters/blackp2.jpg)"
            movieBox19.style.backgroundSize="cover";
            break;
        case 20:
            movieBox20.style.background="url(assets/moviePosters/captianAcw2.jpg)"
            movieBox20.style.backgroundSize="cover";
            break;
        case 21:
            movieBox21.style.background="url(assets/moviePosters/AAOU2.jpg)"
            movieBox21.style.backgroundSize="cover";
            break;
        default:
            break;
    }
}
const changeBG=(no)=>
{
    let movieBox1=document.getElementById("spiderMan");
    let movieBox2=document.getElementById("pushpa");
    let movieBox3=document.getElementById("bellbottom");
    let movieBox4=document.getElementById("sooryavanshi");
    let movieBox5=document.getElementById("83");
    let movieBox6=document.getElementById("attack");
    let movieBox7=document.getElementById("atarangi");
    let movieBox8=document.getElementById("eternals");
    let movieBox9=document.getElementById("venom");
    let movieBox10=document.getElementById("kgf");
    let movieBox11=document.getElementById("baaghi");
    let movieBox12=document.getElementById("kong");
    let movieBox13=document.getElementById("wonderwomen");
    let movieBox14=document.getElementById("aquaman");
    let movieBox15=document.getElementById("infinitywar");
    let movieBox16=document.getElementById("endgame");
    let movieBox17=document.getElementById("cm");
    let movieBox18=document.getElementById("thor");
    let movieBox19=document.getElementById("blackp");
    let movieBox20=document.getElementById("cacw");
    let movieBox21=document.getElementById("aaou");
    switch (no) {
        case 1:
            movieBox1.style.background="url(assets/moviePosters/spiderMan.jpg)"
            movieBox1.style.backgroundSize="cover";
            break;
    
        case 2:
            movieBox2.style.background="url(assets/moviePosters/pushpa.jpg)"
            movieBox2.style.backgroundSize="cover";
            break;
    
        case 3:
            movieBox3.style.background="url(assets/moviePosters/bellbottom.jpg)"
            movieBox3.style.backgroundSize="cover";
            break;
    
        case 4:
            movieBox4.style.background="url(assets/moviePosters/sooryavanshi.jpg)"
            movieBox4.style.backgroundSize="cover";
            break;
        case 5:
            movieBox5.style.background="url(assets/moviePosters/83.jpg)"
            movieBox5.style.backgroundSize="cover";
            break;
        case 6:
            movieBox6.style.background="url(assets/moviePosters/attack.jpg)"
            movieBox6.style.backgroundSize="cover";
            break;
        case 7:
            movieBox7.style.background="url(assets/moviePosters/atarangi.jpg)"
            movieBox7.style.backgroundSize="cover";
            break;
    
        case 8:
            movieBox8.style.background="url(assets/moviePosters/eternals.jpg)"
            movieBox8.style.backgroundSize="cover";
            break;
        case 9:
            movieBox9.style.background="url(assets/moviePosters/venom.jpg)"
            movieBox9.style.backgroundSize="cover";
            break;
        case 10:
            movieBox10.style.background="url(assets/moviePosters/kgf.jpg)"
            movieBox10.style.backgroundSize="cover";
            break;
        case 11:
            movieBox11.style.background="url(assets/moviePosters/baaghi.jpg)"
            movieBox11.style.backgroundSize="cover";
            break;
    
        case 12:
            movieBox12.style.background="url(assets/moviePosters/kong.jpg)"
            movieBox12.style.backgroundSize="cover";
            break;
    
        case 13:
            movieBox13.style.background="url(assets/moviePosters/wonderwomen.jpg)"
            movieBox13.style.backgroundSize="cover";
            break;
    
        case 14:
            movieBox14.style.background="url(assets/moviePosters/aquaman.jpg)"
            movieBox14.style.backgroundSize="cover";
            break;
        
        case 15:
            movieBox15.style.background="url(assets/moviePosters/infinitywar.jpg)"
            movieBox15.style.backgroundSize="cover";
            break;
        
        case 16:
            movieBox16.style.background="url(assets/moviePosters/endgame.jpg)"
            movieBox16.style.backgroundSize="cover";
            break;
        
        case 17:
            movieBox17.style.background="url(assets/moviePosters/cm.jpg)"
            movieBox17.style.backgroundSize="cover";
            break;
        
        case 18:
            movieBox18.style.background="url(assets/moviePosters/thor.jpg)"
            movieBox18.style.backgroundSize="cover";
            break;
        case 19:
            movieBox19.style.background="url(assets/moviePosters/blackp.jpg)"
            movieBox19.style.backgroundSize="cover";
            break;
        
        case 20:
            movieBox20.style.background="url(assets/moviePosters/captianAcw.jpg)"
            movieBox20.style.backgroundSize="cover";
            break;
        
        case 21:
            movieBox21.style.background="url(assets/moviePosters/AAOU.jpg)"
            movieBox21.style.backgroundSize="cover";
            break;
        
        default:
            break;
    }
}

const move=(no)=>
{
    switch (no) {
        case 1:
            window.location.href="html/spiderman.html";
            break;
    
        case 2:
            window.location.href="html/eternals.html";
            break;
    
        case 3:
            window.location.href="html/kgf.html";
            break;
    
        case 4:
            window.location.href="html/83.html";
            break;
    
        default:
            break;
    }

    
}