
function loadcourse(){
    fetch("course.json").then(res=>res.json()).then (data=>{
        let h="";
        for(let x of data){
            h+=`
            <div class="subject">
                    <a href="#">
                        <img src="${x.img}" alt="">
                    </a>
                    
                    <div class="detail">
                        <div class="dis">-${x.discount}%</div>
                        <div >
                            
                            <div>Khoa hoc</div>
                        </div>
                        <a href="#">
                            <h3 class="ten">${x.name}</h3>
                        </a>
                        <ul class="rating">
                            <li>
                                <i class="fa-solid fa-star"></i>
                            </li>
                            <li>
                                <i class="fa-solid fa-star"></i>
                            </li>
                            <li>
                                <i class="fa-solid fa-star"></i>
                            </li>
                            <li>
                                <i class="fa-solid fa-star"></i>
                            </li>
                            <li>
                                <i class="fa-regular fa-star"></i>
                            </li>
                            
                        </ul>
                        <ul class="ds">
                            <li class="li1">${x.Buoi} Buoi</li>
                            <li class="li1">32 Hoc vien</li>
                        </ul>
                    </div>
                </div>
            
            
            `;
        }
        let e= document.getElementById("subjects");
        if(e!==null){
            e.innerHTML += h;
        }


    })
}


function loadtext(){
    fetch("text1.json").then(res=>res.json()).then (data=>{
        let h="";
        for(x of data){
            h+=`
                <div class="whybox">
                    <img src="${x.img}" alt="anh">
                    <h3>${x.text}</h3>
                </div> `;
        }
        let e= document.getElementById("why");
        if(e!==null) e.innerHTML =h;
    })
}
function khoah(){
    let kh = document.querySelector(".sub>a"); 
    let hiddenmenu = document.querySelector(".menu.v-menu"); 
    kh.onclick = function(){
        hiddenmenu.classList.toggle("ht");
        hiddenmenu.classList.toggle("trans");
    }
}

function cro(){
    let k = document.querySelector(".croll");
    window.addEventListener("scroll",function(){
        let dis = window.scrollY;
        if(dis > 100){
            // k.style.opacity = "1";
            k.classList.add("transs")
        }
        else{
            // k.style.opacity = "0";
            k.classList.remove("transs")

        }
    }) 
}
function scrol(){
    let h = document.querySelector(".croll");
    h.onclick = function(){
        window.scrollTo({
            top:0,
            left: 0,
            behavior: "smooth",
        });
    }
}
window.onload =()=>{
    loadcourse();
    loadtext();
    khoah();
    cro();
    scrol();
}
