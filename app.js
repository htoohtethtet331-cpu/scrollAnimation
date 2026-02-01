gsap.registerPlugin(ScrollTrigger);

gsap.to(".fl",
{
    top :  5,
    left : 60 ,
    rotate: 390,

    duration :1 ,
    scrollTrigger : {
        trigger : ".Ht",
        start : "top 90%",
        scrub : true ,
        end : "top 10%",

    }

     
})

gsap.to(".sl",
{
    top :  20,
    left : 60 ,
    rotate: 330,

    duration :1 ,
     scrollTrigger : {
        trigger : ".Ht",
        start : "top 90%",
        scrub : true ,
        end : "top 10%",

    }


     
})
gsap.to(".fle",
{
    top :  5,
    left : 80 ,
    rotate: 330,

    duration :1 ,
     scrollTrigger : {
        trigger : ".Ht",
        start : "top 90%",
        scrub : true ,
        end : "top 10%",

    }


     
})
gsap.to(".sle",
{
    top :  20,
    left : 80 ,
    rotate: 390,
    
    duration :1 ,
     scrollTrigger : {
        trigger : ".Ht",
        start : "top 90%",
        scrub : true ,
        end : "top 10%",

    }


     
})
gsap.to(".fl2",
{
    top :  5,
    left : 95 ,
    rotate: 390,

    duration :1 ,
     scrollTrigger : {
        trigger : ".Ht",
        start : "top 90%",
        scrub : true ,
        end : "top 10%",

    }


     
})
gsap.to(".sl2",
{
    top :  20,
    left : 95 ,
    rotate: 330,

    duration :1 ,
     scrollTrigger : {
        trigger : ".Ht",
        start : "top 90%",
        scrub : true ,
        end : "top 10%",

    }


     
})
gsap.to(".fle2",
{
    top :  5,
    left : 125 ,
    rotate: 330,

    duration :1 ,
     scrollTrigger : {
        trigger : ".Ht",
        start : "top 90%",
        scrub : true ,
        end : "top 10%",

    }


     
})
gsap.to(".sle2",
{
    top :  20,
    left : 125 ,
    rotate: 390,

    duration :1 ,
     scrollTrigger : {
        trigger : ".Ht",
        start : "top 90%",
        scrub : true ,
        end : "top 10%",

    }


     
})
gsap.to(".sls",
{
    top :  0,
    left : 110 ,
    rotate: 200,

    duration :1 ,
     scrollTrigger : {
        trigger : ".Ht",
        start : "top center",
        scrub : true ,
        end : "top 10%",

    }


     
})
gsap.to(".div",{
top : 0 ,
left : 15 ,

    scrollTrigger : {
        trigger : ".div" ,
        start : "top center",
        scrub : true,
    }
})


ScrollTrigger.matchMedia({

  // 📱 Mobile
  "(max-width: 767px)": function () {
    gsap.to(".js",{
        left : 50,
    })
    gsap.to(".div", {

  });

  gsap.to('.A',{
    y : -80 ,
    x : -10 ,


  })
  gsap.to('.coder',{
   y : -80 ,
    x : -50 ,


  })
  gsap.to('.div',{
    x : 700,
    scrollTrigger :{
        trigger : ".main",
        start : "center top",
        scrub : true ,

       
    }
  })

  },

  // 💻 Desktop
  

});
gsap.registerPlugin(Draggable);

Draggable.create(".div", {
  type: "x,y",
  
});
Draggable.create(".php", {
  type: "x,y",
  
});
Draggable.create(".laravel", {
  type: "x,y",
  
});
Draggable.create(".js", {
  type: "x,y",
  
});
Draggable.create(".html", {
  type: "x,y",
  
});
Draggable.create(".css", {
  type: "x,y",
  
});






